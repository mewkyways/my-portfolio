<<<<<<< HEAD
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="sectionHead">
          <h2>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
=======
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="sectionHead">
          <h2>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
>>>>>>> feb408c4ecae0c47b9128cb8550334bbde0fee31
}