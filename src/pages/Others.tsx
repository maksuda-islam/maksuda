import React from 'react';
import './Others.css';

const Others: React.FC = () => {
  return (
    <div className="others">
      <div className="container">
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

      </div>
    </div>
  );
};

export default Others;