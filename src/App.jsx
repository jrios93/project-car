import Home from "./scenes/home/Home";
import Nav from "./scenes/navbar/Nav";
import Sponsor from "./scenes/sponsor/Sponsor";
import Testimonial from "./scenes/testimonials/Testimonial";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Sponsor />
      <Testimonial />
    </>
  );
};

export default App;
