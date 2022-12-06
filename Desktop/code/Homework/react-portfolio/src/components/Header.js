import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header({ currentPage, handlePageChange }) {
  const [page, setPage] = useState("AboutMe");
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" id="AboutMePage">
        <Link
          onClick={() => setPage("AboutMe")}
          to="/"
          className={page === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={() => setPage("Portfolio")}
          to="Portfolio"
          className={page === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={() => setPage("Contact")}
          to="Contact"
          className={page === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          onClick={() => setPage("Resume")}
          to="Resume"
          className={page === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Header;
