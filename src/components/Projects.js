import imgproj1 from "../assets/projects/pinas-home.png";
import imgproj2 from "../assets/projects/bul-app.gif";
import imgproj3 from "../assets/projects/kiwi-home.png";
import imgproj4 from "../assets/projects/stk-home.png";
import imgproj5 from "../assets/projects/finsecure-dashboard.png";
import imgproj6 from "../assets/projects/vwcrud-home.png";
import imgproj7 from "../assets/projects/mzk2bet-home.png";
import imgproj8 from "../assets/projects/crudqa-home.png";
import CategoriaProjeto from "./../components/CategoriaProjeto";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LiaGit } from "react-icons/lia";
import { useState } from "react";

function Projects() {
  const [expand, setExpand] = useState(false);

  return (
    <>
    <section className="Sec-projects" id="projects">
      <h1>Projetos</h1>

    {/* <div className="filter-switch"> 
      <label for="filter" class="switch" aria-label="Toggle Filter">
        <input type="checkbox" id="filter" />
        <span>Com Interface</span>
        <span>Somente Backend</span>
      </label>
    </div> */}

      <div className="projects">

        <div className="year-separator">
          <div className="line"></div>
            <span>2025</span>
          <div className="line"></div>
        </div>

        
        <a className="project-card" href="https://github.com/drypzz/mzk2bet/tree/master" target="_blank" rel="noopener noreferrer">
          <img src={imgproj7} alt="Project Mzk2Bet"/>

          <div className="project-info">
            <div className="project-texts">
              <h2>Mzk2Bet</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Web"/>
                  <CategoriaProjeto categoria="Frontend"/>
                  <CategoriaProjeto categoria="Backend"/>
                </div>
                <div
                  className={`project-description ${expand ? "expanded" : ""}`}
                  onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpand(!expand);
                }}
                >
                <p>StockSystem é a interface de usuário desenvolvida para interagir com a API StockSystem. O objetivo deste projeto é fornecer uma plataforma visualmente amigável e intuitiva para o gerenciamento de estoque, permitindo aos usuários realizar operações como cadastrar, visualizar, editar e excluir produtos de forma eficiente.</p>
              </div>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="React"><FaReact/></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode/></div>
              <div className="lang" data-tooltip="Git"><LiaGit/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <a className="project-card" href="https://github.com/drypzz/front-stocksystem" target="_blank" rel="noopener noreferrer">
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
                <div
                  className={`project-description ${expand ? "expanded" : ""}`}
                  onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpand(!expand);
                }}
              >
                <p>StockSystem é a interface de usuário desenvolvida para interagir com a API StockSystem. O objetivo deste projeto é fornecer uma plataforma visualmente amigável e intuitiva para o gerenciamento de estoque, permitindo aos usuários realizar operações como cadastrar, visualizar, editar e excluir produtos de forma eficiente.</p>
              </div>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="React"><FaReact/></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode/></div>
              <div className="lang" data-tooltip="Git"><LiaGit/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <a className="project-card" href="https://github.com/Felipe-G-Schmitt/finSecure" target="_blank" rel="noopener noreferrer">
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
                <div
                  className={`project-description ${expand ? "expanded" : ""}`}
                  onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpand(!expand);
                }}
                >
                <p>Sistema de controle de finanças pessoais desenvolvido com foco em segurança. O objetivo deste projeto, é fornecer uma plataforma visualmente amigável e intuitiva para organizar e gerenciar categorias e transações financeiras, permitindo aos usuários cadastrar, visualizar, editar e excluir suas finanças de forma eficiente e segura.</p>
              </div>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="React"><FaReact/></div>
              <div className="lang" data-tooltip="MySql"><SiMysql/></div>
              <div className="lang" data-tooltip="NodeJs"><FaNodeJs/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <a className="project-card-back" href="https://github.com/Felipe-G-Schmitt/AvaliacaoBackend" target="_blank" rel="noopener noreferrer">

          <div className="project-info-back">
            <div className="project-texts-back">
              <h2>Avaliação BackEnd</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Backend"/>
                </div>
              <p>API REST construída com Node.js, Express e Sequelize que permite o gerenciamento de Usuários, Produtos, Categorias e Pedidos com associação N-N a produtos via prodOrder. A autenticação é feita via JWT e o banco de dados utilizado é MySQL.</p>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="NodeJs"><FaNodeJs/></div>
              <div className="lang" data-tooltip="MySql"><SiMysql/></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <a className="project-card-back" href="https://github.com/Felipe-G-Schmitt/AtividadeMVC" target="_blank" rel="noopener noreferrer">

          <div className="project-info-back">
            <div className="project-texts-back">
              <h2>Atividade MVC</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Backend"/>
                </div>
              <p>API REST construída com Node.js, Express e Sequelize, que permite o gerenciamento de Usuários, Tarefas e Projetos. A autenticação é feita via JWT e o banco de dados utilizado é MySQL.</p>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="NodeJs"><FaNodeJs/></div>
              <div className="lang" data-tooltip="MySql"><SiMysql/></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <a className="project-card" href="https://github.com/Felipe-G-Schmitt/crudqa_" target="_blank" rel="noopener noreferrer">
          <img src={imgproj8} alt="Project FinSecure" />

          <div className="project-info">
            <div className="project-texts">
              <h2>CrudQA</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Web"/>
                  <CategoriaProjeto categoria="Frontend"/>
                  <CategoriaProjeto categoria="Backend"/>
                </div>
                <div
                  className={`project-description ${expand ? "expanded" : ""}`}
                  onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpand(!expand);
                }}
                >
                <p>Sistema de gerenciamento de estoque desenvolvido com foco em segurança e operações CRUD. O objetivo deste projeto é fornecer uma plataforma visualmente amigável e intuitiva para organizar e gerenciar produtos e usuários, permitindo que administradores cadastrem, visualizem, editem e excluam itens do estoque, controlem contas de usuários e gerem chaves de acesso.</p>
              </div>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="PHP"><FaPhp/></div>
              <div className="lang" data-tooltip="MySql"><SiMysql/></div>
              <div className="lang" data-tooltip="HTML5"><FaHtml5/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <div className="year-separator">
          <div className="line"></div>
            <span>2024</span>
          <div className="line"></div>
        </div>

        <a className="project-card-back" href="https://github.com/Felipe-G-Schmitt/OrgEventos" target="_blank" rel="noopener noreferrer">

          <div className="project-info-back">
            <div className="project-texts-back">
              <h2>OrgEventos</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Backend"/>
                </div>
              <p>Sistema de gerenciamento de eventos desenvolvido em Java, operando via console (CLI) e utilizando JDBC para conexão direta com um banco de dados MySQL. O objetivo do projeto é fornecer uma plataforma para organizar e gerenciar Eventos, Locais, Organizadores e Participantes.</p>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="Java"><FaJava/></div>
              <div className="lang" data-tooltip="MySql"><SiMysql/></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode/></div>
              <div className="lang" data-tooltip="Git"><LiaGit/></div>
            </div>
          </div>
        </a>

        <a className="project-card" href="https://github.com/Felipe-G-Schmitt/vwcrud_" target="_blank" rel="noopener noreferrer">
          <img src={imgproj6} alt="Project VWCrud" />

          <div className="project-info">
            <div className="project-texts">
              <h2>VWCrud</h2>
                <div className="main-cat-proj">
                  <CategoriaProjeto categoria="Faculdade"/>
                  <CategoriaProjeto categoria="Web"/>
                  <CategoriaProjeto categoria="Frontend"/>
                  <CategoriaProjeto categoria="Backend"/>
                </div>
                <div
                  className={`project-description ${expand ? "expanded" : ""}`}
                  onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpand(!expand);
                }}
              >
                <p>CRUD para gerenciar modelos de carros da Volkswagen. O objetivo é fornecer uma interface parecida com a original, para realizar operações como cadastro, visualização, edição e exclusão de modelos de veículos e usuários. Possui funcionalidades de autenticação de usuários (cadastro e login) e gerenciamento de modelos de carros.</p>
              </div>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="PHP"><FaPhp/></div>
              <div className="lang" data-tooltip="MySql"><SiMysql/></div>
              <div className="lang" data-tooltip="HTML5"><FaHtml5/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <div className="year-separator">
          <div className="line"></div>
            <span>2023</span>
          <div className="line"></div>
        </div>
        
        <a className="project-card" href="https://github.com/Felipe-G-Schmitt/pinas" target="_blank" rel="noopener noreferrer">
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
                <div
                  className={`project-description ${expand ? "expanded" : ""}`}
                  onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpand(!expand);
                }}
                >
                <p>Desenvolvido por Felipe Gabriel, Lucas Coelho e Felipe Redivo, possuiamos o objetivo de criar um aplicativo em React Native onde o usuário poderia jogar um pequeno quiz, porém, para isso ele deveria criar uma conta e logar posteriormente</p>
              </div>
            </div>

            <div className="project-langs">
              <div className="lang" data-tooltip="React Native"><FaReact/></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode/></div>
              <div className="lang" data-tooltip="Git"><LiaGit/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <a className="project-card" href="https://github.com/Felipe-G-Schmitt/AvaliacaoFelipeELucas" target="_blank" rel="noopener noreferrer">
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
                <div
                  className={`project-description ${expand ? "expanded" : ""}`}
                  onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpand(!expand);
                }}
                >
                <p>Desenvolvido por Felipe Gabriel e Lucas Coelho utilizando o framework React Native, programamos um aplicativo que possuia uma "home" apresentando os programadores, e uma página contendo uma seta indicando a direção que o dispositivo esteja apontado, além disso um mapa exibindo a localização do dispositivo</p>
              </div>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="React Native"><FaReact/></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode/></div>
              <div className="lang" data-tooltip="Git"><LiaGit/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>

        <a className="project-card" href="https://github.com/Felipe-G-Schmitt/TodoAppKiwi" target="_blank" rel="noopener noreferrer">
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
                <div
                  className={`project-description ${expand ? "expanded" : ""}`}
                  onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpand(!expand);
                }}
                >
                <p>Desenvolvido por Felipe Gabriel e Lucas Coelho, o aplicativo tem como temática uma fruta e foi criado usando React Native. Inclui um tema de cores padrão, ícones interativos personalizados, barra de navegação inferior, listagem de tarefas e um formulário simples com campos de texto.</p>
              </div>
            </div>
            
            <div className="project-langs">
              <div className="lang" data-tooltip="React Native"><FaReact/></div>
              <div className="lang" data-tooltip="VS Code"><VscVscode/></div>
              <div className="lang" data-tooltip="Git"><LiaGit/></div>
              <div className="lang" data-tooltip="CSS3"><FaCss3Alt/></div>
              <div className="lang" data-tooltip="JavaScript"><FaJsSquare/></div>
            </div>
          </div>
        </a>
      </div>
    </section>
    </>
  );
}

export default Projects;