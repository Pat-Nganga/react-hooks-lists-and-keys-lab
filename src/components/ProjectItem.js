import React from 'react'

function ProjectItem({ name, about, technologies }) {
  return (
    // <div className='project-item'>
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      {technologies.map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>
  )
}

export default ProjectItem
