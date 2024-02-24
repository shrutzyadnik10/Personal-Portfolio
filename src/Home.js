import React from 'react'
import mypic from './images/mypic.png';

function Home() {
    return (
        <div>
            <section className="home" id="home">

                <div className="content">
                    <span className="hi"> hi there... </span>
                    <h3> i am <span> shruti yadnik </span> </h3>
                    <p className="info"> i am a full stack web developer </p>
                    <p className="text">I have serious passion for Web Development, Animations and Creating Intuitive, Dynamic user
                        Educations.</p>
                    <a href="#about" className="btn">about me</a>
                </div>

                <div className="image">
                    <img src={mypic} alt='MyPicture'></img>
                </div>

            </section>
        </div>
    )
}
export default Home;