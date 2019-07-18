import React from 'react'
import ProjectFeatured from './ProjectFeatured';
import ProjectCard from './ProjectCard';
import style from './Portfolio.module.css'


const Portfolio = () => {
  return (
    <div className={style.portfolioContainer}>
      <ProjectFeatured className={style.portfolioMain} />
      <div className={style.wideCard}>
        <ProjectCard />
      </div>
      <div className={style.thinCard}>
        <ProjectCard />
      </div>
      <div className={style.thinCard}>
        <ProjectCard />
      </div>
      <div className={style.wideCard}>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Portfolio
