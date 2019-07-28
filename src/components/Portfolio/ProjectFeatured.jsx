import React from 'react'
import style from './ProjectFeatured.module.css'

const ProjectFeatured = () => {
  return (
    <div style={{gridColumn: 'span 3 / auto'}}>
      <div className={style.featuredProjectContainer}>Featured Project</div>
    </div>
  )
}

export default ProjectFeatured
