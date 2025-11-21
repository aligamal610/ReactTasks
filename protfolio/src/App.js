import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app bg-dark text-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top blur-bg">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#hero">
            Fullstack Developer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#bio">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* call section */}
      <Hero />
      <Bio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
