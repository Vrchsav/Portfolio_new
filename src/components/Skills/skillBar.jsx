import React from 'react'
import './skillBar.css'

const SkillBar = (props) => {
  return (
    <div className='skillBar'>
        <img src={props.img} alt="skills" className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>{props.head}</h2>
            <p>{props.p}</p>
        </div>
    </div>
  )
}

export default SkillBar