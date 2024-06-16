import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import SkillBar from './skillBar'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>About Me</span>
            <span className='skillDesc'>  My journey in tech is fueled by a blend of creativity and analytical thinking, ensuring each line of code not only looks good but also performs optimally.

With a solid foundation in both front-end development and data structures and algorithms, I approach every project with a problem-solving mindset. Whether it’s crafting responsive layouts or optimizing search algorithms, my goal is to deliver an exceptional digital experience.</span>
            <div className='skillBars'>
                <SkillBar img={UIDesign} head="Real World Projects"></SkillBar>
                <SkillBar img={WebDesign}  head="250+ Leetcode Problems"></SkillBar>
                <SkillBar img={AppDesign } head="5 star problem solver" p="in hacker rank"></SkillBar>
            </div>    
        </section>
    )
}

export default Skills