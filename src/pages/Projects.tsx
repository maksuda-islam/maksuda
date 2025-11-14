import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        
        <section className="projects-section">
          <div className="project-card featured">
            <div className="project-header">
              <h3>Computing Code-Comment Consistency</h3>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Pandas</span>
                <span className="tag">NLP</span>
              </div>
            </div>
            <div className="project-description">
              <p>
                Built ML model to classify code-comment consistency using topic modeling and ensemble methods. This work was published as a peer-reviewed article in the International Journal of Computer Vision & Signal Processing.
              </p>
            </div>
            <div className="tech-stack">
              <h4>Technology Stack:</h4>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">NumPy</span>
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">Topic Modeling</span>
              </div>
            </div>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li>Topic modeling for semantic analysis</li>
                <li>Ensemble methods for classification</li>
                <li>Code-comment consistency benchmarking</li>
                <li>Empirical analysis and evaluation</li>
                <li>Dataset creation and curation</li>
              </ul>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/maksuda-islam/code-comment-consistency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Movement Recognition System</h3>
              <div className="project-tags">
                <span className="tag">IoT</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">Healthcare</span>
              </div>
            </div>
            <div className="project-description">
              <p>
                Built a wearable that performs on-device inference to detect unusual patient movements and trigger caregiver alerts. Features real-time anomaly detection using embedded machine learning.
              </p>
            </div>
            <div className="tech-stack">
              <h4>Technology Stack:</h4>
              <div className="tech-tags">
                <span className="tech-tag">Raspberry Pi Zero W</span>
                <span className="tech-tag">MPU-9250 IMU</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Machine Learning</span>
              </div>
            </div>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li>On-device anomaly detection</li>
                <li>Real-time movement monitoring</li>
                <li>Caregiver alert system</li>
                <li>Low-power edge computing</li>
                <li>Wearable form factor</li>
              </ul>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/zubairtusar/movement_recognition_system" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="project-skills">
          <h2>Technical Expertise Demonstrated</h2>
          
          <div className="skills-showcase">
            <div className="skill-category">
              <h4>Test Automation</h4>
              <ul>
                <li>Playwright Framework</li>
                <li>Cypress Testing</li>
                <li>Selenium WebDriver</li>
                <li>Regression Testing</li>
                <li>API Testing</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Machine Learning & AI</h4>
              <ul>
                <li>Topic Modeling</li>
                <li>Ensemble Methods</li>
                <li>CNN/U-Net Models</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Database & Infrastructure</h4>
              <ul>
                <li>PostgreSQL (pgAdmin)</li>
                <li>MSSQL Server</li>
                <li>Database Management</li>
                <li>Server Administration</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Performance & Quality</h4>
              <ul>
                <li>Penetration Testing</li>
                <li>Load Testing (JMeter)</li>
                <li>API Testing (Postman)</li>
                <li>Performance Optimization</li>
                <li>Quality Assurance</li>
                <li>Test Strategy Development</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;