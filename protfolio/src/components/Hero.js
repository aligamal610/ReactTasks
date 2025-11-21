export default function Hero() {
  return (
    <header id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-md-7 fade-in-left">
            <p className="text-uppercase small mb-2 text-accent">
              Fullstack Developer & React Enthusiast
            </p>
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-accent">Ali Gamal Abdullah</span>
            </h1>
            <p className="lead mb-4">
             Computer Engineering & ITI Full-Stack Developer specializing in PHP (Laravel), JavaScript, and modern front-end frameworks like React and Angular.
             Experienced across the full SDLC building scalable, high-performance web apps, integrating RESTful APIs, and working with SQL/NoSQL databases using Agile and CI/CD practices.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/drive/folders/17RIjO51z52bsd9GOr5tPiJan6YFd7_0p"
                className="btn btn-outline-light btn-lg"
                target="_blank">
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Me
              </a>
            </div>

            <div className="mt-4 social-icons">
               <a
              href="https://github.com/aligamal610"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-gamal-abdallah-a517b4251/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://x.com/12alidawood"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-5 text-center fade-in-right-delay">
            <div className="hero-image-wrapper">
              <img
                src="/علي.jpeg"
                alt="Profile"
                className="img-fluid rounded-3 hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
