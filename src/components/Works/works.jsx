import React from 'react'
import './works.css'
import Portfolio from '../../assets/portfolio-1.png'
import tomato from '../../assets/tomato website.png'
import ESTATECONNECT from '../../assets/ESTATE CONNECT.jpg'
import ongoing from '../../assets/ongoing.png'
const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>Here is a compilation of my professional achievements across diverse programming languages.

      </span>
      <div className='worksImgs'>
        <div className='card'>
          <img src={tomato} class="worksImg" alt="" />
          <div class="card__content">
            <p class="card__title">tomato ecommerce</p>
            <p class="card__description">Welcome to Tomato, the one-stop online marketplace bringing the freshest and finest assortment of culinary delights right to your doorstep. Our platform is a vibrant fusion of traditional flavors and modern convenience, crafted meticulously using the robust MERN stack to ensure a seamless and responsive experience for food aficionados.</p>
            <div class="buttons__container">
              <a href="https://food-ecommerce-pi.vercel.app/" target="_blank">
              <button class="acceptButton">Live Demo</button></a>
            </div>
          </div>
        </div>

        <div className='card'>
          <img src={ESTATECONNECT} class="worksImg" alt="" />
          <div class="card__content">
            <p class="card__title">ESTATE CONNECT</p>
            <p class="card__description">Effortlessly navigate a curated haven of properties tailored to your desires with our MERN stack-powered platform.  ESTATE-CONNECT boasts a sleek, tailwind-driven interface, making your real estate journey intuitive and empowering.  Find your perfect match with ESTATE-CONNECT - where dream homes become reality.</p>
            <div class="buttons__container">
              <a href="https://estate-connect.onrender.com/" target="_blank">
              <button class="acceptButton">Live Demo</button></a>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={ongoing} class="worksImg" alt="" />
          <div class="card__content">
            <p class="card__title">ed-tech platform</p>
            <p class="card__description"> This platform enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.</p>
            <div class="buttons__container">
              <a href="https://github.com/Vrchsav/ed-tech-platform" target="_blank">
              <button class="acceptButton">Git Link</button></a>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Works