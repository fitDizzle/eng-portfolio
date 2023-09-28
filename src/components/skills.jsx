import React from "react";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <h2>Languages, Libraries and Frameworks</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <iconify-icon
                  icon="teenyicons:ruby-outline"
                  width="28"
                  height="28"
                ></iconify-icon>
              </div>
              <h4>
                <a href="#a">Ruby</a>
              </h4>
              <p>
                <strong>Libraries and Frameworks: </strong>Ruby on Rails, Rails
                Graphql, Devise, SideKiq
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <i class="bx bxl-javascript"></i>
              </div>
              <h4>
                <a href="#a">Javascript</a>
              </h4>
              <p>
                <strong>Libraries and Frameworks: </strong>
                Node, Express, React, Redux, Context, Cron, Sequelize, Styled
                components, Axios
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-python"></i>
              </div>
              <h4>
                <a href="#a">Python</a>
              </h4>
              <p>
                <strong>Libraries and Frameworks: </strong>Flask, Django,
                Scrapy, Selenium, Plotly, Matplotlib
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-typescript"></i>
                <iconify-icon
                  icon="teenyicons:typescript-outline"
                  width="28"
                  height="28"
                ></iconify-icon>
              </div>
              <h4>
                <a href="#a">Typescript</a>
              </h4>
              <p>
                <strong>Libraries and Frameworks: </strong>React-Typescript,
                Graphql, Codegen, Axios
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <iconify-icon
                  icon="mdi:graphql"
                  width="28"
                  height="28"
                ></iconify-icon>
              </div>
              <h4>
                <a href="#a">GraphQL (Rails & Javascript)</a>
              </h4>
              <p>
                <strong>Libraries and Frameworks: </strong>Rails Graphql,
                Codegen, Apollo, Federated Graphql
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <iconify-icon
                  icon="tabler:sql"
                  width="28"
                  height="28"
                ></iconify-icon>
              </div>
              <h4>
                <a href="#a">SQL</a>
              </h4>
              <p>
                <strong>Libraries and Frameworks: </strong>Postgres, MariaDB,
                MySQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
