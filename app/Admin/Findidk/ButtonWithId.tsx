'use client'
import { useRouter } from 'next/navigation';
import React from 'react'


const ButtonWithId = (props : any) => {
const router = useRouter();

  return (
    <div className={`default-button ${props.className}`} onClick={
        
        ()=>{
            router.push('/Admin/Findidk/' + props.id)
        }
    }>
      View 
    </div>
  )
}

export default ButtonWithId