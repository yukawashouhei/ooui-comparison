export default function UsageGuide({ usageGuide }) {
  return (
    <section className="section">
      <h2>使い分けガイド</h2>
      <div className="guide-list">
        {usageGuide.map((item) => (
          <article key={item.caseName} className="guide-item">
            <h3>{item.caseName}</h3>
            <p>
              <strong>推奨:</strong> {item.recommendation}
            </p>
            <p>{item.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
