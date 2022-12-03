import React from 'react'
import Projeto from '../images/projeto.png'

const Projects = () => {
  return (
   <div className='projects-wrapper'>
        <div className='container'>
            <h1 className='text-center py-5'>My Projects</h1>

            <div className='d-flex row'>
                <div className='col-sm-5 d-block mx-auto row overflow'>
                    <img className='projects-image' src={Projeto} alt=""></img>
                </div>
                <div className='col-sm-5 d-block mx-auto row overflow'>
                    <img className='projects-image' src={Projeto} alt=""></img>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-5 d-block mx-auto row overflow'>
                    <img className='projects-image' src={Projeto} alt=""></img>
                </div>
                <div className='col-sm-5 d-block mx-auto row overflow'>
                    <img className='projects-image' src={Projeto} alt=""></img>
                </div>
            </div>

        </div>
   </div>
  )
}

export default Projects