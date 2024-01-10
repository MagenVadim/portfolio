import React from 'react'

function TypeForm({className, type, placeholder}) {
  return (
    <div className={className}>
        <div className="form-group">
            <input type={type} className="form-control" placeholder={placeholder}/>
        </div>
    </div>
  )
}

export default TypeForm
