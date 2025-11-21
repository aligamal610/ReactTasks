import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <p className="mb-3">
            Feel free to reach out for collaboration, job opportunities, or just
            to say hi 👋
          </p>

          <p className="mb-4">
            <a
              href="mailto:12alidawood@gmail.com"
              className="text-accent text-decoration-none"
            >
              12alidawood@gmail.com
            </a>
          </p>

          <div className="social-icons justify-content-center">
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
      </div>
    </Section>
  );
}
