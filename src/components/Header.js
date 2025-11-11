import logo from "../assets/logo.png";
import { GoGear } from "react-icons/go";
import { FaRegSun } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { isDarkMode, toggleTheme, Icon } = useContext(ThemeContext);

  return (
    <header>
      <img src={logo} className="logo" alt="Logo" />
      <div className="nav-links">
        <a href="#About">Início</a>
        <a href="#projects">Projetos</a>
        {/* <a>Contato</a> */}
      </div>
      
      <div className="header-icons">
        <a onClick={toggleTheme} title={isDarkMode ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}>
            <Icon />
        </a>
        <GoGear />
      </div>
    </header>
  );
}

export default Header;