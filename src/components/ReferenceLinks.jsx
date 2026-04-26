export default function ReferenceLinks({ references }) {
  return (
    <section className="section">
      <h2>参考リンク</h2>
      <ul className="reference-list">
        {references.map((item) => (
          <li key={item.url}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
