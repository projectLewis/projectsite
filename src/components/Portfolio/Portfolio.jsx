import React from 'react'
import ProjectFeatured from './ProjectFeatured';
import ProjectCard from './ProjectCard';
import style from './Portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={style.portfolioContainer}>
      <ProjectFeatured />
      <div className={style.cardsContainer}>
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Portfolio
