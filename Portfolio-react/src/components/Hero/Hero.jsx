import React from 'react';
import './Hero.css';
import porfile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
       <img src={porfile_img} alt="" />
       <h1><span>I'm Bikash Lama Waiba, </span>Computer Engineer Full Stack developer based in Australia</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque deleniti qui pariatur possimus aut. Mollitia libero eos ipsam non minus voluptas similique veritatis facilis temporibus possimus exercitationem, asperiores consequatur reprehenderit.</p>
       <div className="hero-action">
          <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me </AnchorLink>
          </div>
          <div className="hero-resume">My resume</div>
       </div>
    </div>
  )
}

export default Hero;