import React from 'react';
import './Hero.css';
import porfile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'>
       <img src={porfile_img} alt="" />
       <h1><span>I'm Bikash Lama, </span>developer based in Australia</h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque deleniti qui pariatur possimus aut. Mollitia libero eos ipsam non minus voluptas similique veritatis facilis temporibus possimus exercitationem, asperiores consequatur reprehenderit.</p>
       <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My resume</div>
       </div>
    </div>
  )
}

export default Hero;