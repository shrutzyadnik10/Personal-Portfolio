import React from 'react'
import portfolio from './images/portfolio.jpg';
import textanalyzer from './images/textanalyzer.png';
import moviereview from './images/moviereview.jpg';
import sqlinjection from './images/sqlinjection.jpg';
import onthisday from './images/onthisday.jpeg';
import audioendec from './images/audioendec.png';


function Projects() {
    return (
        <div>
            <section className="project" id="project">

                <h1 className="heading"> <span> my </span> projects </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={portfolio} alt="Portfolio Image"></img>
                        <h3> project 1 </h3>
                        <div className="icons">
                            <a href="#" className="fas fa-link"></a>
                            <a href="https://github.com/shrutzyadnik10/Personal-Portfolio" target="_blank"
                                className="fab fa-github"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={textanalyzer} alt="Text Analyzer Image"></img>
                        <h3> project 2 </h3>
                        <div className="icons">
                            <a href="https://shrutzyadnik10.github.io/Text-Analyzer-App/" target="_blank"
                                className="fas fa-link"></a>
                            <a href="https://github.com/shrutzyadnik10/Text-Analyzer-App" target="_blank"
                                className="fab fa-github"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={moviereview} alt="Movie Review App Image"></img>
                        <h3> project 3 </h3>
                        <div className="icons">
                            <a href="https://shrutzyadnik10.github.io/Movie-Review-App/" target="_blank"
                                className="fas fa-link"></a>
                            <a href="https://github.com/shrutzyadnik10/Movie-Review-App" target="_blank"
                                className="fab fa-github"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={sqlinjection} alt="SQL Injection Image"></img>
                        <h3> project 4 </h3>
                        <div className="icons">
                            <a href="https://github.com/shrutzyadnik10/SQL-Injection-and-Prevention-App" target="_blank"
                                className="fab fa-github"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={onthisday} alt="On this Day GUI Image"></img>
                        <h3> project 5 </h3>
                        <div className="icons">
                            <a href="https://github.com/shrutzyadnik10/On-This-Day-GUI-App" target="_blank"
                                className="fab fa-github"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={audioendec} alt=" Audio Encryption/Decryption Image"></img>
                        <h3> project 6 </h3>
                        <div className="icons">
                            <a href="https://github.com/shrutzyadnik10/Audio-Encryption-and-Decryption-App" target="_blank"
                                className="fab fa-github"></a>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}
export default Projects;