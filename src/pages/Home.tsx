import React from 'react';
import './Home.css';
import profileImage from '../assets/maksuda.png';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-left">
              <h1 className="name">Maksuda Islam</h1>

              <div className="role-section">
                <h2 className="role">Software QA Engineer & Test Automation Specialist</h2>
                <p className="organization">Wall Street Docs (WSD)</p>
              </div>

              <p className="tagline">Building robust test automation infrastructure for healthcare & fintech at scale</p>
              <p className="location">📍 Dhaka, Bangladesh</p>

              <div className="contact-info">
                <p><strong>Email:</strong> <a href="mailto:maksudaislam@iut-dhaka.edu">maksudaislam@iut-dhaka.edu</a></p>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/maksuda-islam/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span>|</span>
                <a href="https://github.com/maksuda-islam" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span>|</span>
                <a href="https://scholar.google.com/citations?user=959fzIoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              </div>
            </div>

            <div className="hero-right">
              <img
                src={profileImage}
                alt="Maksuda Islam"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="summary-section" id="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <p className="summary-text">
            I am a Software QA Engineer specializing in large-scale UI and API automation, software quality, and applied ML. At Therap (BD), I designed and maintain a Playwright-based automation framework that more than 200 QA engineers rely on for stable, high-coverage regression testing across complex healthcare modules. I work extensively with Playwright, Cypress, API testing, and JMeter, and I build CI-friendly validation pipelines that support fast and reliable releases.
            Recently, I joined a European fintech company, Wall Street Docs, as a QA Engineer.

            <br></br>
            Alongside my industry work, I have a research background with peer-reviewed publications
            in code-comment integrity, medical imaging, and human activity recognition (ACM UbiComp, IEEE ICCIT, IJCVSP).

            <br></br>

            I have also completed structured cybersecurity training, including the Google Cybersecurity Professional Certificate and CompTIA Security+ preparation. This covered incident response, vulnerability assessment, SOC workflows, SIEM tools, threat modeling, and core network security. I apply this security knowledge to evaluate access control, identify configuration weaknesses, and design stronger QA workflows for regulated environments.
            <br></br>
            I bring together automation engineering, empirical software research, and cybersecurity awareness to build robust test infrastructure and explore problems at the intersection of software engineering, testing, applied ML, and secure systems. I am aiming for roles or graduate opportunities that align with these areas

            <br></br>

            I am also interested in digital art and painting. My digital art got featured in multiple national exhibition.
            My digital art portfolio: <a href='https://www.behance.net/maksudalima'>Behance Account</a>
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section" id="research">
        <div className="container">
          <h2 className="section-title">Key Highlights</h2>
          <div className="highlights">
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Education</h3>
              <p>B.Sc in Software Engineering</p>
              <p>Islamic University of Technology</p>
              <p className="highlight-detail">CGPA: 3.35/4.00
                <br></br>(last 2 years: 3.71/4.00)</p>
            </div>

            <div className="highlight-card">
              <div className="icon">💼</div>
              <h3>Experience</h3>
              <p>QA Automation Engineer</p>
              <p>Test Framework Development</p>
              <p>API & Load Testing</p>
            </div>

            <div className="highlight-card">
              <div className="icon">📚</div>
              <h3>Publications</h3>
              <p>International Journal (2024)</p>
              <p>IEEE Conference (2022)</p>
              <p>UbiComp Workshop (2021)</p>
            </div>

            <div className="highlight-card">
              <div className="icon">🔧</div>
              <h3>Expertise</h3>
              <p>Test Automation Frameworks, API Testing, Penetration Testing</p>
              <p>Python, C, JavaScript/TypeScript</p>
              <p>Postman, JMeter, Version Control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section" id="lab">
        <div className="container">
          <h2 className="section-title">Recent Achievements</h2>
          <ul className="achievements-list">
            <li>🧪 Structured & developed test automation framework </li>
            <li>🤖 Automated regression testing of multiple dynamic modules in both Cypress and Playwright</li>
            <li>📊 Implemented API Testing automation using Playwright</li>
            <li>📖 Published peer-reviewed research on source code commenting integrity</li>
            <li>🏆 Achieved high performance in competitive programming and data science competitions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;