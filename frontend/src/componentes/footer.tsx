// Footer.js
import React from "react";
import './style.css';
import { FaGithub } from "react-icons/fa"; // Certifique-se de ter a biblioteca react-icons instalada

const Footer = () => {
  const githubRepoUrl = "https://github.com/Pedryn/Pet-Lovers/tree/atv-iv";

  return (
    <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#00FF7F" }}>
      <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ fontSize: "2em", marginRight: "10px" }} />
      </a>
      <p>Visite meu repositório no GitHub, la tem todas as outras listas :)</p>
    </footer>
  );
};

export default Footer;
