export default function Hero({ hero }) {
  return (
    <header className="hero">
      <p className="badge">Web Sample</p>
      <h1>{hero.title}</h1>
      <p className="hero-description">{hero.description}</p>
      <p className="source-note">{hero.source}</p>
    </header>
  );
}
