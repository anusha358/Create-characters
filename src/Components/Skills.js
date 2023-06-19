import React,{useState,useEffect} from 'react'
import { SKILL_LIST } from '../consts'

const Skills = ({skills,updateSkills,attributes}) => {

   
    const incrementCount = (skill) => {
        let updated = { ...skills }
        updated[skill] = skills[skill] + 1
        updateSkills(updated)

    }
    const decrementCount = (skill) => {
        let updated = { ...skills }
        updated[skill] = skills[skill] - 1
        updateSkills(updated)

    }
    console.log(skills)

  return (
    <div>
<h1> Skills</h1>
<p> Total skill points available: {skills && Object.values(skills).reduce((a, b) => a + b, 0)}</p>
{skills && Object.keys(skills).map(sk => 
        <li key={sk} style={{ listStyle:"none"}}> {sk}:{skills[sk]}(Modifier:{SKILL_LIST.find(l => l.name === sk).attributeModifier})
        :{attributes[SKILL_LIST.find(l => l.name === sk).attributeModifier].ability}
        <button onClick={() => { incrementCount(sk) }}>+</button>
        <button onClick={() => decrementCount(sk)}>-</button>
        total:{skills[sk]+attributes[SKILL_LIST.find(l => l.name === sk).attributeModifier].ability}
        </li>)}


    </div>
  )
}

export default Skills