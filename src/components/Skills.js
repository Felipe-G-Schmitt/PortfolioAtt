import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaNodeJs, FaJava, FaReact, FaFigma, } from "react-icons/fa";
import { SiMysql, SiCplusplus, SiXampp, SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LiaGit } from "react-icons/lia";

function Skills() {
  return (
    <>
    <section className="langTolls">
    <h1>Linguagens e ferramentas</h1>
        <div className="skills">
            <div className="skills-track">
              <div className="lang" data-tooltip="HTML5"><FaHtml5 size={28}/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt size={28}/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare size={28}/></div>
              <div className="lang" data-tooltip="PHP"><FaPhp size={28}/></div>
              <div className="lang" data-tooltip="MySQL"><SiMysql size={28}/></div>
              <div className="lang" data-tooltip="Node.js"><FaNodeJs size={28}/></div>
              <div className="lang" data-tooltip="Java"><FaJava size={28}/></div>
              <div className="lang" data-tooltip="C++"><SiCplusplus size={28}/></div>
              <div className="lang" data-tooltip="React"><FaReact size={28}/></div>
              <div className="lang" data-tooltip="React Native"><FaReact size={28}/></div> 
              <div className="lang" data-tooltip="VS Code"><VscVscode size={28}/></div>
              <div className="lang" data-tooltip="XAMPP"><SiXampp size={28}/></div>
              <div className="lang" data-tooltip="Git"><LiaGit size={28}/></div>
              <div className="lang" data-tooltip="Figma"><FaFigma size={28}/></div>
              <div className="lang" data-tooltip="Photoshop"><SiAdobephotoshop size={28}/></div>

              <div className="lang" data-tooltip="HTML5"><FaHtml5 size={28}/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt size={28}/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare size={28}/></div>
              <div className="lang" data-tooltip="PHP"><FaPhp size={28}/></div>
              <div className="lang" data-tooltip="MySQL"><SiMysql size={28}/></div>
              <div className="lang" data-tooltip="Node.js"><FaNodeJs size={28}/></div>
              <div className="lang" data-tooltip="Java"><FaJava size={28}/></div>
              <div className="lang" data-tooltip="C++"><SiCplusplus size={28}/></div>
              <div className="lang" data-tooltip="React"><FaReact size={28}/></div>
              <div className="lang" data-tooltip="React Native"><FaReact size={28}/></div> 
              <div className="lang" data-tooltip="VS Code"><VscVscode size={28}/></div>
              <div className="lang" data-tooltip="XAMPP"><SiXampp size={28}/></div>
              <div className="lang" data-tooltip="Git"><LiaGit size={28}/></div>
              <div className="lang" data-tooltip="Figma"><FaFigma size={28}/></div>
              <div className="lang" data-tooltip="Photoshop"><SiAdobephotoshop size={28}/></div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Skills;