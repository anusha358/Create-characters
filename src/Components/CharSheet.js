import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ATTRIBUTE_LIST, SKILL_LIST } from "../consts";
import Attributes from "./Attributes";
import ClassDetails from "./ClassDetails";
import Classes from "./Classes";
import Skills from "./Skills";

const CharSheet = ({ chars, seq }) => {
  const [attributes, setAttributes] = useState();
  const [skills, setSkills] = useState();
  const [selectedClass, setSelectedClass] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    if (chars) {
      setAttributes(chars.attributes);
      setSkills(attributes.skills);
    } else {
      let atts = {};
      ATTRIBUTE_LIST.map((att) => (atts[att] = { value: 0, ability: 0 }));
      console.log(atts);
      setAttributes(atts);
      let skillset = [];
      SKILL_LIST.map((sk) => skillset.push({ ...sk, value: 0, total: 0 }));
      console.log(skillset);
      setSkills(skillset);
    }
  }, [chars]);
  const updateSkills = (updated) => {
    setSkills(updated);
  };

  const updateAttributes = (updated) => {
    setAttributes(updated);
  };
  console.log(selectedClass);

  const {
    register: form1,
    handleSubmit: submitSkill,
    watch,
    formState: { errors: errors1 },
  } = useForm({ mode: onchange });
  const onSubmit = (data) => {
    if (
      data.dc >
      skills.reduce((accumulator, object) => {
        return accumulator + object.total;
      }, 0)
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };
  console.log(seq);
  return (
    <div className="char-sheet shadow">
      <h1 className="title">Character {seq + 1} </h1>
      <div className="skillcheck">
        <h2>Skill Check</h2>
        <form onSubmit={submitSkill(onSubmit)}>
          <div className="form-control">
            <label></label>
            {/* register your input into the hook by invoking the "register" function */}
            skill:{" "}
            <select
              {...form1("skill", {
                required: { value: true, message: "Please select a skill" },
              })}
            >
              <option value="">select</option>
              {SKILL_LIST.map((skill) => (
                <option value={skill.name} key={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
            {errors1.skill && <span>{errors1.skill.message}</span>}
          </div>
          <div className="form-control">
            {/* include validation with required or other standard HTML validation rules */}
            dc:{" "}
            <input
              type="number"
              {...form1("dc", {
                required: { value: true, message: "Please enter a number" },
                min: { value: 1, message: "minimum value is 1" },
              })}
            />
            {/* errors will return when field validation fails  */}
            {errors1.dc && <span>{errors1.dc.message}</span>}
          </div>
          <div>
            <input type="submit" value="Roll" className="form-btn" />
            {error && <error style={{ color: "red" }}> Not Successfull </error>}
            {error === false && (
              <span style={{ color: "green" }}>Success!</span>
            )}
          </div>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="skillcheck box-1">
          <Attributes
            attributes={attributes}
            updateAttributes={updateAttributes}
          />
        </div>
        <div className="skillcheck box-2">
          <Classes
            skills={skills}
            attributes={attributes}
            setSelectedClass={setSelectedClass}
          />
        </div>
        {selectedClass && (
          <div className="skillcheck box-4">
            <ClassDetails
              selected={selectedClass}
              setSelectedClass={setSelectedClass}
            />
          </div>
        )}
        <div className="skillcheck box-3">
          <Skills
            skills={skills}
            updateSkills={updateSkills}
            attributes={attributes}
          />
        </div>

        {/* <Classes/> */}
      </div>
    </div>
  );
};

export default CharSheet;
