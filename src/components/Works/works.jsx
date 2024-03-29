import React from 'react'
import './works.css'
import Portfolio from '../../assets/portfolio-1.png'
const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>Here is a compilation of my professional achievements across diverse programming languages.

</span>
        <div className='worksImgs'>
          <img src={Portfolio} alt="" className="worksImg" />
          <img src={Portfolio} alt="" className="worksImg" />
          <img src={Portfolio} alt="" className="worksImg" />
          <img src={Portfolio} alt="" className="worksImg" />
          <img src={Portfolio} alt="" className="worksImg" />
          <img src={Portfolio} alt="" className="worksImg" />

        </div>
    </section>
  )
}

export default Works