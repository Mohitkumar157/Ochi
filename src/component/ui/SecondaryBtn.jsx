import React from 'react'

function SecondaryBtn({className , label}) {
  return (
    <button className={`uppercase absolute bottom-0 left-4 ${className}`}>
        {label}
    </button>
  )
}

export default SecondaryBtn
