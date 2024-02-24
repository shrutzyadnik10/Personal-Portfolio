import React from 'react'

function Experience() {
    return (
        <div>
            <section className="experience" id="experience">

                <h1 className="heading"> <span> my </span> experience </h1>

                <div className="box-container">

                    <div className="box">
                        <div className="content">
                            <span> Jan 2023 - Jun 2023 </span>
                            <h3>Software Development Intern at DheeYantra</h3>
                            <h4 style={{ fontSize: '16px' }}> <i className="fas fa-map-marker-alt"></i> Bangalore </h4>
                            <p>DheeYantra, founded in early 2017, leads the Indian Language VOICE AI space
                                with dhee.ai, empowering businesses for multilingual engagement, website
                                localization, and personalized customer experiences.</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '16px' }}>
                                <li>Worked on a React-based My Jeeva website for MD Anderson Cancer Hospital, USA.</li>
                                <li>Gained valuable hands-on experience with React.js, Java, and Cassandra.</li>
                                <li>Identified and troubleshooted software defects and contributed to solutions.</li>
                                <li>Demonstrated effective task prioritization and adaptation to changing project requirements.
                                </li>
                                <li>Proficiency in Git version control system: creating branches, merging code, resolving merge
                                    conflicts, and pushing changes to remote repositories.</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}
export default Experience