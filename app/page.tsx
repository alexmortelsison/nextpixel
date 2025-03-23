import Hero from "./components/Hero";

import AboutPage from "./about/page";
import Testimonial from "./components/Testimonial";
import ContactPage from "./contact/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutPage />
      <Testimonial />
      <ContactPage />
      <Footer />
    </div>
  );
}
