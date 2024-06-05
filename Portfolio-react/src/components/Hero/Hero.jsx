import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
       <img src="../../public/img.jpg" alt="" />
       <h1><span>I'm Bikash Lama Waiba, </span>Web developer based in Australia</h1>
       <p>Dynamic and resourceful Full Stack Developer with two years of hands-on experience in designing, developing, and implementing web applications. Proficient in both front-end and back-end technologies, adept at collaborating with cross-functional teams to deliver high-quality solutions. Demonstrated expertise in utilizing a diverse range of programming languages, frameworks, and tools to streamline processes and enhance user experiences. Possesses a keen eye for detail, a passion for innovation, and a commitment to staying updated with emerging technologies in the ever-evolving landscape of web development.
      </p>
       <div className="hero-action">
          <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me </AnchorLink>
          </div>
          <div className="hero-resume">My resume</div>
       </div>
    </div>
  )
}

export default Hero;