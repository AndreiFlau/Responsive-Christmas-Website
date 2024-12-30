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
          <p>Let's make this Christmas extra special with lots of love</p>
        </div>
        <div className="footer-2">
          <h3>Our Services</h3>
          <ul>
            <a>
              <li>Pricing</li>
            </a>
            <a>
              <li>Discounts</li>
            </a>
            <a>
              <li>Shipping mode</li>
            </a>
          </ul>
        </div>
        <div className="footer-3">
          <h3>Support</h3>
          <ul>
            <a>
              <li>FAQs</li>
            </a>
            <a>
              <li>Support center</li>
            </a>
            <a>
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="footer-4">
          <h3>Available On</h3>
          <div className="stores">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={googlePlay} alt="google play" />
            </a>
            <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="app store" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          <a href="https://www.figma.com/community/file/1260466205962818266" target="_blank" rel="noopener noreferrer">
            © Bedimcode.
          </a>{" "}
          <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="noopener noreferrer">
            CC BY 4.0
          </a>
        </p>
      </div>
      <img className="christmas-ball1" src={footer1} alt="Christmas balls" />
      <img className="christmas-ball2" src={footer2} alt="Christmas balls" />
    </footer>
  );
}

export default Footer;
