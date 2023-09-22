import Benefits from "./scenes/benefits/Benefits";
import Cotice from "./scenes/cotice/Cotice";
import Footer from "./scenes/footer/Footer";
import Home from "./scenes/home/Home";
import Nav from "./scenes/navbar/Nav";
import NewEvents from "./scenes/newEvents/NewEvents";
import Questions from "./scenes/questions/Questions";
import Sponsor from "./scenes/sponsor/Sponsor";
import Testimonial from "./scenes/testimonials/Testimonial";

const App = () => {
  return (
    <div className="bg-gray-20">
      <Nav />
      <Home />
      <Sponsor />
      <Benefits />
      <Testimonial />
      <NewEvents />
      <Questions />
      <Cotice />
      <Footer />
    </div>
  );
};

export default App;
