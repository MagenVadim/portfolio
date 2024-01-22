import React from 'react'

function TypeForm({className, type, placeholder, blurHandler, name}) {
  return (
    <div className={className}>
        <div className="form-group">
            <input onBlur={e=>blurHandler(e)} name={name} type={type} className="form-control" placeholder={placeholder} required/>
        </div>
    </div>
  )
}

export default TypeForm
