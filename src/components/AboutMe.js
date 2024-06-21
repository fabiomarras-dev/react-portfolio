import React from "react";
import Author from "../Fabio.jpg";
import Author2 from "../Fabio2.jpg";

const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      <div id="aboutme" className="container py-5">
          <div className="row">
              <div className="col-lg-6 col-xm-12 mb-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-interval="false">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={Author} alt="author..."></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Author2} alt="author..."></img>
                  </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-xm-12">
                  <h1>About Me</h1>
                  <p>Hello! My name is Fabio Marras, I'm currently living in Geneva in Switzerland, and I'm a college graduate in Information System looking for a job as a web developer. I was born and raised in Switzerland, my family moved to Brazil when I was 10 years old, and I share both the Swiss and Brazilian nationalities, so for that reason I have a lot of knowledge in foreign languages.
                  </p>
                  <p> During my college graduation, aside from the mandatory college internship, I was sadly not able to get into a proper development internship, so the only working experience I got in the web development area is from my college internship and projects I have on github. Hence why I'm making this portfolio website: to show a bit of what I can do and hope I can finally enroll into the job market and gain experience.
                  </p>
                  
                  <h1>Skills</h1>
                  <p>Thanks to what I learned being part of the development team during the mandatory internship and thanks to some practice projects on github, I have some knowledge in the following technologies:
                  <ul>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Html/CSS</li>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>MySql</li>
                  </ul>
                  I also have some notions of <span>technical support</span>, thanks to a 1-year internship I took part in at a company called "SKILL.COM". 
                  </p>
                  <p>And since I spent a good part of my life in both Brazil and Switzerland, I gained a lot of knowledge in different languages, such as <span>native French</span> (because I was born and raised in Switzerland), <span>fluent Portuguese</span> and <span>advanced English</span> because I used to study english as a hobby.
                  </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AboutMe;