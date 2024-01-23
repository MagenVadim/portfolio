import React from 'react'

function TypeForm({className, type, placeholder, blurHandler, name, value, fieldlHandler}) {
  return (
    <div className={className}>
        <div className="form-group">
            <input
              onChange ={e=>fieldlHandler(e)}
              onBlur = {e=>blurHandler(e)}
              name={name}
              type={type}
              className="form-control"
              placeholder={placeholder}
              value={value}              
            />
        </div>
    </div>
  )
}

export default TypeForm
