import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="container mx-auto space-y-20">
      {/* header */}
      <Header />
      {/* about */}
      <About />
      {/* projects */}
      <Projects />
      {/* blogs */}
      {/* contact */}
      {/* footer */}
    </div>
  );
}
