import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
        <section class="footer-icons">

            <a href="https://github.com/Felipe-G-Schmitt" target="_blank" rel="noopener noreferrer">
                <FaGithub className="iconGH"/>
            </a>

            <a href="https://www.linkedin.com/in/felipe-gabriel-schmitt/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="iconLk"/>
            </a>

            <a href="https://www.instagram.com/feeeepers/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="iconInsta"/>
            </a>
        </section>
        <p>Desenvolvido por Felipe Gabriel Schmitt</p>
    </footer>
  );
}

export default Footer;
