import Header from "./components/Header";
import Hero from "./components/Hero";
import ImgCards from "./components/ImgCards";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
import Agents from "./components/Agents";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactComponent";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Hero />

        <CallToAction />
        <About />
        <ContactSection />
        <ImgCards />
        <Agents />
        <Footer />
      </div>
    </>
  );
}

export default App;
