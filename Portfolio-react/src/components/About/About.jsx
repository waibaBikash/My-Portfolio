import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg';

const About = () => {
  return (
    <div className='about'>
       <div className="about-title">
          <h1>About me</h1>
           <img src={theme_pattern} alt="" />  
       </div>
        <div className="about-sections">
           <div className="about-left">
             <img src={profile_img} alt="" />
           </div>
            <div className="about-right">
                <div className="about-para">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reiciendis totam accusantium at ex neque quibusdam deserunt ipsum in numquam quaerat doloremque exercitationem nihil ipsam, nobis sapiente aspernatur soluta? Dolorem?</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non est numquam inventore, earum consequuntur optio nesciunt laudantium rem molestiae.</p>
                </div>
                 <div className="about-skills">
                   <div className="about-skill">
                     <p>Html $ Css</p>
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
                 </div>
            </div>
        </div>
         <div className="about-achievements">
           <div className="about-achievement">
             <h1>10+</h1>
             <p>PROJECT COMPLETED</p>
           </div>
           <hr />
           <div className="about-achievement">
             <h1>20+</h1>
             <p>PROJECT COMPLETED</p>
           </div>
         </div>
    </div>
  )
}

export default About;