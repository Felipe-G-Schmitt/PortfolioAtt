import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaNodeJs, FaJava, FaReact, FaFigma, } from "react-icons/fa";
import { SiMysql, SiCplusplus, SiXampp, SiAdobephotoshop } from "react-icons/si";
import { IoMdArrowDropright } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { LiaGit } from "react-icons/lia";

function Skills() {
  return (
    <>
    <section className="langTolls">
      <div className="title">
        <IoMdArrowDropright size={50}/> <h1>Linguagens e ferramentas</h1>
        <div className="line"></div>
      </div>
        <div className="skills">
            <div className="skills-track">
              <div className="lang" data-tooltip="HTML5"><FaHtml5 size={55}/> <p>HTML</p></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt size={55}/> <p>CSS</p></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare size={55}/> <p>JavaScript</p></div>
              <div className="lang" data-tooltip="PHP"><FaPhp size={55}/> <p>PHP</p></div>
              <div className="lang" data-tooltip="MySQL"><SiMysql size={55}/> <p>MySQL</p></div>
              <div className="lang" data-tooltip="Node.js"><FaNodeJs size={55}/> <p>Node.js</p></div>
              <div className="lang" data-tooltip="Java"><FaJava size={55}/> <p>Java</p></div>
              <div className="lang" data-tooltip="C++"><SiCplusplus size={55}/> <p>C++</p></div>
              <div className="lang" data-tooltip="React"><FaReact size={55}/> <p>React</p></div>
              <div className="lang" data-tooltip="React Native"><FaReact size={55}/> <p>React Native</p></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode size={55}/> <p>VS Code</p></div>
              <div className="lang" data-tooltip="XAMPP"><SiXampp size={55}/> <p>XAMPP</p></div>
              <div className="lang" data-tooltip="Git"><LiaGit size={55}/> <p>Git</p></div>
              <div className="lang" data-tooltip="Figma"><FaFigma size={55}/> <p>Figma</p></div>
              <div className="lang" data-tooltip="Photoshop"><SiAdobephotoshop size={55}/> <p>Photoshop</p></div>

              <div className="lang" data-tooltip="HTML5"><FaHtml5 size={55}/> <p>HTML</p></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt size={55}/> <p>CSS</p></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare size={55}/> <p>JavaScript</p></div>
              <div className="lang" data-tooltip="PHP"><FaPhp size={55}/> <p>PHP</p></div>
              <div className="lang" data-tooltip="MySQL"><SiMysql size={55}/> <p>MySQL</p></div>
              <div className="lang" data-tooltip="Node.js"><FaNodeJs size={55}/> <p>Node.js</p></div>
              <div className="lang" data-tooltip="Java"><FaJava size={55}/> <p>Java</p></div>
              <div className="lang" data-tooltip="C++"><SiCplusplus size={55}/> <p>C++</p></div>
              <div className="lang" data-tooltip="React"><FaReact size={55}/> <p>React</p></div>
              <div className="lang" data-tooltip="React Native"><FaReact size={55}/> <p>React Native</p></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode size={55}/> <p>VS Code</p></div>
              <div className="lang" data-tooltip="XAMPP"><SiXampp size={55}/> <p>XAMPP</p></div>
              <div className="lang" data-tooltip="Git"><LiaGit size={55}/> <p>Git</p></div>
              <div className="lang" data-tooltip="Figma"><FaFigma size={55}/> <p>Figma</p></div>
              <div className="lang" data-tooltip="Photoshop"><SiAdobephotoshop size={55}/> <p>Photoshop</p></div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Skills;