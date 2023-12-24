import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Feature";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
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
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
