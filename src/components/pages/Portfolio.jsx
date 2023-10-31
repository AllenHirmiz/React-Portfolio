import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Portfolio.css';
import FitConnectPro from '../../assets/images/Fit-Connect-Pro.png';
import TaskPro from '../../assets/images/dashboard.jpg'
import BookSearch from '../../assets/images/Book-Search-Engine.png'
import LogoMaker from '../../assets/images/LogoMaker.png'
import Weather from '../../assets/images/Weather.png'
import AgendaScheduler from '../../assets/images/Agenda-Scheduler.png'

function Portfolio() {
    // Sample data for six projects
    const projects = [
        {
            title: "TaskPro",
            image: TaskPro,
            repoUrl: "https://github.com/AllenHirmiz/Team-5-Task-Manager"
        },
        {
            title: "Fit-Connect Pro",
            image: FitConnectPro,
            repoUrl: "https://github.com/AllenHirmiz/Fit-Connect-Pro"
        },
        {
            title: "Book Search Engine",
            image: BookSearch,
            repoUrl: "https://github.com/AllenHirmiz/Book-Search-Engine"
        },
        {
            title: "Free SVG Logo Maker",
            image: LogoMaker,
            repoUrl: "https://github.com/AllenHirmiz/Free-SVG-Logo-Maker"
        },
        {
            title: "5 Days Weather Dashboard",
            image: Weather,
            repoUrl: "https://github.com/AllenHirmiz/5-Days-Weather-Dashboard"
        },
        {
            title: "Agenda Scheduler",
            image: AgendaScheduler,
            repoUrl: "https://github.com/AllenHirmiz/Agenda-Scheduler"
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