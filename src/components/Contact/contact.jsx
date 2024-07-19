import React from 'react'
import { useRef } from 'react'
import './contact.css'
import linkdin from '../../assets/Linkdin.png'
import github from '../../assets/github.png'
import leetcode from '../../assets/leetcode.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u6qdhi1', 'template_cwnjdyl', form.current, {
        publicKey: 'rz0usZAJ5HIi94kBhM5q1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          alert('Email sent successfully!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='contactPage'>
     
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail} > 
          <input type="text" className='name' placeholder='Your Name' name='your_name' />
          <input type="email" className='email' placeholder='Your Email' name='your_email' />
          <textarea className="msg" name='message' rows={5} placeholder='Your Message'></textarea>
          {/* <button type='submit' value="Send" className='submitBtn' >Submit</button> */}
          <button type='submit' value="Send" className='submitBtn' >
        <span>Contact Me</span>
      </button>
          <div className='links'>
            <a href="https://www.linkedin.com/in/vrchsav"  target="_blank"><img src={linkdin} alt=" linkdin" className='link' /></a>
            <a href="https://github.com/Vrchsav"  target="_blank"><img src={github} alt=" github" className='link' /></a>
            <a href="https://leetcode.com/kumarvrchsav/"  target="_blank"><img src={leetcode} alt=" leetcode" className='link' /></a>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Contact