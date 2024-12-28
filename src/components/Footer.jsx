import googlePlay from "../assets/imgs/stores/google-play.png";
import appStore from "../assets/imgs/stores/app-store.svg";
import footer1 from "../assets/imgs/footer decoration/footer1.png";
import footer2 from "../assets/imgs/footer decoration/footer2.png";
import santaImg from "../assets/imgs/santa.png";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="footer-1">
          <div className="santa">
            <img src={santaImg} alt="santa" />
            <h4>Christmas</h4>
          </div>
          <p>This Christmas give a lot of love</p>
        </div>
        <div className="footer-2">
          <h3>Our Services</h3>
          <ul>
            <li>Pricing</li>
            <li>Discounts</li>
            <li>Shipping mode</li>
          </ul>
        </div>
        <div className="footer-3">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Support center</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-4">
          <h3>Available On</h3>
          <div className="stores">
            <img src={googlePlay} alt="google play" />
            <img src={appStore} alt="app store" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          <a href="https://www.figma.com/community/file/1260466205962818266">© Bedimcode.</a>{" "}
          <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>
        </p>
      </div>
      <img className="christmas-ball1" src={footer1} alt="Christmas balls" />
      <img className="christmas-ball2" src={footer2} alt="Christmas balls" />
    </footer>
  );
}

export default Footer;
