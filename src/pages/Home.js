import profile from "../assets/profile.png";
import imgproj1 from "../assets/projects/pinas-home.png";
import { IoMdMail, IoIosPin } from "react-icons/io";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaNodeJs, FaJava, FaReact, FaFigma, } from "react-icons/fa";
import { SiMysql, SiCplusplus, SiXampp, SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LiaGit } from "react-icons/lia";

function Home() {
  return (
    <>
    <section className="About">
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
    <section className="langTolls">
      <h1>Linguagens e ferramentas</h1>
      <div className="skills">
        <div className="skills-track">
          <FaHtml5 size={28}/>
          <FaCss3Alt size={28}/>
          <FaJsSquare size={28}/>
          <FaPhp size={28}/>
          <SiMysql size={28}/>
          <FaNodeJs size={28}/>
          <FaJava size={28}/>
          <SiCplusplus size={28}/>
          <FaReact size={28}/>
          <FaReact size={28}/>
          <VscVscode size={28}/>
          <SiXampp size={28}/>
          <LiaGit size={28}/>
          <FaFigma size={28}/>
          <SiAdobephotoshop size={28}/>

          <FaHtml5 size={28}/>
          <FaCss3Alt size={28}/>
          <FaJsSquare size={28}/>
          <FaPhp size={28}/>
          <SiMysql size={28}/>
          <FaNodeJs size={28}/>
          <FaJava size={28}/>
          <SiCplusplus size={28}/>
          <FaReact size={28}/>
          <FaReact size={28}/>
          <VscVscode size={28}/>
          <SiXampp size={28}/>
          <LiaGit size={28}/>
          <FaFigma size={28}/>
          <SiAdobephotoshop size={28}/>
        </div>
      </div>
    </section>
    <section className="Sec-projects">
      <h1>Projetos</h1>

      <div className="projects">
        <div className="project-card">
          <img src={imgproj1} alt="Project 1" />

          <div className="project-info">
            <h2>Pinas</h2>
            <p>Desenvolvido por Felipe Gabriel, Lucas Coelho e Felipe Redivo, possuiamos o objetivo de criar um aplicativo em React Native onde o usuário poderia jogar um pequeno quiz, porém, para isso ele deveria criar uma conta e logar posteriormente</p>
          
            <div className="project-langs">
              <a data-tooltip="React Native"><FaReact/></a>
              <a data-tooltip="VS Code"><VscVscode/></a>
              <a data-tooltip="Git"><LiaGit/></a>
              <a data-tooltip="CSS3"><FaCss3Alt/></a>
              <a data-tooltip="JavaScript"><FaJsSquare/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
