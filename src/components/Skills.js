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
              <a data-tooltip="HTML5"><FaHtml5 size={28}/></a>
              <a data-tooltip="CSS3"><FaCss3Alt size={28}/></a>
              <a data-tooltip="JavaScript"><FaJsSquare size={28}/></a>
              <a data-tooltip="PHP"><FaPhp size={28}/></a>
              <a data-tooltip="MySQL"><SiMysql size={28}/></a>
              <a data-tooltip="Node.js"><FaNodeJs size={28}/></a>
              <a data-tooltip="Java"><FaJava size={28}/></a>
              <a data-tooltip="C++"><SiCplusplus size={28}/></a>
              <a data-tooltip="React"><FaReact size={28}/></a>
              <a data-tooltip="React Native"><FaReact size={28}/></a> 
              <a data-tooltip="VS Code"><VscVscode size={28}/></a>
              <a data-tooltip="XAMPP"><SiXampp size={28}/></a>
              <a data-tooltip="Git"><LiaGit size={28}/></a>
              <a data-tooltip="Figma"><FaFigma size={28}/></a>
              <a data-tooltip="Photoshop"><SiAdobephotoshop size={28}/></a>

              <a data-tooltip="HTML5"><FaHtml5 size={28}/></a>
              <a data-tooltip="CSS3"><FaCss3Alt size={28}/></a>
              <a data-tooltip="JavaScript"><FaJsSquare size={28}/></a>
              <a data-tooltip="PHP"><FaPhp size={28}/></a>
              <a data-tooltip="MySQL"><SiMysql size={28}/></a>
              <a data-tooltip="Node.js"><FaNodeJs size={28}/></a>
              <a data-tooltip="Java"><FaJava size={28}/></a>
              <a data-tooltip="C++"><SiCplusplus size={28}/></a>
              <a data-tooltip="React"><FaReact size={28}/></a>
              <a data-tooltip="React Native"><FaReact size={28}/></a> 
              <a data-tooltip="VS Code"><VscVscode size={28}/></a>
              <a data-tooltip="XAMPP"><SiXampp size={28}/></a>
              <a data-tooltip="Git"><LiaGit size={28}/></a>
              <a data-tooltip="Figma"><FaFigma size={28}/></a>
              <a data-tooltip="Photoshop"><SiAdobephotoshop size={28}/></a>
            </div>
        </div>
    </section>
    </>
  );
}

export default Skills;