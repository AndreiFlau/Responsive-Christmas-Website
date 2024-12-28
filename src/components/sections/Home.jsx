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
        <p>Christmas and a new year is about to begin, all good wishes and successes.</p>
        <button className="big-button">Get Started</button>
      </div>
    </section>
  );
}

export default Home;
