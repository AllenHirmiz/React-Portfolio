import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Resume.css';


function Resume () {
    return (
        <div className='resume-section'>
            <p>Click button below to download resume:</p>
            <a href="https://docs.google.com/document/d/1nh585hvZdk-WqdcF-1lyOt6Y1wUZcxmhQ9wPjcKC6Is/edit?usp=share_link" download>
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