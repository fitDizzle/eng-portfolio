import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Software | Web | Mobile</h4>
              <p>
                <em>
                  Tech professional with 3+ years of experience in Business
                  Development, Educational Training and Software and Web
                  Development. Extensive knowledge with PERN and MERN stack.
                </em>
              </p>
              <p>
                <ul>
                  <li>Phoenix, Arizona</li>
                  <li>(480) 579-8865</li>
                  <li>markfitnessaz@gmail.com</li>
                </ul>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Hack Reactor TAA (Technical Admissions Assessment)</h4>
              <h5>April 2022</h5>
              <p>
                <em>Certificate of Completion</em>
              </p>
              <p>
                Successfully completed all non-technical and technical
                assessments with Hack Reacter and received a letter of
                successful completion of the Hack Reactor Technical Admission
                Assessment.
              </p>
            </div>
            <div className="resume-item">
              <h4>Persevere</h4>
              <h5>2019 - 2021</h5>
              <p>
                <em>Persevere (12) Month Web Developer Training Course</em>
              </p>
              <p>
                Successfully graduated the Persevere 12 Month Software and Web
                Applications Development course. Over 3,000 hours of development
                training logged.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Director of Business Development</h4>
              <h5>2022 - Present</h5>
              <p>
                <em>Banyan Labs</em>
              </p>
              <p>
                <ul>
                  <li>
                    Implement and manage strategic marketing campaigns to drive
                    revenue and contracted work to Banyan Labs.
                  </li>
                  <li>
                    Implement strategic partnerships to expand growth and mutual
                    benefit between partnered organizations. Establish
                    partnership negotiations with new partners and maintain and
                    expand partnerships with current partnered organizations.
                  </li>
                  <li>
                    Coordinate promotional events to bring awareness to Banayn
                    Labs and our mission.
                  </li>
                  <li>
                    Assist in new project sales which includes project planning,
                    team coordination and maintaining customer relations.
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Technical Teachers Aide</h4>
              <h5>2020 - 2021</h5>
              <p>
                <em>Persevere</em>
              </p>
              <p>
                <ul>
                  <li>
                    Work with Code Camp educators to design and implement course
                    corriculum.
                  </li>
                  <li>
                    Coordinate student training and continued educational
                    courses.
                  </li>
                  <li>
                    Assist in day to day student instruction and guidance.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
