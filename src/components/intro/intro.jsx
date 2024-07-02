import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import resume from '../../assets/resume.png'
const Intro = () => {
  return (
    <section  id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className ='introText'>I'm <span className='introName'><section class="animation">
    <div class="first"><div>Vrchsav</div></div>
    <div class="second"><div>Web Developer</div></div>
    <div class="third"><div>Programmer</div></div>
    </section>
    </span></span>
        <p className='introPara'>Hello world! I’m  Vrchsav, a web developer and DSA enthusiast with a flair for creating sleek,<br /> user-friendly websites and solving complex coding challenges.</p>
        <a href="https://drive.google.com/file/d/1EvGGLznjHq-Mm3LUvfVTG2H3wWFLoWTM/view?usp=sharing" target="_blank"><button>
        <span>Resume</span>
      </button></a>
      </div>
      <img src={bg} alt="Profile"  className='bg'/>
    </section>
  )
}

export default Intro