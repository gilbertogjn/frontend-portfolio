import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
