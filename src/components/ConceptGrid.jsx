export default function ConceptGrid({ conceptCards }) {
  return (
    <section className="section">
      <h2>3つの概念</h2>
      <div className="card-grid">
        {conceptCards.map((card) => (
          <article key={card.name} className="card">
            <h3>{card.name}</h3>
            <p>
              <strong>操作順序:</strong> {card.order}
            </p>
            <p>
              <strong>目的:</strong> {card.purpose}
            </p>
            <p>
              <strong>向いている場面:</strong> {card.fit}
            </p>
            <p>
              <strong>注意点:</strong> {card.caution}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
