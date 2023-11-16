import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

export default function Page() {
  return (
    <section className="bg-bg-thorium text-gray-50">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </section>
  );
}
