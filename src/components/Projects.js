import React from 'react';
import Projeto from '../images/projeto.png';
import Coolcars from '../images/coolcars.png';
import Soon from '../images/soon.png';
//react popup box
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

//*need to fix titles
const Projects = () => {

//first project
const openPopupboxProject1 = () =>{
    const content = (
        <>
        <img className='popup-image' src={Projeto} alt="React-Portfolio"></img>
        <p className='popup-text'>React Portfolio: this very website, which is a portfolio made with the help of React and Bootstrap.</p> 
        <p className='popup-text'>Link of the code on github:<a className='hyper-link' onClick={() => window.open('https://github.com/todoketee/react-portfolio')}>https://github.com/todoketee/react-portfolio</a></p>
        </>
    )

    PopupboxManager.open({content})
}

const popupboxConfigProject1 = {
    titleBar: {
        enable: true,
        text: "Project Preview",
    },
}

//second project
const openPopupboxProject2 = () =>{
    const content = (
        <>
        <img className='popup-image' src={Coolcars} alt="Cool-cars"></img>
        <p className='popup-text'>Cool Cars: which is a cars gallery made with Javascript and Html.</p> 
        <p className='popup-text'>Link of the code on github:<a className='hyper-link' onClick={() => window.open('https://github.com/todoketee/javascript-gallery')}>https://github.com/todoketee/javascript-gallery</a>
        <br/>
        Link of the website:<a className='hyper-link' onClick={() => window.open('https://javascript-gallery.vercel.app/')}>https://javascript-gallery.vercel.app/</a>
        </p>
        </>
    )

    PopupboxManager.open({content})
}

const popupboxConfigProject2 = {
    titleBar: {
        enable: true,
        text: "Project Preview",
    },
}

//third project
const openPopupboxProject3 = () =>{
    const content = (
        <>
        <img className='popup-image' src={Soon} alt="Soon"></img>
        <p className='popup-text'>Coming soon...</p> 
        <a className='hyper-link' onClick={() => window.open('https://github.com/todoketee')}>https://github.com/todoketee</a>
        </>
    )

    PopupboxManager.open({content})
}

const popupboxConfigProject3 = {
    titleBar: {
        enable: true,
        text: "Project Preview",
    },
}

//fourth project
const openPopupboxProject4 = () =>{
    const content = (
        <>
        <img className='popup-image' src={Soon} alt="Soon"></img>
        <p className='popup-text'>Coming soon...</p> 
        <a className='hyper-link' onClick={() => window.open('https://github.com/todoketee')}>https://github.com/todoketee</a>
        </>
    )

    PopupboxManager.open({content})
}

const popupboxConfigProject4 = {
    titleBar: {
        enable: true,
        text: "Project Preview",
    },
}

  return (
   <div id='projects' className='projects-wrapper'>
        <div className='container'>
            <h1 className='text-center py-5'>Projects</h1>

            <div className='d-flex row'>
                <div className='col-sm-5 d-block mx-auto row overflow' onClick={openPopupboxProject1}>
                    <img className='projects-image' src={Projeto} alt="React-Portfolio"></img>
                </div>
                <div className='col-sm-5 d-block mx-auto row overflow' onClick={openPopupboxProject2}>
                    <img className='projects-image' src={Coolcars} alt="Cool-cars"></img>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-5 d-block mx-auto row overflow' onClick={openPopupboxProject3}>
                    <img className='projects-image' src={Soon} alt="Soon"></img>
                </div>
                <div className='col-sm-5 d-block mx-auto row overflow' onClick={openPopupboxProject4}>
                    <img className='projects-image' src={Soon} alt="Soon"></img>
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