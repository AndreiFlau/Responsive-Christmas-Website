import giving1 from "../../assets/imgs/giving/giving1.png";
import giving2 from "../../assets/imgs/giving/giving2.png";
import giving3 from "../../assets/imgs/giving/giving3.png";

function Giving() {
  return (
    <section className="giving">
      <h2>Start Giving This Christmas</h2>
      <div className="images">
        <div className="giving-1">
          <img src={giving1} alt="a wrapped present" />
          <h3>Surprise gifts</h3>
          <p>Carefully chosen gifts for your loved ones</p>
        </div>
        <div className="giving-2">
          <img src={giving2} alt="Christmas bells" />
          <h3>Ornaments</h3>
          <p>Give a moment to decorate</p>
        </div>
        <div className="giving-3">
          <img src={giving3} alt="sock with gifs inside" />
          <h3>Lots of love</h3>
          <p>Give away feelings that last forever</p>
        </div>
      </div>
    </section>
  );
}

export default Giving;
