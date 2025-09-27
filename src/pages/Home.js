import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
    <About />
    <Skills />

    <section className="MainSec-projects">
      <h1>Projetos em destaque</h1>
    </section>

    <Projects />
    </>
  );
}

export default Home;
