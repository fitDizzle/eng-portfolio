import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Work</p>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "200px",
          }}
        >
          <h1>Hang tight!</h1>
          <h2>This page is currently being updated... </h2>
        </div>
        {/* <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-js">Javascript</li>
              <li data-filter=".filter-py">Python</li>
              <li data-filter=".filter-cms">CMS (Web Design, CMS Systems)</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-py">
            <div className="portfolio-wrap">
              <img
                src="assets/img/gusto-logo.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Fintech Engineer</h4>
                <p>Details</p>
                <div className="portfolio-links">
                  <a
                    href="/"
                    // href="/project3"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://lexus-messages.herokuapp.com/"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-py">
            <div className="portfolio-wrap">
              <img
                src="assets/img/persevere-logo.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Fintech Engineer</h4>
                <p>Details</p>
                <div className="portfolio-links">
                  <a
                    href="/"
                    // href="/project3"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://lexus-messages.herokuapp.com/"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-py">
            <div className="portfolio-wrap">
              <img
                src="assets/img/banyan-labs-logo.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Fintech Engineer</h4>
                <p>Details</p>
                <div className="portfolio-links">
                  <a
                    href="/"
                    // href="/project3"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://lexus-messages.herokuapp.com/"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-js">
            <div className="portfolio-wrap">
              <img
                src="assets/img/scrababble.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Scrababble</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="/"
                    // href="/project1"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://scrababble-client.herokuapp.com/"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-js">
            <div className="portfolio-wrap">
              <img
                src="assets/img/anatomy-project.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Muscular Anatomy Project</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="/"
                    // href="/project2"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://muscular-anatomy-project.herokuapp.com/"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-cms">
            <div className="portfolio-wrap">
              <img
                src="assets/img/bravada-project.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Bravada</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="/"
                    // href="/project3"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://www.bravadayachts.com/"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        {/* 
          <div className="col-lg-4 col-md-6 portfolio-item filter-py">
            <div className="portfolio-wrap">
              <img
                src="assets/img/lexus_logo.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Lexus Feedback (Python, Postgres)</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="/"
                    // href="/project3"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="https://lexus-messages.herokuapp.com/"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="/project4"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        {/* 
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    data-gallery="portfolioDetailsGallery"
                    data-glightbox="type: external"
                    className="portfolio-details-lightbox"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
