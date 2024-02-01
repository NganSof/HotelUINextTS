import About from "@/components/About";
import Featured from "@/components/Featured";
import Find from "@/components/Find";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Recommendation from "@/components/Recommendation";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recommendation />
      <Find />
      <Testimonials />
      <Footer />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
