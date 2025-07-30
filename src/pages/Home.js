import profile from "../assets/profile.png";

function Home() {
  return (
    <section class="About">
      {/*<img src={profile} alt="profile picture" class="profile" >*/}
      <div className="image-wrapper">
        <img src={profile} alt="profile picture" class="profile"/>
        <div className="image-overlay"></div>
      </div>
      <div class=".image-gradient" />
      <h1>Felipe Schmitt</h1>
      <p>Desenvolvedor Front-end</p>
    </section>
  );
}

export default Home;
