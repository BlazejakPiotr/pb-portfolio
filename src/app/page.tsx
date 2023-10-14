import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className=" space-y-20">
      {/* header */}

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
