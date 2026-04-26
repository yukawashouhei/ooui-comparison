export default function EmployeePanel({ employee, title }) {
  if (!employee) {
    return <section className="panel">表示する従業員がいません。</section>;
  }

  return (
    <section className="panel">
      <h3>{title}</h3>
      <dl className="kv-grid">
        <div>
          <dt>氏名</dt>
          <dd>{employee.name}</dd>
        </div>
        <div>
          <dt>部署</dt>
          <dd>{employee.dept}</dd>
        </div>
        <div>
          <dt>役職</dt>
          <dd>{employee.role}</dd>
        </div>
        <div>
          <dt>雇用形態</dt>
          <dd>{employee.contractType}</dd>
        </div>
        <div>
          <dt>在籍ステータス</dt>
          <dd>{employee.status}</dd>
        </div>
        <div>
          <dt>入社日</dt>
          <dd>{employee.startedAt}</dd>
        </div>
      </dl>

      <div className="meta-block">
        <h4>関連書類</h4>
        <ul>
          {employee.docs.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>

      <div className="meta-block">
        <h4>未対応タスク</h4>
        <ul>
          {employee.pendingTasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
