import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Content from './Content';
import {Helmet} from 'react-helmet';
import SideMenu from './SideMenu';
export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    this.updateWindowDimensions();
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  getStyles() {
    const styles = {};
    if (this.state.width < 991) {
      styles.paddingTop = '0px';
      styles.height = `${this.state.height}px`;
      styles.leftMenuMarginTop = '0px';
    } else {
      styles.height = `${this.state.height - this.state.height * 0.1}px`;
      styles.paddingTop = `${this.state.height * 0.03}px`;
      styles.leftMenuMarginTop = '40px';
    }

    return styles;
  }
  render() {
    return (
      <div className="content_div">
        <Helmet
          style={[
            {
              cssText: `
            .container{
                min-height: ${this.getStyles().height};
                max-height: ${this.getStyles().height};
                height: ${this.getStyles().height};
            },
            .rootDiv{
                min-height: ${this.getStyles().height};
                max-height: ${this.getStyles().height};
                height: ${this.getStyles().height};
            }            
        `,
            },
          ]}
        />
        <div className={'container height-100'}>
          <Row className={'h-100'}>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className={'p-0 content_div_left'}
            >
              <SideMenu />
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
              <Content />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
