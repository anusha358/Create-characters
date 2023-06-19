import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState ,useEffect} from 'react'
import { useForm } from "react-hook-form";
import { ATTRIBUTE_LIST, SKILL_LIST } from '../consts';
import Attributes from './Attributes';
import Classes from './Classes';
import Skills from './Skills';


const CharSheet = ({ char, seq }) => {

    const [attributes,setAttributes] = useState()
    const [skills,setSkills]=useState()

    useEffect(() => {
        let atts = {}
        ATTRIBUTE_LIST.map(att => atts[att] = { value: 0, ability: 0 })
        console.log(atts)
        setAttributes(atts)
            let skillset = {}
            SKILL_LIST.map(sk => skillset[sk.name] = 0)
            console.log(skillset)
            setSkills(skillset)
    

    }, [])
    const updateSkills = (updated)=>{

        setSkills(updated)
      }

      const updateAttributes = (updated)=>{
    
       
        setAttributes(updated)
    
    
      }
    
    
    const { register:form1, handleSubmit:submitSkill, watch, formState: { errors :errors1} } = useForm({mode:onchange});
    const onSubmit = data => console.log(data);
    console.log(seq)
    return (
        <div style={{padding:"10rem"}}>
            <h1 className='title'>Character {seq + 1} </h1>
            <div className="skillcheck">
                <form onSubmit={submitSkill(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    skill: <select  {...form1("skill",{required:{value:true,message:"Please select a skill"}})} >
                        <option value="">select</option>
                        {SKILL_LIST.map(skill=><option value={skill.name} key={skill.name   }>{skill.name}</option>)}

                        </select>

                    {/* include validation with required or other standard HTML validation rules */}
                    dc: <input type="number" {...form1("dc", { required: {value:true,message:"Please enter a number"} })} />
                    {/* errors will return when field validation fails  */}
                    {errors1.exampleRequired && <span>This field is required</span>}

                    <input type="submit" value="Roll" />
                </form>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div>
                    <Attributes attributes={attributes} updateAttributes={updateAttributes}/>

                    </div>
                    <div>
                    <Classes skills={skills} attributes={attributes}/>

                    </div>
                    <div>
                    <Skills skills={skills} updateSkills={updateSkills} attributes={attributes}/>

                    </div>
                    
                {/* <Classes/> */}
                </div>
                


            </div>


        </div>

    )
}

export default CharSheet