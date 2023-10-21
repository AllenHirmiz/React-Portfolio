import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Resume.css';


function Resume () {
    return (
        <div className='resume-section'>
            <p>Click button below to download resume:</p>
            <a href="https://www.dropbox.com/scl/fi/016zrotlnmfg9p0vfp5hq/Allen-Hirmiz-Resume.pdf?rlkey=w0lhxo3yl47uv571qxjzt8wa0&dl=0" download>
                <button class="btn btn-primary btn-lg">Download</button>
            </a>
            <br />
            <p>Development Skills include topics such as:</p>
            <ul>
                <li>HTML</li>
                <li>Advanced CSS</li>
                <li>Git</li>
                <li>Javascript</li>
                <li>Object-Oriented Programming (OOP)</li>
                <li>SQL</li>
                <li>Object-Relational Mapping (ORM)</li>
                <li>Model-View-Controller (MVC)</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Progressive Web Applications (PWA)</li>
                <li>React</li>
                <li>MERN</li>
                <li>State</li>
            </ul>
        </div>
    )
}

export default Resume;