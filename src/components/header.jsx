import React, { useState, useEffect } from 'react';

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${hasShadow ? 'shadow' : ''}`} id="header">
      <nav className="NavBar">
        <div>
          <a href="#">
            <img
              className="Logo_image"
              src="./images/logo_image.png"
              alt="logo_image"
            />
            <h2 className="text-[#EDEADE] text-2xl font-bold">Kabeer <span className="text-[#ff014f] text-2xl font-bold">Ahmed</span></h2>
          </a>
        </div>
        <ul className="MenuBar">
          <li>
            <a className="active" href="#">
              HOME
            </a>
          </li>
          <li>
            <a href="#features">SKILLS</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">CLIENTS</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <a className="CallToAction" href="#">
            GET A QUOTE
          </a>
        </ul>
        <span id="MenuIcon" className="material-symbols-outlined">
          menu
        </span>
      </nav>
    </header>
  );
};

export default Header;
