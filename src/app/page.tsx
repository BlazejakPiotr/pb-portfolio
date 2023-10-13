import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* header */}
      <Header />
      {/* about */}
      <About />
      {/* projects */}
      <Projects />
      {/* blogs */}
      <Contact />
      {/* footer */}
    </div>
  );
}
