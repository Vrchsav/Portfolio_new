import React from 'react'
import { useState } from 'react'
import './contact.css'
import linkdin from '../../assets/Linkdin.png'
import github from '../../assets/github.png'
import leetcode from '../../assets/leetcode.png'
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";



const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "129fc767-b16b-4f2d-ad2f-67fd39b46eb8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success(res.message);
    }

    if (res.error) {
      toast.error(res.message);
    }
    setMessage("");
    setEmail("");
    setName("");
  };
  return (
    <section className='contactPage'>
     
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm'  onSubmit={onSubmit} > 
          <input type="text" className='name' placeholder='Your Name' name='name'  value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" className='email' placeholder='Your Email' name='email'  value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea className="msg" name='message' rows={5} placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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