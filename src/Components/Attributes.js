import React, { useState, useEffect } from 'react'
import { ATTRIBUTE_LIST } from '../consts'

const Attributes = ({ attributes, updateAttributes }) => {
    console.log()

    const calculate_AbilityMofiier = (value) => {

        if (value >= 10) {
            return Math.trunc((value - 10) / 2)
        }
        else {
            return value - 10

        }

    }
   
    const incrementCount = (attr) => {
        let updated = { ...attributes }
        console.log(attr, attributes)
        updated[attr] = { value: attributes[attr].value + 1, ability: calculate_AbilityMofiier(attributes[attr].value + 1) }
        console.log(updated)
        updateAttributes(updated)

    }
    const decrementCount = (attr) => {
        let updated = { ...attributes }
        updated[attr] = { value: attributes[attr] - 1, ability: calculate_AbilityMofiier(attributes[attr] = 1) }
        updateAttributes(updated)

    }

    return (<>
    <h1>Attributes</h1>
        {attributes && Object.keys(attributes).map(attr =>
            <li key={attr} style={{ listStyle: "none" }}> {attr}:{attributes[attr].value}({attributes[attr].ability})
                <button onClick={() => { incrementCount(attr) }}>+</button>
                <button onClick={() => decrementCount(attr)}>-</button></li>)}


    </>


    )
}

export default Attributes