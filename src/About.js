import React from 'react';
import mypic from './images/mypic.png';

function About() {
  return (
    <div>
      <section className="about" id="about">

        <h1 className="heading"> about <span> me </span> </h1>

        <div className="row-1">

          <div className="image">
            <img src={mypic} alt='MyPicture'></img>
          </div>

          <div className="content">
            <h3> my name is shruti yadnik & i am a full stack web developer</h3>
            <p>I sincerely began my journey as a computer programming enthusiast and aspiring engineer, and I
              graduated from Vishwakarma Institute of Technology, Pune, in May 2023. I am constantly looking for
              new challenges to expand my knowledge because I have an unrelenting passion for coding.</p>
            <div className="box-container">
              <div className="box">
                <p> <span> email : </span> yadnikshruti07@gmail.com </p>
                <p> <span> language : </span> English, Marathi, Hindi </p>
                <p> <span> work : </span> Full Stack Web Developer </p>
              </div>
              <div className="box">
                <p> <span> gender : </span> Female </p>
                <p> <span> country : </span> India </p>
              </div>
            </div>
            {/* <!-- Request CV button with mailto link and a professional message --> */}
            <a href="mailto:yadnikshruti07@gmail.com?subject=Request%20for%20CV&body=Dear%20Ms.%20Shruti%20Yadnik,%0A%0AI trust this message finds you well. My name is [Your Name], and I am reaching out to request your CV.%0A%0AI am particularly impressed with your background in full-stack web development and your passion for coding. I believe that your experience and skills align well with the kind of projects I am interested in.%0A%0AThank you for considering my request. I look forward to the opportunity to learn more about your work.%0A%0AKind regards,%0A[Your Name]"
              className="btn">Request a CV</a>
            <a href="#contact" className="btn" style={{ marginLeft: '7px' }}>hire me</a>
          </div>

        </div>
      <h1 className="heading"> <span> my </span> skills </h1>

      <div className="row-2">

        <div className="skills">
          <div className="progress">
            <h3> web development <span> 95% </span> </h3>
            <div className="bar"> <span></span> </div>
          </div>
          <div className="progress">
            <h3> react.Js <span> 70% </span> </h3>
            <div className="bar"> <span></span> </div>
          </div>
          <div className="progress">
            <h3> DBMS <span> 85% </span> </h3>
            <div className="bar"> <span></span> </div>
          </div>
          <div className="progress">
            <h3> Node.Js <span> 50% </span> </h3>
            <div className="bar"> <span></span> </div>
          </div>
          <div className="progress">
            <h3> java <span> 50% </span> </h3>
            <div className="bar"> <span></span> </div>
          </div>
        </div>

      </div>
      </section>

    </div>
  )
}

export default About;
