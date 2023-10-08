import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';

import API from '../utils/API';

export default function HomePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await API.getUsers();

    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <h1>
        <a
          href="/BCS-RESUME-PDF.pdf"
          alt="PDF Resume"
          target="_blank"
        >
          Downloadable Resume
        </a>
      </h1>

      <ul className="text-center">
        List of Proficiencies
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>APIs</li>
        <li>Node.js</li>
        <li>OOP</li>
        <li>Express,js</li>
        <li>SQL</li>
        <li>ORM</li>
        <li>MVC</li>
        <li>NoSQL</li>
        <li>PWA</li>
        <li>MongoDB</li>
        <li>Mongo Atlas</li>
        <li>React</li>
        <li>and MERN Stack.</li>
      </ul>
    </div>
  );
}
