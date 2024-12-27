import gift1 from "../../assets/imgs/gifts/gift1.png";
import gift2 from "../../assets/imgs/gifts/gift2.png";
import gift3 from "../../assets/imgs/gifts/gift3.png";
import gift4 from "../../assets/imgs/gifts/gift4.png";
import gift5 from "../../assets/imgs/gifts/gift5.png";
import FavoriteHeart from "../ui/FavoriteHeart";
import { useFavorites } from "../context/FavoritesContext";

function Gift() {
  return (
    <section className="gift" id="gift">
      <h2>Share A Gift</h2>
      <div className="items">
        <div>
          <FavoriteHeart itemName="Gingerbread" />
          <img src={gift1} alt="" />
          <h3>$15</h3>
          <p>Gingerbread</p>
        </div>
        <div>
          <FavoriteHeart itemName="Santa Claus Hat" />
          <img src={gift2} alt="" />
          <h3>$22</h3>
          <p>Santa Claus Hat</p>
        </div>
        <div>
          <FavoriteHeart itemName="Christmas Tree" />
          <img src={gift3} alt="" />
          <h3>$48</h3>
          <p>Christmas Tree</p>
        </div>
        <div>
          <FavoriteHeart itemName="Snowman" />
          <img src={gift4} alt="" />
          <h3>$35</h3>
          <p>Snowman</p>
        </div>
        <div>
          <FavoriteHeart itemName="Candy Stick" />
          <img src={gift5} alt="" />
          <h3>$12</h3>
          <p>Candy Stick</p>
        </div>
      </div>
    </section>
  );
}

export default Gift;
