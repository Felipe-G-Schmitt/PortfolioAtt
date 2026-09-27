import logo from "../assets/logo.png";
import { IoMdArrowDropright } from "react-icons/io";

function Header() {
  return (
    <header>
      <img src={logo} class="logo" alt="Logo" />
      <div class="nav-links">
        <a href="#About"> <IoMdArrowDropright size={30}/> Início</a>
        
        <a href="#projects"> <IoMdArrowDropright size={30}/> Projetos</a>
        {/* <a>Contato</a> */}
      </div>
    </header>
  );
}

export default Header;
