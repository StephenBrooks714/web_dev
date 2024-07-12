import Navbar from "./layouts/Navbar"
import HomeIntro from "./components/HomeIntro"
import Features from "./components/Features"
import WhyUs from "./components/WhyUs"
import Banner from "./components/Banner"
import Projects from "./components/Projects.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {

  return (
    <>
      <Navbar/>
      <HomeIntro/>
        <main className={"container my-5"}>
            <Features/>
            <WhyUs/>
        </main>
        <Banner/>
        <section className={"container"}>
            <Projects/>
        </section>
        <Footer/>
    </>
  )
}

export default App
