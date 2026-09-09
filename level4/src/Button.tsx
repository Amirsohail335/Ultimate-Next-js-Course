import React from 'react'

type buttonProps={
    data:string,
    action:()=>void
}


const Button=({data,action}:buttonProps)=> {
  return (
    <div>
      hello Button
    </div>
  )
}

export default Button
