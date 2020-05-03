import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {FiMenu} from 'react-icons/fi';
import {MdWork, MdSettings, MdContacts} from 'react-icons/md';
import {FaUserAlt, FaUserGraduate} from 'react-icons/fa';
import {AiOutlineCloudDownload} from 'react-icons/ai';
import Content from './Content';
import {Helmet} from 'react-helmet';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
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
              <div className={'content_div__head'}>
                <div className="left-menu">
                  <div className={'menuBtn'}>
                    <FiMenu size={25} />
                  </div>
                  <div className={'menuList'}>
                    <Link to="/about">
                      <FaUserAlt size={25} />
                    </Link>
                    <Link to="/experience">
                      <MdWork size={25} />
                    </Link>
                    <Link to="/skills">
                      <MdSettings size={25} />
                    </Link>
                    <Link to="/education">
                      <FaUserGraduate size={25} />
                    </Link>
                    <Link to="/contact">
                      <MdContacts size={25} />
                    </Link>
                  </div>
                  <div className={'download'}>
                    <AiOutlineCloudDownload size={45} />
                  </div>
                </div>
              </div>
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
