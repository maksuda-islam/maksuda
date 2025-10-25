import React from 'react';
import './Home.css';
// import profileImage from '../assets/maksuda.png'; // Update with actual image path

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-section">
            {/* <img 
              src={profileImage} 
              alt="Maksuda Islam" 
              className="profile-image"
            /> */}
            <div className="profile-info">
              <h1 className="name">Maksuda Islam</h1>
              <h2 className="title">Software Engineer, QA (Automation)</h2>
              <p className="location">📍 Dhaka, Bangladesh</p>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/maksuda-islam/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/maksuda-islam" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://scholar.google.com/citations?user=959fzIoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
                <a href="mailto:maksudaislam@iut-dhaka.edu">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <div className="container">
          <h2>Professional Summary</h2>
          <p className="summary-text">
            Software Quality Assurance Engineer with expertise in test automation frameworks, 
            API testing, and database management. Experienced in developing automation scripts 
            using Playwright, Cypress, and Selenium. Strong research background in data security, 
            application security, and automated software engineering with published work in 
            source code commenting integrity and brain tumor segmentation.
          </p>

          <div className="highlights">
            <div className="highlight-card">
              <h3>🎓 Education</h3>
              <p>B.Sc in Software Engineering</p>
              <p>Islamic University of Technology</p>
              <p>CGPA: 3.35/4.00</p>
            </div>
            
            <div className="highlight-card">
              <h3>💼 Experience</h3>
              <p>QA Automation Engineer</p>
              <p>Test Framework Development</p>
              <p>API & Load Testing</p>
            </div>
            
            <div className="highlight-card">
              <h3>📚 Publications</h3>
              <p>International Journal (2024)</p>
              <p>IEEE Conference (2022)</p>
              <p>UbiComp Workshop (2021)</p>
            </div>
            
            <div className="highlight-card">
              <h3>🔧 Expertise</h3>
              <p>Playwright, Cypress, Selenium</p>
              <p>Python, C, JavaScript/TypeScript</p>
              <p>Postman, JMeter, Jira</p>
            </div>
          </div>

          <div className="recent-achievements">
            <h3>Recent Achievements</h3>
            <ul>
              <li>�️ Structured & developed test automation framework using Playwright (used by 200+ QA Engineers at Therap BD)</li>
              <li>🤖 Automated regression testing of multiple dynamic modules in both Cypress and Playwright</li>
              <li>📊 Implemented API Testing automation using Playwright</li>
              <li>� Published peer-reviewed research on source code commenting integrity</li>
              <li>🏆 Achieved high performance in competitive programming and data science competitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;