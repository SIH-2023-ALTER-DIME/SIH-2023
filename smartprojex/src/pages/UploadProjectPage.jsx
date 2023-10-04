import React from "react";
import { Link } from "react-router-dom";
import "../css/projectupload.css";
import "../css/footer.css";

const UploadProjectPage = () => {
  return (
    <div>
      <section className="sub-header">
        <nav>
          <Link to="/">
            <img src="../SIHP/landingpage_img/logo.png" />
          </Link>
        </nav>
        <h1>Upload Projects</h1>
      </section>

      <section>
        <div className="hero">
          <section className="upload-section">
            <form action="" autocomplete="off" enctype="multipart/form-data">
              <p>Upload File</p>
              <div>
                <input type="file" id="upload" style={{ display: "none" }} />
                <label for="upload">Select Files</label>
              </div>
              <button>
                <span>&#8682; Upload</span>{" "}
                <span className="uploading">Uploading...</span>
              </button>
              <button className="cancel">Cancel Upload</button>
              <div className="pr">
                <strong>
                  <h4 className="ex">PDF</h4>
                  <h5 className="size">2.5kb</h5>
                </strong>
                <progress min="0" max="100" value="0"></progress>
                <span className="progress-indicator"></span>
              </div>
            </form>
          </section>
        </div>
      </section>

      <section className="footer">
        <footer>
          <div className="footer-row">
            <div className="footer-col">
              <img
                src="../SIHP/landingpage_img/logo.png"
                className="footer-logo"
              />
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

export default UploadProjectPage;
