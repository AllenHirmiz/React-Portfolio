import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Portfolio.css';
import FitConnectPro from '../../assets/images/Fit-Connect-Pro.png';

function Portfolio() {
    // Sample data for six projects
    const projects = [
        {
            title: "Fit-Connect Pro",
            image: FitConnectPro,
            repoUrl: "https://github.com/AllenHirmiz/Fit-Connect-Pro"
        },
        {
            title: "Fit-Connect Pro",
            image: FitConnectPro,
            repoUrl: "https://github.com/AllenHirmiz/Fit-Connect-Pro"
        },
        {
            title: "Fit-Connect Pro",
            image: FitConnectPro,
            repoUrl: "https://github.com/AllenHirmiz/Fit-Connect-Pro"
        },
        {
            title: "Fit-Connect Pro",
            image: FitConnectPro,
            repoUrl: "https://github.com/AllenHirmiz/Fit-Connect-Pro"
        },
        {
            title: "Fit-Connect Pro",
            image: FitConnectPro,
            repoUrl: "https://github.com/AllenHirmiz/Fit-Connect-Pro"
        },
        {
            title: "Fit-Connect Pro",
            image: FitConnectPro,
            repoUrl: "https://github.com/AllenHirmiz/Fit-Connect-Pro"
        }
    ];
    

    return (
        <div className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <div className="project-links">
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;