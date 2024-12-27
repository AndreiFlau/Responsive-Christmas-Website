import googlePlay from "../assets/imgs/stores/google-play.png";
import appStore from "../assets/imgs/stores/app-store.svg";
import santaImg from "../assets/imgs/santa.png";

function Footer() {
  return (
    <footer>
      <div className="footer-1">
        <img src={santaImg} alt="santa" />
        <h4>Christmas</h4>
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
        <img src={googlePlay} alt="google play" />
        <img src={appStore} alt="app store" />
      </div>
      <div className="copyright">
        <p>
          <a href="">© Bedimcode.</a> <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
