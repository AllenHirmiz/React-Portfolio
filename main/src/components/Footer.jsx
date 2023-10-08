// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <section className="footer">
      <div>
        <a href="allenihirmiz@gmail.com">
          <img
            src={"/images/Gmail logo.png"}
            alt="Gmail Link"
            className="icon"
          />
        </a>
        <a href="https://github.com/AllenHirmiz">
          <img
            src={"/images/GitHub Logo.png"}
            alt="Github Link"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/AllenHirmiz/">
          <img
            src={"/images/LinkedIn Logo.png"}
            alt="LinkedIn"
            className="icon"
          />
        </a>
        <a href="https://twitter.com/AllenHirmiz">
          <img
            src={"/images/Twitter logo.png"}
            alt="Github Link"
            className="icon"
          />
        </a>
      </div>
    </section>
  );
}
