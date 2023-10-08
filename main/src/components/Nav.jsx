// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar bg="dark" variant="dark"
    links={[
      <Link key={1} className="nav-link text-light" to="/">
        <b>Allen Hirmiz</b>
      </Link>,
      <Link key={2} className="nav-link text-light" to="/aboutme">
        About Me
      </Link>,
      <Link key={3} className="nav-link text-light" to="/Work">
        Portfolio
      </Link>,
      <Link key={4} className="nav-link text-light" to="/About">
        Contact
      </Link>,
      <Link key={5} className="nav-link text-light" to="/Resume">
        Resume
      </Link>,
    ]}
  />
  );
}