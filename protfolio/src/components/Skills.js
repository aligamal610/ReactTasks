import Section from "./Section";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS / SCSS", level: 85 },
  { name: "JavaScript (ES6+)", level: 80 },
  { name: "React", level: 70 },
  { name: "ِAngular", level: 80 },
  { name: "Nodejs", level: 80 },
  { name: "Bootstrap", level: 75 },
  { name: "php", level: 80 },
  { name: "Laravel", level: 80 },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {skills.map((skill) => (
            <div className="mb-3" key={skill.name}>
              <div className="d-flex justify-content-between mb-1">
                <span>{skill.name}</span>
                <span className="text-accent">{skill.level}%</span>
              </div>
              <div className="progress skill-progress">
                <div
                  className="progress-bar bg-accent"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
