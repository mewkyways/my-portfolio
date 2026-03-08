export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span className="muted">© {new Date().getFullYear()} MyPortfolio</span>
        <span className="muted">Built with React</span>
      </div>
    </footer>
  );
}
