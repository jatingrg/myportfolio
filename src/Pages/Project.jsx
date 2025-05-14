import React, { useState } from 'react';
import './Project.css';

const techList = ['React', 'HTML', 'CSS', 'Vue', 'Angular', 'Gatsby', 'Flutter'];

const projects = [
  {
    id: 1,
    title: 'KeyVista1',
    subtitle: 'PropertyListingApp',
    description: 'PropertyListing is a real estate platform where users can browse properties, while admins have access to add, update, or delete listings using a simple CRUD interface with admin privileges.',
    tech: 'HTML CSS JAVASCRIPT FIREBASE',
    image: './public/keyvistaimage.png',
    github: 'https://github.com/jatingrg/Propertylistingweb',
    preview: 'https://keyvistaa.netlify.app/',
  },
  {
    id: 2,
    title: 'EventSpotLite',
    subtitle: 'CRUD',
    description: 'EventSpotlite is a simple event management app with CRUD operations, fake authentication, and JSON Server integration, allowing users to add, update, delete, and view events effortlessly.',
    tech: 'REACT TAILWIND CSS',
    image: './public/eventspotllite.png',
    github: 'https://github.com/jatingrg/Jatin_Garg_EventSpotLite',
    preview: 'https://jatin-garg-event-spot-lite-ctlv.vercel.app/',
  },
  {
    id: 3,
    title: 'WorldWise',
    subtitle: '_glassy-ui',
    description: 'WorldWise is a location-marking app where users can add and save places on an interactive map, helping them track and visualize visited or favorite locations easily and intuitively.',
    tech: 'CSS',
    image: './public/worldwise.png',
    github: 'https://github.com/username/project3',
    preview: 'https://worldwise-seven-neon.vercel.app/',
  },
  {
    id: 4,
    title: 'Movie',
    subtitle: 'Movie App',
    description: 'A dynamic Movie App where users can search for their favorite movies, view details, and add selected titles to a personal cart for easy tracking or later viewing.',
    tech: 'React.js',
    image: 'https://images.unsplash.com/photo-1626785774573-4b7993153456',
    github: 'https://github.com/jatingrg/movieapp',
    preview: 'https://luminous-druid-032748.netlify.app/',
  },
  {
    id: 5,
    title: 'Quiz-App',
    subtitle: '_glassy-ui',
    description: 'This React quiz app presents multiple-choice questions, tracks scores, and includes a timer. It uses local data, useReducer for state management, and components for questions, progress, and final results.',
    tech: 'React.js',
    image: './public/reactquiz.png',
    github: 'https://github.com/jatingrg/QuizApp',
    preview: 'https://project3-preview.com',
  },
];

function Project() {

 
  const filteredProjects = projects;
  

  return (
    <div className="project-container">
      {/* <div className="project-sidebar">
        <span className="sidebar-title">› projects</span>
        <ul className='sidebar-filter'>
          {techList.map((tech) => (
            <li key={tech}>
                <input
                  type="checkbox"
                  checked={activeFilters.includes(tech)}
                  onChange={() => toggleFilter(tech)}
                />
                <span className='sidebar-fillter-name'>{tech}</span>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="project-content">
        <div className="project-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="card-header">
                <span className="project-title">{proj.title}</span>
                <span className="project-sub">{proj.subtitle}</span>
              </div>
              <img src={proj.image} alt={proj.title} className="project-img" />
              <div className="card-body">
                <p>{proj.description}</p>
                <p> Tech Stack-<span className='tech-badge'>{(proj.tech).split('\n')}</span></p>

                <div className="card-links">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    GitHub
                  </a>
                  <a
                    href={proj.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
