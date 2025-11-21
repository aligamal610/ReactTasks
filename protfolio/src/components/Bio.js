import Section from "./Section";

export default function Bio() {
  return (
    <Section id="bio" title="About Me">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p className="mb-3">
            Computer Engineering graduate and ITI graduate Full-Stack Developer with strong expertise in PHP (Laravel),
            JavaScript, and modern front-end frameworks such as React and Angular. Experienced in all phases of the
            Software Development Life Cycle (SDLC), developing, deploying, and maintaining scalable web applications with
            a focus on clean code, performance optimization, and user-friendly interfaces. Skilled in relational and non
            relational database design and optimization (MySQL, PostgreSQL,MongoDB, Firebase), integrating RESTful
            APIs, and implementing CI/CD pipelines (GitLab, GitHub Actions) for automated deployments. Proficient in
            Agile/Scrum methodologies and cloud deployment strategies, with hands-on experience delivering projects in fast-
            paced, collaborative environments. A proactive problem-solver with excellent analytical, communication, and
            time-management skills, dedicated to delivering high-quality, business-driven software solutions and continuously
            expanding technical expertise.
          </p>
          <p className="mb-0">
            Currently improving my skills in React, TypeScript, and modern UI
            libraries while building real-world projects and portfolios.
          </p>
        </div>
      </div>
    </Section>
  );
}
