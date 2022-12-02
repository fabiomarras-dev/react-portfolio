import React from 'react'
import Projeto from '../images/projeto.png'

const Projects = () => {
  return (
   <div className='projects-wrapper'>
        <div className='container'>
            <h1 className='text-uppercase text-center py-5'>Projects</h1>
            <div className='image-box-wrapper row mx-auto d-block projectsimages'>
                <img className='projects-image' src={Projeto} alt=""></img>
            </div>
            <div className='image-box-wrapper row mx-auto d-block projectsimages'>
                <img className='projects-image' src={Projeto} alt=""></img>
            </div>
            <div className='image-box-wrapper row mx-auto d-block projectsimages'>
                <img className='projects-image' src={Projeto} alt=""></img>
            </div>
            <div className='image-box-wrapper row mx-auto d-block projectsimages'>
                <img className='projects-image' src={Projeto} alt=""></img>
            </div>
        </div>
   </div>
  )
}

export default Projects