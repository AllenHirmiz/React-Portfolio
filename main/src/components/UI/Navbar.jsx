export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="navbar navbar-expand-sm" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
