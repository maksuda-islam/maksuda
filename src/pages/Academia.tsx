import React from 'react';
import './Academia.css';

const Academia: React.FC = () => {
  return (
    <div className="academia">
      <div className="container">
        <h1 className="page-title">Academia & Certificates</h1>

        <section className="publications-section">
          <h2>Publications</h2>

          <div className="publication-card">
            <h3>The Integrity of Source Code Commenting: Benchmark Dataset and Empirical Analysis</h3>
            <div className="publication-details">
              <p className="authors">
                <strong>Maksuda Islam</strong>, Md S.Hossen, A. Haque, Md. Nazmul Haque, L.N.Lota
              </p>
              <p className="venue">International Journal of Computer Vision & Signal Processing, 2024, 14(1) [Journal]</p>
              <div className="publication-description">
                <p>Peer-reviewed article from BSc thesis. Built ML model to classify code-comment consistency using topic modeling and ensemble methods.</p>
              </div>
              <a href="https://cennser.org/IJCVSP/finalPaper/140110.pdf" target="_blank" rel="noopener noreferrer" className="publication-link">
                View Publication
              </a>
            </div>
          </div>

          <div className="publication-card">
            <h3>Brain Tumor Segmentation using Enhanced U-Net Model with Empirical Analysis</h3>
            <div className="publication-details">
              <p className="authors">
                A.A.Nasim, AA.Munem, <strong>Maksuda Islam</strong>, Md A.H.Palash, M.A.H.Shah
              </p>
              <p className="venue">2022 25th International Conference on Computer and Information Technology (ICCIT), Publisher: IEEE [Conference]</p>
              <div className="publication-description">
                <p>Research assistantship project at Pioneer Alpha. Developed a CNN model that utilized 2D UNET as a foundation to improve the Accuracy and Dice Coefficient Score of Brain Tumor Segmentation.</p>
              </div>
              <a href="https://ieeexplore.ieee.org/document/10054934" target="_blank" rel="noopener noreferrer" className="publication-link">
                View Publication
              </a>
            </div>
          </div>

          <div className="publication-card">
            <h3>Accelerometer-based Complex Nurse Care Activity Recognition using Machine Learning Approach</h3>
            <div className="publication-details">
              <p className="authors">
                Z.R.Tusar, <strong>Maksuda Islam</strong>, S.Sharmin
              </p>
              <p className="venue">UbiComp'21: Adjunct Proceedings of the 2021 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2021 ACM International Symposium on Wearable Computers [Workshop]</p>
              <div className="publication-description">
                <p>HASCA 2020 competition project. Built a wearable that performs on-device inference to detect unusual patient movements and trigger caregiver alerts.</p>
              </div>
              <a href="https://dl.acm.org/doi/10.1145/3460418.3479390" target="_blank" rel="noopener noreferrer" className="publication-link">
                View Publication
              </a>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2>Education</h2>

          <div className="education-card">
            <div className="education-header">
              <h3>B.Sc in Software Engineering</h3>
              <span className="duration">Jan 2018 – May 2022</span>
            </div>
            <p className="institution">Islamic University of Technology, Bangladesh</p>
            <p className="gpa">CGPA 3.35/4.00 (last 2 years: 3.71/4.00)</p>

            <div className="coursework">
              <h4>Research Interests:</h4>
              <div className="coursework-grid">
                <div className="coursework-category">
                  Web Security, Application Security, Software Engineering & maintenance, Applied AI
                </div>
              </div>
              <h4>BSc Thesis:</h4>
              <div className="coursework-grid">
                <div className="coursework-category">
                  {/* The Integrity of Source Code Commenting : Benchmark Dataset and Empirical Analysis */}
                  <a href="https://www.researchgate.net/publication/365077860_The_Integrity_of_Source_Code_Commenting_Benchmark_Dataset_and_Empirical_Analysis" target="_blank" className="company-link">
                     The Integrity of Source Code Commenting : Benchmark Dataset and Empirical Analysis
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <h3>Higher Secondary Certificate (HSC) & Secondary School Certificate (SSC)</h3>
              <span className="duration">2005 – 2017</span>
            </div>
            <p className="institution">Viqarunnisa Noon School & College, Bangladesh</p>
            <p className="gpa">GPA 5.00/5.00 (Awarded Government Scholarship)</p>
          </div>
        </section>

        <section className="certificates-section">
          <h2>Certificates</h2>

          <div className="certificate-card">
            <div className="certificate-header">
              <h3>CompTIA Security+ (In Progress)</h3>
              <a href="https://elearning.securityblue.team/home/certificate/862837089" target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Certificate
              </a>
            </div>
            <p className="certificate-issuer">Security Blue Team</p>
            <p className="certificate-description">Comprehensive cybersecurity training covering threat modeling, vulnerability assessment, and incident response.</p>
          </div>

          <div className="certificate-card">
            <div className="certificate-header">
              <h3>Google Cybersecurity Professional Certificate</h3>
              <a href="https://www.coursera.org/account/accomplishments/verify/8EBMSUD2SF7W" target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Certificate
              </a>
            </div>
            <p className="certificate-issuer">Coursera - Google</p>
            <p className="certificate-description">Professional certificate covering cybersecurity fundamentals, SOC workflows, SIEM tools, and security best practices.</p>
          </div>

          <div className="certificate-card">
            <div className="certificate-header">
              <h3>Introduction to Cybersecurity</h3>
              <a href="https://www.credly.com/badges/1c1118b8-bb71-491e-a269-0df12d5d7d7f/linked_in_profile" target="_blank" rel="noopener noreferrer" className="certificate-link">
                View Credential
              </a>
            </div>
            <p className="certificate-issuer">CISCO</p>
            <p className="certificate-description">Industry-recognized certification demonstrating expertise in cybersecurity fundamentals, risk management, and compliance.</p>
          </div>
        </section>

        <section className="standardized-tests">
          <h2>Standardized Tests</h2>
          <div className="test-card">
            <h3>IELTS</h3>
            <p className="test-date">November 2025</p>
            <div className="test-scores">
              <div className="overall-score">
                <span className="score-label">Overall Band Score:</span>
                <span className="score-value">7</span>
              </div>
              <div className="individual-scores">
                <div className="score-item">
                  <span>Reading:</span>
                  <span>8.0</span>
                </div>
                <div className="score-item">
                  <span>Listening:</span>
                  <span>7.5</span>
                </div>
                <div className="score-item">
                  <span>Writing:</span>
                  <span>6.5</span>
                </div>
                <div className="score-item">
                  <span>Speaking:</span>
                  <span>6.5</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academia;