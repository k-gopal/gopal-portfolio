import Header from "./components/header/Header";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
