import React from 'react'
import ProjectFeatured from './ProjectFeatured';
import ProjectCard from './ProjectCard';
import style from './PortfolioWrapper.module.css'
import ProjectDetails from './ProjectDetails';


const Portfolio = () => {
  return (
    <div className={style.portfolioContainer}>
      <ProjectFeatured className={style.portfolioMain} />
      <div className={style.wideCard}>
        <ProjectCard />
      </div>
      <div className={style.thinCard}>
        <ProjectDetails />
      </div>
      <div className={style.thinCard}>
        <ProjectDetails />
      </div>
      <div className={style.wideCard}>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Portfolio
