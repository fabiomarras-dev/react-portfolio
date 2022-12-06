import React from 'react';
import Projeto from '../images/projeto.png';
//react popup box
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';


const Projects = () => {

//first project
const openPopupboxProject1 = () =>{
    const content = (
        <>
        <img className='popup-image' src={Projeto} alt="Project1"></img>
        <p className='popup-text'>Project1 ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices laoreet tortor non consequat. Sed varius rhoncus eleifend.</p> 
        <a className='hyper-link' onClick={() => window.open('https://github.com/todoketee')}>https://github.com/todoketee</a>
        </>
    )

    PopupboxManager.open({content})
}

const popupboxConfigProject1 = {
    titleBar: {
        enable: true,
        text: "Project 1",
    },
}

//second project
const openPopupboxProject2 = () =>{
    const content = (
        <>
        <img className='popup-image' src={Projeto} alt="Project1"></img>
        <p className='popup-text'>Project2 ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices laoreet tortor non consequat. Sed varius rhoncus eleifend.</p> 
        <a className='hyper-link' onClick={() => window.open('https://github.com/todoketee')}>https://github.com/todoketee</a>
        </>
    )

    PopupboxManager.open({content})
}

const popupboxConfigProject2 = {
    titleBar: {
        enable: true,
        text: "Project 2",
    },
}

//third project
const openPopupboxProject3 = () =>{
    const content = (
        <>
        <img className='popup-image' src={Projeto} alt="Project1"></img>
        <p className='popup-text'>Project3 ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices laoreet tortor non consequat. Sed varius rhoncus eleifend.</p> 
        <a className='hyper-link' onClick={() => window.open('https://github.com/todoketee')}>https://github.com/todoketee</a>
        </>
    )

    PopupboxManager.open({content})
}

const popupboxConfigProject3 = {
    titleBar: {
        enable: true,
        text: "Project 3",
    },
}

//fourth project
const openPopupboxProject4 = () =>{
    const content = (
        <>
        <img className='popup-image' src={Projeto} alt="Project1"></img>
        <p className='popup-text'>Project4 ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices laoreet tortor non consequat. Sed varius rhoncus eleifend.</p> 
        <a className='hyper-link' onClick={() => window.open('https://github.com/todoketee')}>https://github.com/todoketee</a>
        </>
    )

    PopupboxManager.open({content})
}

const popupboxConfigProject4 = {
    titleBar: {
        enable: true,
        text: "Project 4",
    },
}

  return (
   <div className='projects-wrapper'>
        <div className='container'>
            <h1 className='text-center py-5'>My Projects</h1>

            <div className='d-flex row'>
                <div className='col-sm-5 d-block mx-auto row overflow' onClick={openPopupboxProject1}>
                    <img className='projects-image' src={Projeto} alt=""></img>
                </div>
                <div className='col-sm-5 d-block mx-auto row overflow' onClick={openPopupboxProject2}>
                    <img className='projects-image' src={Projeto} alt=""></img>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-5 d-block mx-auto row overflow' onClick={openPopupboxProject3}>
                    <img className='projects-image' src={Projeto} alt=""></img>
                </div>
                <div className='col-sm-5 d-block mx-auto row overflow' onClick={openPopupboxProject4}>
                    <img className='projects-image' src={Projeto} alt=""></img>
                </div>
            </div>
            {/* still need to fix this area*/}
            <PopupboxContainer {...popupboxConfigProject1}/>
            <PopupboxContainer {...popupboxConfigProject2}/>
            <PopupboxContainer {...popupboxConfigProject3}/>
            <PopupboxContainer {...popupboxConfigProject4}/>
        </div>
   </div>
  )
}

export default Projects