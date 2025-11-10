import logo from "../assets/logo.png";
import { GoGear } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

function Header() {
  return (
    <header>
      <img src={logo} class="logo" alt="Logo" />
      <div class="nav-links">
        <a href="#About">Início</a>
        <a href="#projects">Projetos</a>
        {/* <a>Contato</a> */}
      </div>
      
      <div class="header-icons">
        <FaRegMoon />
        <GoGear />
      </div>
    </header>
  );
}

export default Header;
