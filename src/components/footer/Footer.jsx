import React from 'react';
import './footer.css'

const Footer = () => {

    const currentYear = new Date().getFullYear(); 
  return (
    <div className='footer'>
      <div className="content">
        <a href="/">
            <div className='taglines footer-tg'>
                <img src="/logo.png" alt=""
                height={50}
                width={50}
            />
                <span>QR Code Generator Online</span>
            </div>
        </a>
      </div>
      <p>&copy; {currentYear} QR-Code Generator Online. All rights reserved.</p>
    </div>
  );
}

export default Footer;
