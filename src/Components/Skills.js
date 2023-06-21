import React from 'react'

const Skills = ({skills,updateSkills,attributes}) => {

   
    const incrementCount = (skill,index) => {

      const modifier_skill = skills?.filter(all=>all.attributeModifier === skill.attributeModifier).reduce((accumulator, object) => {
        return accumulator + object.value;
      }, 0);

      if(modifier_skill > attributes[skill.attributeModifier].value){
        window.alert( `There are not enough attributes to add skills for ${skill.attributeModifier} `)
        return
      }
      

        let updated = [...skills ]
        updated[index].value= updated[index].value+1
        updated[index].total = updated[index].value + attributes[updated[index].attributeModifier].ability
        updateSkills(updated)

    }
    const decrementCount = (skill,index) => {
        let updated = [ ...skills]
        updated[index].value= updated[index].value-1
        updated[index].total = updated[index].value + attributes[updated[index].attributeModifier].ability

        updateSkills(updated)

    }
    console.log(skills)

  return (
    <div>
<h1> Skills</h1>
<p> Total skill points available: {skills && skills.map(sk=>sk.total).reduce((a, b) => a + b, 0)}</p>
<ul>
{skills && (skills).map((sk ,i)=> 
  <li key={sk.name} className="list"> {sk.name}:{sk.value}(Modifier:{sk.attributeModifier})
        :{attributes[sk.attributeModifier].ability}
        <button onClick={() => { incrementCount(sk,i) }}>+</button>
        <button onClick={() => decrementCount(sk,i)}>-</button>
        total:{ sk.total}
        </li>

       )}
       </ul>


    </div>
  )
}

export default Skills