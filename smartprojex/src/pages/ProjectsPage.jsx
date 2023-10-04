import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/landingPageImg/logo.png";
import project from "../images/projects.jpg";
import project2 from "../images/projects2.jpg";
import project3 from "../images/projects3.jpg";
import "../css/projects.css";

const ProjectsPage = () => {
  return (
    <div>
      <section className="sub-header">
        <nav>
          <Link to="/">
            <img src={logo} />
          </Link>
        </nav>
        <h1>All Projects</h1>
      </section>
      <div className="container">
        <h2>ALL AVAILABLE PROJECTS</h2>
      </div>
      <section className="course">
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            onkeyup="filterProjects()"
            placeholder="Search for projects..."
          />
        </div>

        <div className="row">
          <div className="course-col">
            <img
              src={project}
              onclick="startDownload.call(this)"
              alt="Download Image"
            />
            <h3> ChatBot </h3>
            <h3> Galgotias University</h3>
          </div>

          <div className="course-col">
            <img
              src={project2}
              onclick="startDownload.call(this)"
              alt="Download Image"
            />
            <h3> Library Management System </h3>
            <h3> Galgotias University</h3>
          </div>

          <div className="course-col">
            <img
              src={project3}
              onclick="startDownload.call(this)"
              alt="Download Image"
            />
            <h3> College Trip Planner</h3>
            <h3> Galgotias University</h3>
          </div>

          <div className="course-col">
            <img
              src={project3}
              onclick="startDownload.call(this)"
              alt="Download Image"
            />
            <h3> College Events Manager </h3>
            <h3> Galgotias University</h3>
          </div>

          <div className="course-col">
            <img
              src={project}
              onclick="startDownload.call(this)"
              alt="Download Image"
            />
            <h3> Hotel Management System </h3>
            <h3> Galgotias University</h3>
          </div>

          <div className="course-col">
            <img
              src={project2}
              onclick="startDownload.call(this)"
              alt="Download Image"
            />
            <h3> Hospital Management System </h3>
            <h3> Galgotias University</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
