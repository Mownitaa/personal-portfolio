import React from 'react'
import Project from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

export const Projects = () => {
  return (
    <div>
       {/* <p className="animate__animated animate__pulse animate__infinite infinite	" style={{ fontWeight: 600, fontSize: '50px', marginTop: '70px', marginBottom: '2%', textAlign: 'center' }}>Portfolio <span style={{ fontSize: '20px' }}>[sneak peek]</span></p> */}
      <Project></Project>
      <Project2></Project2>
      <Project3></Project3>
    </div>
  )
}
