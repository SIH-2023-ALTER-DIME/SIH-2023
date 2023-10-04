import React from "react";
import "../css/landingpage.css";
import { Link } from "react-router-dom";
import logo from "../images/landingPageImg/logo.png";
import "../css/footer.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="navbar">
            <img src={logo} />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/colleges">Colleges</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
              <li>
                <Link to="/loginorsignup">Login/Register</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <h1>
              Connecting Minds, Fostering Innovation: <br />
              Uniting Students on One Platform!
            </h1>
            <p>
              Online integrated platform for projects taken up by the students
              of various universities/colleges
            </p>
            <Link to="/projects">I'm a Student</Link>
            <Link to="/loginorsignup">I'm college/university</Link>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default HomePage;
