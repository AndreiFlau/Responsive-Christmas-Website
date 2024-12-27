import gift1 from "../../assets/imgs/new-gifts/new-gift1.png";
import gift2 from "../../assets/imgs/new-gifts/new-gift2.png";
import gift3 from "../../assets/imgs/new-gifts/new-gift3.png";
import gift4 from "../../assets/imgs/new-gifts/new-gift4.png";
import Carousel from "../ui/Carousel";
import FavoriteHeart from "../ui/FavoriteHeart";

function NewArrivals() {
  const slides = [
    {
      id: 1,
      content: (
        <>
          <div className="image-container">
            <img src={gift1} alt="toy reindeer" />
          </div>
          <h2>$95</h2>
          <p>Reindeer</p>
          <div className="heart-box">
            <FavoriteHeart key={1} itemName="Reindeer" />
          </div>
        </>
      ),
      name: "Reindeer",
    },
    {
      id: 2,
      content: (
        <>
          <div className="image-container">
            <img src={gift2} alt="snow globe" />
          </div>
          <h2>$20</h2>
          <p>Snow Globe</p>
          <div className="heart-box">
            <FavoriteHeart key={2} itemName="Snow Globe" />
          </div>
        </>
      ),
      name: "Snow Globe",
    },
    {
      id: 3,
      content: (
        <>
          <div className="image-container">
            <img src={gift3} alt="toy sledge" />
          </div>
          <h2>$75</h2>
          <p>Sledge</p>
          <div className="heart-box">
            <FavoriteHeart key={3} itemName="Sledge" />
          </div>
        </>
      ),
      name: "Sledge",
    },
    {
      id: 4,
      content: (
        <>
          <div className="image-container">
            <img src={gift4} alt="Christmas wreath" />
          </div>
          <h2>$18</h2>
          <p>Christmas Wreath</p>
          <div className="heart-box">
            <FavoriteHeart key={4} itemName="Christmas Wreath" />
          </div>
        </>
      ),
      name: "Christmas Wreath",
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
