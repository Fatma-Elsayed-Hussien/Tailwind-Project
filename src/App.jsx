import Carousel from "./Components/Carousel";
import AnimatedNumCounter from "./Components/AnimatedNumCounter";
import Projects from "./Components/ProjectsSection/Projects";
import Services from "./Components/ServicesSection/Services";
import Team from "./Components/TeamSection/Team";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel autoSlide={true}>
        <img src="https://themewagon.github.io/gardener/img/carousel-1.jpg" className="object-cover w-full h-auto" />
        <img src="https://themewagon.github.io/gardener/img/carousel-2.jpg" className="object-cover w-full h-auto" />
      </Carousel>
      
      <AnimatedNumCounter />
      <div className="container mx-auto px-4 flex justify-center items-center py-10 mb-auto flex-col">
        <Services />
        <Projects />
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;
