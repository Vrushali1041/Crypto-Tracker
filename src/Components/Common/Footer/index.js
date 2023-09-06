import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./style.css"

function Footer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleListClick = (index) => {
    setActiveIndex(index);
  };

  const indicatorStyle = {
    transform: `translateX(calc(52px * ${activeIndex}))`,
  };

  return (
    <div className="footer">
      <h2> Crypto Tracker. </h2>
      <div>
        <ul>
          <li className={`list ${activeIndex === 0 ? 'active' : ''}`}>
            <a href="#facebook" onMouseOver={() => handleListClick(0)}>
              <span className="icon"><FacebookIcon /></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 1 ? 'active' : ''}`}>
            <a href="#email" onMouseOver={() => handleListClick(1)}>
              <span className="icon"><EmailIcon /></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 2 ? 'active' : ''}`}>
            <a href="#twitter" onMouseOver={() => handleListClick(2)}>
              <span className="icon"><TwitterIcon /></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 3 ? 'active' : ''}`}>
            <a href="#insta" onMouseOver={() => handleListClick(3)}>
              <span className="icon"><InstagramIcon /></span>
            </a>
          </li>
          <div className="indicator" style={indicatorStyle}></div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
