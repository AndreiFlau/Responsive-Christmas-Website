import santaMobile from "../../assets/imgs/home-mobile.png";
import santaDesktop from "../../assets/imgs/home-desktop.png";

function Home() {
  return (
    <section className="home" id="home">
      <picture>
        <source media="(min-width: 1024px)" srcSet={santaDesktop} type="image/png" />
        <img src={santaMobile} alt="Santa Claus adjusting a Christmas tree" />
      </picture>
      <div className="text">
        <h2>Merry Christmas and Happy New Year!</h2>
        <p>Join us in making this Christmas season magical as we welcome the New Year with hope and cheer.</p>
        <a className="big-button" href="#celebrate">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Home;
