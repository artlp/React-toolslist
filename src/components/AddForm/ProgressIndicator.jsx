import React from 'react'

const ProgressIndicator = (props) => {
  return (
    <div className={`page-indicator ${props.step === props.index ? 'active-page' : ''}`}></div>
  )
}

export default ProgressIndicator