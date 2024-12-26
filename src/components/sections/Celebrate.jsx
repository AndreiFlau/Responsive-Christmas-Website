import celebrateMobile from "../../assets/imgs/celebrate/celebrate-mobile.png";
import celebrateDesktop from "../../assets/imgs/celebrate/celebrate-desktop.png";

function Celebrate() {
  return (
    <section className="celebrate" id="celebrate">
      <h2>Celebrate With A Lot Of Love</h2>
      <p>
        In this holidays, celebrate with much love and peace, offering many blessings to our loved ones, friends and neighbors,
        wishing them a good Christmas message.
      </p>
      <button className="big-button" onClick={() => alert("Merry Christmas!")}>
        Send Good Wishes
      </button>
      <picture>
        <source media="(min-width: 1024px)" srcSet={celebrateDesktop} type="image/png" />
        <img src={celebrateMobile} alt="fireplace" />
      </picture>
    </section>
  );
}

export default Celebrate;
