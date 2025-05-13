import React, { useState } from 'react';
import './Project.css';

const techList = ['React', 'HTML', 'CSS', 'Vue', 'Angular', 'Gatsby', 'Flutter'];

const projects = [
  {
    id: 1,
    title: 'Project 1',
    subtitle: '_ui-animations',
    description: 'Duis aute irure dolor in velit esse cillum dolore.',
    tech: 'React',
    image: '',
    github: 'https://github.com/username/project1',
    preview: 'https://project1-preview.com',
  },
  {
    id: 2,
    title: 'Project 2',
    subtitle: '_tetris-game',
    description: 'Duis aute irure dolor in velit esse cillum dolore.',
    tech: 'React , CSS',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55b',
    github: 'https://github.com/username/project2',
    preview: 'https://project2-preview.com',
  },
  {
    id: 3,
    title: 'Project 3',
    subtitle: '_glassy-ui',
    description: 'Duis aute irure dolor in velit esse cillum dolore.',
    tech: 'CSS',
    image: 'https://images.unsplash.com/photo-1626785774573-4b7993153456',
    github: 'https://github.com/username/project3',
    preview: 'https://project3-preview.com',
  },
];

function Project() {
  const [activeFilters, setActiveFilters] = useState(['React']);

  const toggleFilter = (tech) => {
    setActiveFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

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
        <div className="project-tab-header">{activeFilters.join('; ')} ✕</div>
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
              <div className="tech-badge">{proj.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
