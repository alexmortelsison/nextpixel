import Hero from "./components/Hero";

import AboutPage from "./about/page";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutPage />
      <Testimonial />
    </div>
  );
}
