import React from 'react'
import './works.css'
import Portfolio from '../../assets/portfolio-1.png'
import tomato from '../../assets/tomato website.png'
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
          <img src={Portfolio} class="worksImg" alt="" />
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div class="buttons__container">
              <button class="acceptButton">Understood</button>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={Portfolio} class="worksImg" alt="" />
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div class="buttons__container">
              <button class="acceptButton">Understood</button>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Works