import profile from "../assets/profile.png";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail, IoIosPin } from "react-icons/io";

function About() {
  return (
    <>
    <section className="About" id="About">
        <div className="image-wrapper">
            <img src={profile} alt="profile picture" className="profile"/>
        <div className="image-overlay"></div>
        </div>
    <div className="image-gradient" />

    <div className="infos">
        <h1>Felipe Gabriel Schmitt</h1>
        <p>19 anos</p>
        <p>Análise e desenvolvimento de sistemas</p>

        <div className="socials">
            <div className="social-item">
            <IoMdMail />
            <p>felipegabrielsc2006@gmail.com</p>
        </div>
        <div className="social-item">
            <IoIosPin />
            <p>Joinville - SC</p>
        </div>
        <div className="social-item">
            <FaPhoneAlt />
            <p>(47) 9 9166-0977</p>
        </div>
    </div>

    <section className="icons">
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
        
    </div>
    </section>
    </>
  );
}

export default About;
