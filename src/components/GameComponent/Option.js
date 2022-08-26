import React from 'react'

export default function Option({option,handleCheck}) {
  return (
    <div>
         <label
                
                style={{
                  display: "flex",
                }}
              >
                <input
                  type="radio"
                  value={option}
                  name="check"
                  onClick={handleCheck}
                />
                {option}
              </label>
    </div>
  )
}
