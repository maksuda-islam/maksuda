import React from 'react';
import './Professional.css';

const Professional: React.FC = () => {
  return (
    <div className="professional">
      <div className="container">
        <h1 className="page-title">Professional Experience</h1>

        <section className="experience-section">

          <div className="company-card">
            <div className="company-header">
              <div className="company-info">
                <h2>Wall Street Docs (WSD)</h2>
                <a href="https://wsd.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                  Visit Company
                </a>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <h3>QA Engineer</h3>
                <span className="duration">Nov 2025 – Present</span>
              </div>

              <div className="portfolio-section">
                <div className="project">
                  <h5>Manual & Automation testing, Penetration Testing on Fintech Domian</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="company-card">
            <div className="company-header">
              <div className="company-info">
                <h2>Therap (BD) Ltd.</h2>
                <p className="company-subtitle">An offshore-house of Therap Services LLC</p>
                <a href="https://therapbd.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                  Visit Company
                </a>
              </div>
            </div>

            <div className="position-card current">
              <div className="position-header">
                <h3>Software Engineer, QA (Automation)</h3>
                <span className="duration">Feb 2024 – Oct 2025</span>
              </div>

              <div className="portfolio-section">
                <h4>Test Automation Framework Development</h4>
                <div className="project">
                  <h5>Playwright Framework Structure</h5>
                  <p>Structured & developed the test automation framework using Playwright (currently being used commonly in Therap BD by 200+ QA Engineers)</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>Regression Testing Automation</h4>
                <div className="project">
                  <h5>Multi-Framework Testing</h5>
                  <p>Wrote scripts to complete regression testing of multiple dynamic modules in both Cypress and Playwright.</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>API Testing</h4>
                <div className="project">
                  <h5>Automated API Testing</h5>
                  <p>Automated API Testing using Playwright, enhancing test coverage and reliability.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="company-card">
            <div className="company-header">
              <div className="company-info">
                <h2>Nilavo Technologies</h2>
                <p className="company-subtitle">An off-shore house of Biscom Inc.</p>
                <a href="https://nilavo.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                  Visit Company
                </a>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <h3>Junior Software Quality Assurance Engineer</h3>
                <span className="duration">Dec 2023 – Jan 2024</span>
              </div>

              <div className="portfolio-section">
                <h4>Server & Database Management</h4>
                <div className="project">
                  <h5>QA Environment Management</h5>
                  <p>Server & Database Management (pgAdmin, MSSQL Server) of QA Environment</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>Test Automation</h4>
                <div className="project">
                  <h5>Multi-Tool Automation</h5>
                  <p>Wrote & Maintain Playwright, Selenium & Cypress Automation scripts</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>Performance & API Testing</h4>
                <div className="project">
                  <h5>Load & API Testing</h5>
                  <p>Load testing using JMeter, API testing using Postman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="company-card">
            <div className="company-header">
              <div className="company-info">
                <h2>Pioneer Alpha</h2>
                <a href="https://pioneeralpha.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                  Visit Company
                </a>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <h3>Research Assistant (Apprenticeship)</h3>
                <span className="duration">Jul 2022 – Dec 2022</span>
              </div>

              <div className="portfolio-section">
                <h4>Brain Tumor Segmentation</h4>
                <div className="project">
                  <h5>CNN Model Development</h5>
                  <p>Developed a CNN model that utilized 2D UNET as a foundation to improve the Accuracy and Dice Coefficient Score of Brain Tumor Segmentation. Focused mainly on improving the evaluation part by fine-tuning the model.</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>Dental Condition Prediction</h4>
                <div className="project">
                  <h5>Dataset Annotation</h5>
                  <p>Supervised and directed the operation of the dataset annotation process of 1000 dental X-rays to further use those data for dental condition prediction.</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>Course Instruction</h4>
                <div className="project">
                  <h5>NLP Course Development</h5>
                  <p>Designed and conducted Course on NLP (project-based) for beginners.</p>
                  <a href="https://amarischool.com/courses/Building-NLP-Projects" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="achievements-section">
          <h2>Professional Achievements</h2>

          <div className="achievements-grid">
            <div className="achievement-card professional-award">
              <h4>🏆 Framework Adoption</h4>
              <p>Successfully developed and deployed test automation framework used by over 200 QA Engineers</p>
            </div>

            <div className="achievement-card research-excellence">
              <h4>📚 Research Publication</h4>
              <p>Published peer-reviewed research on ICCIT 2022, which was the project I worked on in Pioneer Alpha</p>
            </div>

          </div>
        </section>

        <section className="competitions-section">
          <h2>Competitions & Achievements</h2>

          <div className="competition-list">
            <div className="competition-item">
              <h4>🥈 Robi Datathon 2.0 (Top 2%)</h4>
              <p>Served as Data Analyst in national competition</p>
            </div>

            <div className="competition-item">
              <h4>🥉 Third Nurse Care Activity Challenge, HASCA 2020</h4>
              <p>Placed fourth; presented and published as a book chapter</p>
            </div>

            <div className="competition-item">
              <h4>🏅 BRACathon 3.0</h4>
              <p>Finalist (Top 10 among 300+ teams)</p>
            </div>
          </div>
        </section>

        <section className="volunteer-section">
          <h2>Co-Curricular Activities</h2>

          <div className="volunteer-list">
            <div className="volunteer-item">
              <div className="volunteer-header">
                <h3>IUT Computer Society</h3>
                <a href="https://iutcs.itch.io/" target="_blank" rel="noopener noreferrer" className="company-link">
                  Visit Organization
                </a>
              </div>
              <div className="volunteer-role">
                <p className="role-title">Operations Executive (Sponsorship & Liaison)</p>
                <span className="duration">Jan 2021 – Dec 2022</span>
              </div>
              <div className="volunteer-role">
                <p className="role-title">General Body Member</p>
                <span className="duration">Jan 2018 – Dec 2020</span>
              </div>
            </div>

            <div className="volunteer-item">
              <div className="volunteer-header">
                <h3>UNICEF Bangladesh</h3>
              </div>
              <div className="volunteer-role">
                <p className="role-title">Student Volunteer</p>
                <span className="duration">December 2018</span>
              </div>
              <div className="volunteer-details">
                <p><strong>2nd Joint Integrated Network Meeting</strong></p>
                <p>Worked as a Volunteer in the program of the 2nd Joint Integrated Network Meeting, NIS (affiliated with UNICEF). Role: On-site registration using QR codes.</p>
              </div>
            </div>

            <div className="volunteer-item">
              <div className="volunteer-header">
                <h3>AIM Initiative Foundation</h3>
                <a href="https://aiminitiativefoundation.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                  Visit Organization
                </a>
              </div>
              <div className="volunteer-role">
                <p className="role-title">Graphic Designer & Annual Literacy Campaign Volunteer</p>
                <span className="duration">Jan 2020 – Dec 2023</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Professional;