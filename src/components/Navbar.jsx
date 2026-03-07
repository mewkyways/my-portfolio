export default function Navbar() {
  return (
    <header className="nav">
      <div className="container navInner">
        <div className="brand">MyPortfolio</div>
        <nav className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}