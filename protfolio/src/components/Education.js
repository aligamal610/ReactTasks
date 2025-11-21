import Section from "./Section";

const education = [
  {
    degree: "B.Sc. in Computer Engineering",
    place: "Modern academy",
    years: "2022 - 2023",
    details: "Focused on software engineering, web development, and UI/UX.",
  },
  {
    degree: "ITI graduate Full-Stack Developer with strong expertise in PHP (Laravel),",
    place: " regular government Platforms",
    years: "2025",
    details: "Html5,css3,javascript,react,angular, responsive design , nodejs, express , php , laravel...",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="row justify-content-center">
        {education.map((item) => (
          <div className="col-md-6 mb-3" key={item.degree}>
            <div className="edu-card p-3 rounded-3">
              <h5 className="mb-1">{item.degree}</h5>
              <p className="mb-1 text-accent">{item.place}</p>
              <p className="mb-2 small text-muted">{item.years}</p>
              <p className="mb-0">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
