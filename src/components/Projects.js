import imgproj1 from "../assets/projects/pinas-home.png";
import imgproj2 from "../assets/projects/bul-app.gif";
import imgproj3 from "../assets/projects/kiwi-home.png";
import imgproj4 from "../assets/projects/stk-home.png";
import CategoriaProjeto from "./../components/CategoriaProjeto";
import { FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { LiaGit } from "react-icons/lia";

function Projects() {
  return (
    <>
    <section className="Sec-projects">
      <h1>Projetos</h1>

      <div className="projects">

        <div className="year-separator">
          <div className="line"></div>
            <span>2025</span>
          <div className="line"></div>
        </div>

        <div className="project-card">
          <img src={imgproj4} alt="Project 3" />

          <div className="project-info">
            <div className="project-texts">
              <h2>Stk Shop</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Web"/>
                </div>
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

        <div className="year-separator">
          <div className="line"></div>
            <span>2023</span>
          <div className="line"></div>
        </div>
        
        <div className="project-card">
          <img src={imgproj1} alt="Project 1" />

          <div className="project-info">
            <div className="project-texts">
              <h2>Pinas</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Ensino Médio"/>
                  <CategoriaProjeto categoria="Mobile"/>
                </div>
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
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Ensino Médio"/>
                  <CategoriaProjeto categoria="Mobile"/>
                </div>
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
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Ensino Médio"/>
                  <CategoriaProjeto categoria="Mobile"/>
                </div>
              <p>Desenvolvido por Felipe Gabriel e Lucas Coelho, o aplicativo tem como temática uma fruta e foi criado usando React Native. Inclui um tema de cores padrão, ícones interativos personalizados, barra de navegação inferior, listagem de tarefas e um formulário simples com campos de texto.</p>
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
      </div>
    </section>
    </>
  );
}

export default Projects;