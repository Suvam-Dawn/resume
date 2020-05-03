import React, {Component} from 'react';
import {FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter} from 'react-icons/fa';
export default class SummeryInfo extends Component {
  render() {
    return (
      <div className={'userImage'}>
        <div className={'background'}></div>
        <div className={'info'}>
          <div className={'_name'}>Suvam Dawn</div>
          <div className={'_position'}>Software Developer</div>
          <div className={'_socialMedia'}>
            <a href="https://github.com/Suvam-Dawn">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/suvamdawn">
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://www.facebook.com/suvam.dawn.9">
              <FaFacebookF size={22} />
            </a>
            <a href="https://twitter.com/Suvam_Dawn">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
