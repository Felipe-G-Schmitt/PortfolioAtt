import profile from "../assets/profile.png";
import imgproj1 from "../assets/projects/pinas-home.png";
import imgproj2 from "../assets/projects/bul-app.gif";
import imgproj3 from "../assets/projects/kiwi-home.png";
import imgproj4 from "../assets/projects/stk-home.png";
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
            <div className="project-texts">
              <h2>Pinas</h2>
              <p>Desenvolvido por Felipe Gabriel, Lucas Coelho e Felipe Redivo, possuiamos o objetivo de criar um aplicativo em React Native onde o usuário poderia jogar um pequeno quiz, porém, para isso ele deveria criar uma conta e logar posteriormente</p>
            </div>

            <div className="project-langs">
              <a data-tooltip="React Native"><FaReact/></a>
              <a data-tooltip="VS Code"><VscVscode/></a>
              <a data-tooltip="Git"><LiaGit/></a>
              <a data-tooltip="CSS3"><FaCss3Alt/></a>
              <a data-tooltip="JavaScript"><FaJsSquare/></a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={imgproj2} alt="Project 2" />

          <div className="project-info">
            <div className="project-texts">
              <h2>Bússola Digital</h2>
              <p>Desenvolvido por Felipe Gabriel e Lucas Coelho utilizando o framework React Native, programamos um aplicativo que possuia uma "home" apresentando os programadores, e uma página contendo uma seta indicando a direção que o dispositivo esteja apontado, além disso um mapa exibindo a localização do dispositivo</p>
            </div>
            
            <div className="project-langs">
              <a data-tooltip="React Native"><FaReact/></a>
              <a data-tooltip="VS Code"><VscVscode/></a>
              <a data-tooltip="Git"><LiaGit/></a>
              <a data-tooltip="CSS3"><FaCss3Alt/></a>
              <a data-tooltip="JavaScript"><FaJsSquare/></a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={imgproj3} alt="Project 3" />

          <div className="project-info">
            <div className="project-texts">
              <h2>App Kiwi</h2>
              <p>Desenvolvido por Felipe Gabriel e Lucas Coelho, tinhamos o objetivo de criar um aplicativo com a temática de uma fruta, o software deveria contar com algumas "libs" do react native, sendo proposto um tema padrão de cor, ícones interativos personalizados, uma barra de navegação na parte inferior da tela, uma listagem das tarefas adicionadas e uma simples formulário contendo alguns "textinput"</p>
            </div>
            
            <div className="project-langs">
              <a data-tooltip="React Native"><FaReact/></a>
              <a data-tooltip="VS Code"><VscVscode/></a>
              <a data-tooltip="Git"><LiaGit/></a>
              <a data-tooltip="CSS3"><FaCss3Alt/></a>
              <a data-tooltip="JavaScript"><FaJsSquare/></a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={imgproj4} alt="Project 3" />

          <div className="project-info">
            <div className="project-texts">
              <h2>Stk Shop</h2>
              <p>StockSystem é a interface de usuário desenvolvida para interagir com a API StockSystem. O objetivo deste projeto é fornecer uma plataforma visualmente amigável e intuitiva para o gerenciamento de estoque, permitindo aos usuários realizar operações como cadastrar, visualizar, editar e excluir produtos de forma eficiente.</p>
            </div>
            
            <div className="project-langs">
              <a data-tooltip="React"><FaReact/></a>
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
