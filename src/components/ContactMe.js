import React from 'react'

const ContactMe = () => {
  return (
    <div className='contactMe'>
        <div>
            <div className='container'>
                <h1 className='py-5'>Contact Me</h1>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='box'>
                            <i class="fas fa-envelope fa-3x"></i>
                            <h3>Email</h3>
                            <p>Descrição</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='box'>
                            <i class="fab fa-linkedin fa-3x"></i>
                            <h3>LinkedIn</h3>
                            <p>Descrição</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='box'>
                            <i class="fab fa-whatsapp fa-3x"></i>
                            <h3>WhatsApp</h3>
                            <p>Descrição</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe
