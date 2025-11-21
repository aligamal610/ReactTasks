export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4 fade-in-up">
          {title}
        </h2>
        <div className="section-content fade-in-up-delayed">{children}</div>
      </div>
    </section>
  );
}
