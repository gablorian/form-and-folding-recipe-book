import React from 'react';
import './App.css';
import dolneLogo from './images/logo kopia.png'
function Footer() {
    return (
        <div className='footer'>
            <div className='container justCenterIt'>
                <img src={dolneLogo} alt='inne logo' className='bottomLogo'/>
            </div>
        </div>

    );
}

export default Footer;