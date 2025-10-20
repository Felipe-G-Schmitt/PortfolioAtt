const CategoriaProjeto = ({ categoria }) => {
    let backgroundColor = "";

    if (categoria === "Faculdade") {
        backgroundColor = "#6448ff";
    } else if (categoria === "Ensino Médio") {
        backgroundColor = "#ff4747";
    } else if (categoria === "Mobile") {
        backgroundColor = "#4769ffff";
    } else if (categoria === "Web") {
        backgroundColor = "#1aa131ff";
    } else if (categoria === "Backend") {
        backgroundColor = "#ddcd3bff";
    } else if (categoria === "Frontend") {
        backgroundColor = "#961aa1ff";
    } else {
        backgroundColor = "#dcdcdc";
    }

return (
    <div className="cat-proj" style={{ backgroundColor }}>
      <p>{categoria}</p>
    </div>
  );
};

export default CategoriaProjeto;