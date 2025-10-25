import React from 'react';
import './Others.css';

const Others: React.FC = () => {
  return (
    <div className="others">
      <div className="container">
        <h1 className="page-title">Skills & Additional Information</h1>
        
        <section className="skills-section">
          <h2>Technical Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>💻 Programming Languages</h3>
              <div className="skills-list">
                <span className="skill-item expert">Python</span>
                <span className="skill-item expert">C</span>
                <span className="skill-item expert">JavaScript</span>
                <span className="skill-item advanced">TypeScript</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>� Testing & Automation Tools</h3>
              <div className="skills-list">
                <span className="skill-item expert">Playwright</span>
                <span className="skill-item expert">Cypress</span>
                <span className="skill-item expert">Selenium</span>
                <span className="skill-item expert">Postman</span>
                <span className="skill-item advanced">Apache JMeter</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>📊 Data Science & ML</h3>
              <div className="skills-list">
                <span className="skill-item expert">Pandas</span>
                <span className="skill-item expert">NumPy</span>
                <span className="skill-item advanced">Machine Learning</span>
                <span className="skill-item advanced">NLP</span>
                <span className="skill-item advanced">Computer Vision</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>�️ Database & Infrastructure</h3>
              <div className="skills-list">
                <span className="skill-item expert">PostgreSQL</span>
                <span className="skill-item expert">MSSQL</span>
                <span className="skill-item advanced">pgAdmin</span>
                <span className="skill-item advanced">MSSQL Server</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>� Development & Project Management</h3>
              <div className="skills-list">
                <span className="skill-item expert">ReactJS</span>
                <span className="skill-item expert">Jira</span>
                <span className="skill-item advanced">BitBucket</span>
                <span className="skill-item advanced">Git</span>
              </div>
            </div>
          </div>
        </section>

        <section className="references-section">
          <h2>References</h2>
          
          <div className="references-grid">
            <div className="reference-card">
              <div className="reference-header">
                <h4>Sadia Sharmin</h4>
                <span className="title">Assistant Professor</span>
              </div>
              <p className="institution">Islamic University of Technology</p>
              <div className="contact-info">
                <a href="mailto:sharmin@iut-dhaka.edu" className="contact-link">
                  📧 sharmin@iut-dhaka.edu
                </a>
              </div>
              <div className="reference-context">
                <p>Academic supervisor and mentor for research projects in software engineering and machine learning.</p>
              </div>
            </div>

            <div className="reference-card">
              <div className="reference-header">
                <h4>Md. Nazmul Haque</h4>
                <span className="title">Assistant Professor</span>
              </div>
              <p className="institution">Islamic University of Technology</p>
              <div className="contact-info">
                <a href="mailto:nazmul.haque@iut-dhaka.edu" className="contact-link">
                  📧 nazmul.haque@iut-dhaka.edu
                </a>
              </div>
              <div className="reference-context">
                <p>Co-author and academic advisor for published research on source code commenting integrity.</p>
              </div>
            </div>

            <div className="reference-card">
              <div className="reference-header">
                <h4>Nawshad Rehan Rasha</h4>
                <span className="title">Sr. SQA Engineer</span>
              </div>
              <p className="institution">Therap (BD) Ltd.</p>
              <div className="contact-info">
                <a href="mailto:rehan.rasha@therapservices.net" className="contact-link">
                  📧 rehan.rasha@therapservices.net
                </a>
              </div>
              <div className="reference-context">
                <p>Professional supervisor and mentor in quality assurance and test automation frameworks.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="additional-info">
          <h2>Additional Information</h2>
          
          <div className="info-grid">
            <div className="info-card language">
              <h4>🌐 Languages</h4>
              <div className="language-skills">
                <div className="language-item">
                  <span className="language">English</span>
                  <span className="proficiency expert">IELTS 7.5</span>
                </div>
                <div className="language-item">
                  <span className="language">Bengali</span>
                  <span className="proficiency expert">Native</span>
                </div>
              </div>
            </div>

            <div className="info-card interests">
              <h4>🎯 Research Interests</h4>
              <ul>
                <li>Data Security</li>
                <li>Application Security</li>
                <li>Digital Forensics</li>
                <li>Automated Software Engineering</li>
                <li>Software Engineering-Based Research</li>
                <li>Applied AI</li>
              </ul>
            </div>

            <div className="info-card achievements">
              <h4>🏆 Notable Achievements</h4>
              <ul>
                <li>Robi Datathon 2.0 (Top 2%)</li>
                <li>HASCA 2020 Challenge (4th Place)</li>
                <li>BRACathon 3.0 (Top 10 Finalist)</li>
                <li>Government Scholarship Recipient</li>
                <li>Published Researcher (3 Publications)</li>
              </ul>
            </div>

            <div className="info-card volunteering">
              <h4>🤝 Leadership & Volunteering</h4>
              <ul>
                <li>Operations Executive - IUT Computer Society</li>
                <li>Student Volunteer - UNICEF Bangladesh</li>
                <li>Graphic Designer - AIM Initiative Foundation</li>
                <li>Annual Literacy Campaign Volunteer</li>
                <li>Course Instructor - NLP for Beginners</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Get In Touch</h2>
          
          <div className="contact-grid">
            <div className="contact-card">
              <h4>📍 Location</h4>
              <p>Dhaka, Bangladesh</p>
            </div>
            
            <div className="contact-card">
              <h4>📧 Email</h4>
              <a href="mailto:maksudaislam@iut-dhaka.edu">maksudaislam@iut-dhaka.edu</a>
            </div>
            
            <div className="contact-card">
              <h4>💼 LinkedIn</h4>
              <a href="https://www.linkedin.com/in/maksuda-islam/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/maksuda-islam
              </a>
            </div>
            
            <div className="contact-card">
              <h4>💻 GitHub</h4>
              <a href="https://github.com/maksuda-islam" target="_blank" rel="noopener noreferrer">
                github.com/maksuda-islam
              </a>
            </div>
            
            <div className="contact-card">
              <h4>🎓 Google Scholar</h4>
              <a href="https://scholar.google.com/citations?user=959fzIoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                View Publications
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Others;