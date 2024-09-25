'use client'
import React from 'react'
import './Button.scss'
function BackButton(props:any) {
  return (
    <div className={`default-button ${props.className}`}
     onClick={() => window.history.back()}>
       Back
    </div>
  )
}

export default BackButton