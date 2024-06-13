import React from 'react'

const ContactMe = () => {
  return (
    <div id='contactme' className='contactMe'>
        <div>
            <div className='container'>
                <h1 className='py-5'>Contact Me</h1>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='box'>
                            <i class="fas fa-envelope fa-3x"></i>
                            <h3>Email</h3>
                            <p>-</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='box'>
                            <i class="fab fa-linkedin fa-3x"></i>
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/fabiomarras-dev/" target="_blank">https://www.linkedin.com/in/fabiomarras-dev/</a>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='box'>
                            <i class="fab fa-github fa-3x"></i>
                            <h3>GitHub</h3>
                            <a href="https://github.com/fabiomarras-dev" target="_blank">https://github.com/fabiomarras-dev</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe
