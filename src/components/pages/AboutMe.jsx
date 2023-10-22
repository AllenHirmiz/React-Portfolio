import 'bootstrap/dist/css/bootstrap.css';
import '../styles/AboutMe.css';
import profilePic from '../../assets/images/allen-hirmiz.jpg';

function AboutMe() {
    return (
        <div className="about-me-section">
            <div className="profile-picture-wrapper">
                <img src={profilePic} alt="Profile Picture" className="profile-picture" />
            </div>
            <br />
            <p>
                Started my development journey from falling in love with how computers work, and advanced my knowledge by studying ICT certifications in TAFE NSW.
            </p>
            <p>
                This knowledge allowed me to secure my first IT role in support help desk, started this role back in 2016 and then advancing to senior level help desk.
            </p>
            <p>
                After that advance to manage my own support team as a Support manager where I had the chance to work closely to the developers that allowed me to fall in love with coding.
            </p>
            <p>
                Now, studying Full Stack coding code to advance my coding skill to the new level where I'm aiming to fall advance my coding skill further. 
            </p>
            <p>
                Review my portfolio to view my latest projects and projects by clicking portfolio button that is located at the nav bar above.
            </p>
        </div>
    )
}

export default AboutMe;