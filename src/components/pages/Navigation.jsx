import '../styles/Navigation.css';

function Navigation ({ currentPage, handlePageChange }) {

    const pages = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

    return (
        <nav>
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
        </nav>
    )
}

export default Navigation;