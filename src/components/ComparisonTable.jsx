export default function ComparisonTable({ comparisonRows }) {
  return (
    <section className="section">
      <h2>比較テーブル</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>観点</th>
              <th>OOUI</th>
              <th>タスク思考UI</th>
              <th>バイモーダルUI</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.axis}>
                <th scope="row">{row.axis}</th>
                <td>{row.ooui}</td>
                <td>{row.task}</td>
                <td>{row.bimodal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
