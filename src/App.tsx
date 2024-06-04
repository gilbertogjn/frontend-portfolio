import About from "./components/About";
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
    </>
  );
}

export default App;
