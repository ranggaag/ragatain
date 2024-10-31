import Hero from './component/Hero';
import About from './component/About';
import Header from "./component/Header";
import Feature from './component/Feature';
import Testimonial from './component/Testimonial';

function App() {
  return (
    <div className="bg-[#ECF0F1]">
      <Header />
      <Hero />
      <About />
      <Feature />
      <Testimonial />
    </div>
  );
}

export default App;
