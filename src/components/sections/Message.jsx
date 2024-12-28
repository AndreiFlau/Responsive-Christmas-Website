import letterMobile from "../../assets/imgs/message/letter-mobile.png";
import letterDesktop from "../../assets/imgs/message/letter-desktop.png";

function Message() {
  return (
    <section className="message">
      <div className="message-container">
        <form action="mailto:santaclause@northpole.com" method="post" encType="text/plain">
          <h2>Send Good Wishes!</h2>
          <input type="text" id="message" placeholder="Write your message" />
          <button className="big-button-black">Send Message</button>
        </form>
        <picture>
          <source media="(min-width: 1024px)" srcSet={letterDesktop} type="image/png" />
          <img src={letterMobile} alt="letter" />
        </picture>
      </div>
    </section>
  );
}

export default Message;
