export default function ProjectCard({ title, desc, tags, link }) {
  return (
    <a className="card" href={link} target="_blank" rel="noreferrer">
      <div className="cardTop">
        <h3>{title}</h3>
        <p className="muted">{desc}</p>
      </div>

      <div className="tags">
        {tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </a>
  );
}