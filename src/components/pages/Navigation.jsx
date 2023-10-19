import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Navigation.css';

function Navigation ({ currentPage, handlePageChange }) {

    const pages = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav className='navbar navbar-inverse'>
            <div class="container-fluid">
                <div className='navbar-header'>
                <a class="navbar-brand" href="/">Allen Hirmiz</a>
            </div>
            <div class="nav navbar-nav">
                <ul>
                    {pages.map(page => (
                        <li key={page}>
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(page);
                                }}
                                className={currentPage === page ? 'active' : 'inactive'}
                                aria-label={`Navigate to ${page}`}
                                role="button"
                            >
                                {page.replace(/([A-Z])/g, ' $1').trim()} {/* This turns "AboutMe" into "About Me" */}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>

    )
}

export default Navigation;