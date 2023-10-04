import React from "react";
import "../css/about.css";
import logo from "../images/landingPageImg/logo.png";
import about from "../images/landingPageImg/about.jpg";
import "../css/footer.css";

const AboutPage = () => {
  return (
    <div>
      <section class="sub-header">
        <nav>
          <a href="about.html">
            <img src={logo} />
          </a>
        </nav>
        <h1>About Us</h1>
      </section>
      <section class="about-us">
        <div class="row">
          <div class="about-col">
            <h1>SmartProjex</h1>
            <br />
            <br />
            <p>
              Welcome to the Student Project Platform, a dynamic online space
              that bridges the gap between students from various universities
              and colleges. Our mission is to provide a collaborative
              environment where innovation and learning thrive. <br />
              <br />
              <br />
              <br />
              Our platform connects budding minds, allowing them to share their
              projects, research and ideas with the global community. Whether
              you are a budding engineer, scientist, artist or entrepreneur,
              this is the canvas for you to showcase your work and discover the
              outstanding talents of your colleagues.
              <br />
              <br />
              <br />
              <br />
              Join us in shaping the future of education and fostering a culture
              of discovery, collaboration and growth. Together, we can create a
              world where knowledge has no borders.
              <br />
              <br />
              <br />
              <br />
              <strong>Mission</strong>
              Our mission is to empower students at universities and colleges
              around the world by providing them with an online collaborative
              platform where they can express their creativity, share knowledge
              ​aware and participate in meaningful projects. We aim to foster a
              vibrant community of learners, promote interdisciplinary
              collaboration and facilitate the exchange of innovative ideas.
              <br />
              <br />
              <br />
              <br />
              <strong>Vision</strong>
              Our vision is to be the leading global platform, driving
              student-led innovation and academic excellence. We aim to create a
              borderless ecosystem where students inspire and support each
              other, eliminate geographical barriers and facilitate
              cross-cultural learning. By continuously improving the
              capabilities of our platform, we aim to revolutionize education,
              making it more accessible, collaborative and impactful for
              students around the world.
            </p>
          </div>
          <div class="about-col">
            <img src={about} />
          </div>
        </div>
      </section>
      <section className="footer">
        <footer>
          <div className="footer-row">
            <div className="footer-col">
              <img src={logo} className="footer-logo" />
              <p>
                An online integrated platform for student projects across
                universities and colleges fosters collaboration and
                knowledge-sharing, providing a centralized hub for innovative
                academic endeavors to flourish. This platform empowers students
                to showcase their work, collaborate with peers, and access a
                diverse range of resources, enhancing the overall learning
                experience.
              </p>
            </div>

            <div className="footer-col">
              <h3>
                Get In Touch{" "}
                <div className="underline">
                  <span></span>
                </div>
              </h3>
              <p>Plot No. 2, Yamuna Expy</p>
              <p>opposite Buddha International Circuit</p>
              <p>Sector 17A</p>
              <p>Greater Noida, Uttar Pradesh 203201</p>
              <p className="email-id">admission@galgotiasuniversity.edu.in</p>
              <h4>+91 9810162221</h4>
            </div>

            <div className="footer-col">
              <h3>
                Links{" "}
                <div className="underline">
                  <span></span>
                </div>
              </h3>
              <ul>
                <li>
                  <a href="https://www.sih.gov.in">SIH</a>
                </li>
                <li>
                  <a href="https://sih.technojam.in">SIH THEMES</a>
                </li>
                <li>
                  <a href="https://www.sih.gov.in">Result</a>
                </li>
                <li>
                  <a href="https://sih.technojam.in" target="_blank">
                    PS CODE
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>
                About{" "}
                <div className="underline">
                  <span></span>
                </div>
              </h3>
              <ul>
                <li>
                  <a href="">Principal's Desk</a>
                </li>
                <li>
                  <a href="" target="_blank">
                    Management
                  </a>
                </li>
                <li>
                  <a href="">AICTE Affiliation</a>
                </li>
                <li>
                  <a href="" target="_blank">
                    Mandatory Disclosure
                  </a>
                </li>
              </ul>
              <br />
              <div className="social-icon">
                <a href="" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">
            Designed & Developed by Alter Dime&nbsp;&nbsp; |&nbsp;
            &nbsp;SmartProjex © 2023 - All Rights Reserved
          </p>
        </footer>
      </section>
    </div>
  );
};

export default AboutPage;
