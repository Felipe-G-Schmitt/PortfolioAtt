import imgproj1 from "../assets/projects/pinas-home.png";
import imgproj2 from "../assets/projects/bul-app.gif";
import imgproj3 from "../assets/projects/kiwi-home.png";
import imgproj4 from "../assets/projects/stk-home.png";
import imgproj5 from "../assets/projects/finsecure-dashboard.png";
import CategoriaProjeto from "./../components/CategoriaProjeto";
import { FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LiaGit } from "react-icons/lia";

function Projects() {
  return (
    <>
    <section className="Sec-projects">
      <h1>Projetos</h1>

    <div className="filter-switch"> 
      <label for="filter" class="switch" aria-label="Toggle Filter">
        <input type="checkbox" id="filter" />
        <span>Com Frontend</span>
        <span>Somente Backend</span>
      </label>
    </div>

      <div className="projects">

        <div className="year-separator">
          <div className="line"></div>
            <span>2025</span>
          <div className="line"></div>
        </div>

        <div className="project-card" href="#">
          <img src={imgproj4} alt="Project Stk Shop" />

          <div className="project-info">
            <div className="project-texts">
              <h2>Stk Shop</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Web"/>
                  <CategoriaProjeto categoria="Frontend"/>
                  <CategoriaProjeto categoria="Backend"/>
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

        <div className="project-card">
          <img src={imgproj5} alt="Project FinSecure" />

          <div className="project-info">
            <div className="project-texts">
              <h2>FinSecure</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Web"/>
                  <CategoriaProjeto categoria="Frontend"/>
                  <CategoriaProjeto categoria="Backend"/>
                </div>
              <p>Sistema de controle de finanças pessoais desenvolvido com foco em segurança. O objetivo deste projeto, é fornecer uma plataforma visualmente amigável e intuitiva para organizar e gerenciar categorias e transações financeiras, permitindo aos usuários cadastrar, visualizar, editar e excluir suas finanças de forma eficiente e segura.</p>
            </div>
            
            <div className="project-langs">
              <a data-tooltip="React"><FaReact/></a>
              <a data-tooltip="MySql"><SiMysql/></a>
              <a data-tooltip="NodeJs"><FaNodeJs/></a>
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
          <img src={imgproj1} alt="Project Pinas" />

          <div className="project-info">
            <div className="project-texts">
              <h2>Pinas</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Ensino Médio"/>
                  <CategoriaProjeto categoria="Mobile"/>
                  <CategoriaProjeto categoria="Frontend"/>
                  <CategoriaProjeto categoria="Backend"/>
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
          <img src={imgproj2} alt="Project Bússola Digital" />

          <div className="project-info">
            <div className="project-texts">
              <h2>Bússola Digital</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Ensino Médio"/>
                  <CategoriaProjeto categoria="Mobile"/>
                  <CategoriaProjeto categoria="Frontend"/>
                  <CategoriaProjeto categoria="Backend"/>
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
          <img src={imgproj3} alt="Project App Kiwi" />

          <div className="project-info">
            <div className="project-texts">
              <h2>App Kiwi</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Ensino Médio"/>
                  <CategoriaProjeto categoria="Mobile"/>
                  <CategoriaProjeto categoria="Frontend"/>
                  <CategoriaProjeto categoria="Backend"/>
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