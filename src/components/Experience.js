import React from 'react';

const Experience = () => {
  return (
    <div id='experience' className='experience mb-5'>
        <div className='d-flex justify-content-center my-5'>
            <h1>Experience</h1>  
        </div>
        <div className='container experience-wrapper'>

          <div  className='timeline-block timeline-block-right'>
            <div className='marker'>
            </div>
            <div className='timeline-content'>
              <h3>2017</h3>
              <p>
              In 2017, I commenced my academic journey at "UDF Centro Universitario" while simultaneously embarking on a professional internship at "SKILL.COM". During this internship, I gained valuable experience in technical support, specializing in computer maintenance, hardware installation and replacement, as well as operating system formatting.
              </p>
            </div>
          </div>

          <div  className='timeline-block timeline-block-left'>
            <div className='marker'>
            </div>
            <div className='timeline-content'>
              <h3>2018</h3>
              <p>
              It was the year I finished my internship; I enrolled in February 2017 and left in March 2018.
              </p>
            </div>
          </div>

          <div  className='timeline-block timeline-block-right'>
            <div className='marker'>
            </div>
            <div className='timeline-content'>
              <h3>2021</h3>
              <p>
              It was the year I began working at my mandatory internship from college. The class was divided into two teams: documentation and development. I was part of the development team, and we were asked to make a web application that would manage classroom scheduling. The technologies we used for that application were Laravel, PHP, MySql, and Bootstrap. The internship started in April 2021 and finished in May 2021.
              </p>
            </div>
          </div>

          <div  className='timeline-block timeline-block-left'>
            <div className='marker'>
            </div>
            <div className='timeline-content'>
              <h3>2022</h3>
              <p>
              It was the year I graduated.
              </p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Experience;