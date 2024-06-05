import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id='about' className='about'>
       <div className="about-title">
          <h1>About me</h1>
           <img src={theme_pattern} alt="" />  
       </div>
        <div className="about-sections">
           <div className="about-left">
             <img src="../../public/img.jpg" alt="" />
           </div>
            <div className="about-right">
                <div className="about-para">
                   <p>Passionate about leveraging technology to create innovative solutions and enhance user experiences, I am a dedicated Full Stack Developer with two years of hands-on experience in the dynamic field of web development. With a background in computer science and a natural curiosity for exploring new technologies, I thrive in fast-paced environments where collaboration and creativity are valued.</p>
                   <p>As a web developer, I am driven by a desire to make a positive impact through technology, and I am excited about the opportunities that lie ahead to leverage my skills and expertise to create meaningful solutions that empower users and drive business success.</p>
                </div>
                 <div className="about-skills">
                   <div className="about-skill">
                     <p>Html & Css</p>
                     <hr style={{width:"70%"}}/>
                   </div>
                   <div className="about-skill">
                     <p>JavaScript</p>
                     <hr style={{width:"60%"}}/>
                   </div>
                   <div className="about-skill">
                     <p>React Js</p>
                     <hr style={{width:"50%"}}/>
                   </div>
                   <div className="about-skill">
                     <p>Python</p>
                     <hr style={{width:"60%"}}/>
                   </div>
                   <div className="about-skill">
                     <p>C & C++</p>
                     <hr style={{width:"70%"}}/>
                   </div>
                 </div>
            </div>
        </div>
         <div className="about-achievements">
           <div className="about-achievement">
             <h1>10+</h1>
             <p>ACHIEMENTS</p>
           </div>
           <hr />
           <div className="about-achievement">
             <h1>100+</h1>
             <p>COMPLETE LESSION</p>
           </div>
           <hr />
           <div className="about-achievement">
             <h1>30+</h1>
             <p>PROJECT COMPLETED</p>
           </div>
         </div>
    </div>
  )
}

export default About;