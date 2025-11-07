import EcoHealthhome from "../assets/projects/ecoHealth-home.png";
import SplatGamehome from "../assets/projects/splatgame-home.png";
import CategoriaProjeto from "./../components/CategoriaProjeto";
import { FaCss3Alt, FaJsSquare, FaReact, FaNpm } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LiaGit } from "react-icons/lia";

function MainProjects() {
    return (
        <section className="MainSec-projects">
            <h1>Projetos em destaque</h1>

            <a className="Mainproject-card" href="https://github.com/function404/jogoDengue" target="_blank" rel="noopener noreferrer">
            <img src={EcoHealthhome} alt="Projecto EcoHealth" />

            <div className="project-info">
                <div className="project-texts">
                    <h2>Eco Health</h2>
                    <div className="main-cat-proj">
                        <CategoriaProjeto categoria="Faculdade"/>
                        <CategoriaProjeto categoria="Mobile"/>
                        <CategoriaProjeto categoria="Frontend"/>
                        <CategoriaProjeto categoria="Backend"/>
                    </div>
                <p>Jogo sério para o público infantil, onde os usuários terão alguns cenários para identificar locais, objetos ou ações que estejam ajudando na proliferação do mosquito aedes aegypti. O objetivo é educar sobre as práticas de prevenção contra a Dengue, mas de uma forma mais atrativa para o público infantil.</p>
                </div>
            
                <div className="project-langs">
                    <a data-tooltip="React"><FaReact/></a>
                    <a data-tooltip="VS Code"><VscVscode/></a>
                    <a data-tooltip="Npm"><FaNpm/></a>
                    <a data-tooltip="Expo"><SiExpo /></a>
                    <a data-tooltip="React Native"><FaReact/></a>
                </div>
            </div>
            </a>

            <a className="Mainproject-card" href="https://github.com/function404/splatgame_" target="_blank" rel="noopener noreferrer">
            <img src={SplatGamehome} alt="Projeto SplatGame"/>

            <div className="project-info">
                <div className="project-texts">
                    <h2>SplatGame</h2>
                    <div className="main-cat-proj">
                        <CategoriaProjeto categoria="Faculdade"/>
                        <CategoriaProjeto categoria="Mobile"/>
                        <CategoriaProjeto categoria="Frontend"/>
                        <CategoriaProjeto categoria="Backend"/>
                    </div>
                <p>Em Splat Game, os jogadores são desafiados a tocar em objetos que caem na tela para acumular a maior pontuação possível em diversas fases, cada uma com sua própria temática, como Gastronomia, Administração, Enfermagem e Análise e Desenvolvimento de Sistemas. A cada objeto tocado, pontos são somados e o nível de dificuldade aumenta.</p>
                </div>
            
                <div className="project-langs">
                    <a data-tooltip="React"><FaReact/></a>
                    <a data-tooltip="VS Code"><VscVscode/></a>
                    <a data-tooltip="Npm"><FaNpm/></a>
                    <a data-tooltip="Expo"><SiExpo /></a>
                    <a data-tooltip="React Native"><FaReact/></a>
                </div>
            </div>
            </a>
        </section>
    );
}

export default MainProjects;