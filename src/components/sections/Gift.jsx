import { useEffect, useState } from "react";
import gift1 from "../../assets/imgs/gifts/gift1.png";
import gift2 from "../../assets/imgs/gifts/gift2.png";
import gift3 from "../../assets/imgs/gifts/gift3.png";
import gift4 from "../../assets/imgs/gifts/gift4.png";
import gift5 from "../../assets/imgs/gifts/gift5.png";
import FavoriteHeart from "../ui/Heart";

function Gift() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") || {});
  });

  function handleFavorite(itemName) {
    setFavorites((prev) => {
      return {
        ...prev,
        [itemName]: !prev[itemName],
      };
    });
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <section className="gift" id="gift">
      <h2>Share A Gift</h2>
      <div className="items">
        <div>
          <FavoriteHeart isFavorite={favorites["Gingerbread"]} onToggle={() => handleFavorite("Gingerbread")} />
          <img src={gift1} alt="" />
          <h3>$15</h3>
          <p>Gingerbread</p>
        </div>
        <div>
          <FavoriteHeart isFavorite={favorites["Santa Claus Hat"]} onToggle={() => handleFavorite("Santa Claus Hat")} />
          <img src={gift2} alt="" />
          <h3>$22</h3>
          <p>Santa Claus Hat</p>
        </div>
        <div>
          <FavoriteHeart isFavorite={favorites["Christmas Tree"]} onToggle={() => handleFavorite("Christmas Tree")} />
          <img src={gift3} alt="" />
          <h3>$48</h3>
          <p>Christmas Tree</p>
        </div>
        <div>
          <FavoriteHeart isFavorite={favorites["Snowman"]} onToggle={() => handleFavorite("Snowman")} />
          <img src={gift4} alt="" />
          <h3>$35</h3>
          <p>Snowman</p>
        </div>
        <div>
          <FavoriteHeart isFavorite={favorites["Candy Stick"]} onToggle={() => handleFavorite("Candy Stick")} />
          <img src={gift5} alt="" />
          <h3>$12</h3>
          <p>Candy Stick</p>
        </div>
      </div>
    </section>
  );
}

export default Gift;
