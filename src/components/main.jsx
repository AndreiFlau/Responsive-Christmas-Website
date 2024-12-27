import Celebrate from "./sections/Celebrate";
import Gift from "./sections/Gift";
import Giving from "./sections/Giving";
import Home from "./sections/Home";
import Message from "./sections/Message";
import NewArrivals from "./sections/NewArrivals";

function Main() {
  return (
    <main>
      <Home />
      <Giving />
      <Celebrate />
      <Gift />
      <NewArrivals />
      <Message />
    </main>
  );
}

export default Main;
