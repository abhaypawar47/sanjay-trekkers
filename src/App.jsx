import GlassNavbar from "./components/common/GlassNavbar";
import Hero from "./components/sections/Hero";
import Activities from "./components/sections/Activities";
import Features from "./components/sections/Features";
import CampInfo from "./components/sections/CampInfo";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <GlassNavbar />
      <main>
        <Hero /> <hr />
        <Activities /> <hr />
        <Features /> <hr />
        <CampInfo /> <hr />
        <Pricing /> <hr />
      </main>{" "}
      <hr />
      <Footer />
    </>
  );
}

export default App;
