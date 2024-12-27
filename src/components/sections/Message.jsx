import letterMobile from "../../assets/imgs/message/letter-mobile.png";
import letterDesktop from "../../assets/imgs/message/letter-desktop.png";

function Message() {
  return (
    <section className="message">
      <div className="message-container">
        <h2>Send Good Wishes!</h2>
        <form action="mailto:santaclause@northpole.com" method="post" encType="text/plain">
          <input type="text" id="message" placeholder="Write your message" />
          <button className="big-button-black">Send Message</button>
          <picture>
            <source media="(min-width: 1024px)" srcSet={letterDesktop} type="image/png" />
            <img src={letterMobile} alt="letter" />
          </picture>
        </form>
      </div>
    </section>
  );
}

export default Message;
