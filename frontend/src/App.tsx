import Hero from "./sections/hero/Hero";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Projects from "./sections/projects/Projects";
import Timeline from "./sections/timeline/Timeline";

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero />
        <Projects />
        <Timeline />
      </main>
      <Footer></Footer>
    </>
  );
}
