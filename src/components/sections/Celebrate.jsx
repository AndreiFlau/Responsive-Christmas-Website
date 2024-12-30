import celebrateMobile from "../../assets/imgs/celebrate/celebrate-mobile.png";
import celebrateDesktop from "../../assets/imgs/celebrate/celebrate-desktop.png";

function Celebrate() {
  return (
    <section className="celebrate" id="celebrate">
      <div className="text">
        <h2>Celebrate With A Lot Of Love</h2>
        <p>
          Make this holiday season unforgettable by spreading warmth and kindness to family, friends, and neighbors. Let's share
          blessings and create cherished memories together.
        </p>
        <button className="big-button" onClick={() => alert("Merry Christmas!")}>
          Send Good Wishes
        </button>
      </div>
      <picture>
        <source media="(min-width: 1024px)" srcSet={celebrateDesktop} type="image/png" />
        <img src={celebrateMobile} alt="fireplace" />
      </picture>
    </section>
  );
}

export default Celebrate;
