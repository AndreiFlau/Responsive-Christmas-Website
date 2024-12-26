import gift1 from "../../assets/imgs/new-gifts/new-gift1.png";
import gift2 from "../../assets/imgs/new-gifts/new-gift2.png";
import gift3 from "../../assets/imgs/new-gifts/new-gift3.png";
import gift4 from "../../assets/imgs/new-gifts/new-gift4.png";
import Carousel from "../ui/Carousel";

function NewArrivals() {
  const slides = [
    {
      id: 1,
      content: (
        <div className="rectangle">
          <img src={gift1} alt="toy reindeer" />
          <h2>$95</h2>
          <p>Reindeer</p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="rectangle">
          <img src={gift2} alt="snow globe" />
          <h2>$20</h2>
          <p>Snow Globe</p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="rectangle">
          <img src={gift3} alt="toy sledge" />
          <h2>$75</h2>
          <p>Sledge</p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="rectangle">
          <img src={gift4} alt="Christmas wreath" />
          <h2>$18</h2>
          <p>Christmas Wreath</p>
        </div>
      ),
    },
  ];
  return (
    <section className="new-arrivals" id="new">
      <h2>New Gifts</h2>
      <Carousel items={slides} />
    </section>
  );
}

export default NewArrivals;
