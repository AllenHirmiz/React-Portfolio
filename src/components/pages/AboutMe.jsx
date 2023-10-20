import 'bootstrap/dist/css/bootstrap.css';
import '../styles/AboutMe.css';
import profilePic from '../../assets/images/allen-hirmiz.jpg';

function AboutMe() {
    return (
        <div className="about-me-section">
            <div className="profile-picture-wrapper">
                <img src={profilePic} alt="Profile Picture" className="profile-picture" />
            </div>
            <p>
                Coming from a background in financial services, I've always been intrigued by how numbers intersect with tech. This led me down the rabbit hole of web development, pushing me to dive headfirst into a coding course.
            </p>
            <p>
                Now, equipped with coding skills, I'm on a mission to bridge the gap between finance and technology. Building and optimizing, one line of code at a time. I'd love for you to take a look at my portfolio to see the projects that I've been pouring my energy into.
            </p>
        </div>
    )
}

export default AboutMe;