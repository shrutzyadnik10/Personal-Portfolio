import React from 'react';
import certificate from './Documents/certificate.pdf'
const Interest = () => {
  return (
    <section className="interest" id="interest">
      <h1 className="heading">
        <span> my </span> interests
      </h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-laptop"></i>
          <h3>web development</h3>
          <p>
            I am always excited about new opportunities to Design or Develop a
            Modern Website that is both Beautiful and Effective.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-code"></i>
          <h3>coding</h3>
          <p>
            I am a passionate, creative individual with a lot of energy to put
            towards new projects and always looks for ways to improve my skills.
          </p>
        </div>

        <div className="box">
          <i className="fas fa-shield-alt"></i>
          <h3>cyber security</h3>
          <p>
            I have always been interested in making the web more secure. I have
            worked on a variety of projects in the field of Cyber Security.
          </p>
        </div>

        <div className="box">
          <i className="fas fa-bullhorn"></i>
          <h3>android development</h3>
          <p>
            I've designed an Animated Splash Screen with a basic understanding of
            Java.{' '}
            <a
              href="https://drive.google.com/file/d/175mr_mf-mrPoa_kulzx-rFppbWyU3tAt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br /> View Demo
            </a>
          </p>
        </div>

        <div className="box">
          <i className="fas fa-chart-line"></i>
          <h3>digital marketing</h3>
          <p>
            I have developed specialized skills in Digital Marketing while
            working with <br />
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
            >
              MyCaptain.
            </a>
          </p>
        </div>
        <div className="box">
          <i className="fas fa-pen-square"></i>
          <h3>Creative Writing</h3>
          <p>
            I have Published my Articles and Poems on social media outlets like{' '}
            <br />
            <a
              href="https://www.instagram.com/p/CGw4AfJF1eb/?utm_source=ig_web_copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{' '}
            and{' '}
            <a
              href="https://nojoto.com/profile/238e5d8baa227e153bda4b0087acd55f/shruti-yadnik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nojoto.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interest;
