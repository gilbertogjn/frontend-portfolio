import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Experience />
    </>
  );
}

export default App;
