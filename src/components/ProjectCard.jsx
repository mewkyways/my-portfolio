export default function ProjectCard({ title, desc, tags, demo, code }) {
  return (
    <div className="card">
      <div className="cardTop">
        <h3>{title}</h3>
        <p className="muted">{desc}</p>
      </div>

      <div className="tags">
        {tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>

      <div className="cardActions">
        <a className="btn small" href={demo} target="_blank" rel="noreferrer">Demo</a>
        <a className="btn small ghost" href={code} target="_blank" rel="noreferrer">Code</a>
      </div>
    </div>
  );
}