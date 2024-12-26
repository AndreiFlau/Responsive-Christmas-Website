import Celebrate from "./sections/Celebrate";
import Gift from "./sections/Gift";
import Giving from "./sections/Giving";
import Home from "./sections/Home";
import NewArrivals from "./sections/NewArrivals";

function Main() {
  return (
    <main>
      <Home />
      <Giving />
      <Celebrate />
      <Gift />
      <NewArrivals />
    </main>
  );
}

export default Main;
