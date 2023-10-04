import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import CollegesPage from "./pages/CollegesPage";
import LoginPage from "./pages/LoginPage";
import ProjectsPage from "./pages/ProjectsPage";
import UploadProjectPage from "./pages/UploadProjectPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/loginorsignup" />;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" Component={AboutPage} />
        <Route path="/colleges" Component={CollegesPage} />
        <Route path="/contacts" Component={ContactPage} />
        <Route path="/events" Component={EventsPage} />
        <Route path="/loginorsignup" Component={LoginPage} />
        <Route path="/projects" Component={ProjectsPage} />
        <Route path="/uploadprojects" Component={UploadProjectPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
