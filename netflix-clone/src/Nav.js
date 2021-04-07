import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img
        className='nav-logo'
        src='https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?w=939'
        alt='Netflix Logo'
      />
      <img
        className='nav-avatar'
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='Nav avatar'
      />
    </div>
  );
}

export default Nav;
