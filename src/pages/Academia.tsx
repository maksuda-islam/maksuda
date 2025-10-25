import React from 'react';
import './Academia.css';

const Academia: React.FC = () => {
  return (
    <div className="academia">
      <div className="container">
        <h1 className="page-title">Academia</h1>
        
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
            <p className="gpa">CGPA 3.35/4.00 (last 4 semesters: 3.71/4.00)</p>
            
            <div className="coursework">
              <h4>Research Interests:</h4>
              <div className="coursework-grid">
                <div className="coursework-category">
                  <h5>Core Research Areas</h5>
                  <ul>
                    <li>Data Security</li>
                    <li>Application Security</li>
                    <li>Digital Forensics</li>
                    <li>Automated Software Engineering</li>
                  </ul>
                </div>
                <div className="coursework-category">
                  <h5>Applied Research</h5>
                  <ul>
                    <li>Software Engineering-Based Research</li>
                    <li>Applied AI</li>
                    <li>Machine Learning Applications</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="leadership">
              <h4>Leadership Roles:</h4>
              <ul>
                <li><strong>Operations Executive (Sponsorship & Liaison)</strong> - IUT Computer Society (Jan 2021 – Dec 2022)</li>
              </ul>
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

        <section className="standardized-tests">
          <h2>Standardized Tests</h2>
          <div className="test-card">
            <h3>IELTS</h3>
            <p className="test-date">September 2023</p>
            <div className="test-scores">
              <div className="overall-score">
                <span className="score-label">Overall Band Score:</span>
                <span className="score-value">7.5</span>
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
                  <span>7.0</span>
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