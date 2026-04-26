import { useMemo, useState } from "react";
import EmployeePanel from "./EmployeePanel";

export default function OouiDemo({ employees, actions }) {
  const [selectedId, setSelectedId] = useState(employees[0]?.id ?? "");
  const [lastAction, setLastAction] = useState("操作履歴はありません");

  const selectedEmployee = useMemo(
    () => employees.find((item) => item.id === selectedId) ?? employees[0],
    [employees, selectedId],
  );

  return (
    <section className="demo-layout">
      <aside className="panel">
        <h3>従業員一覧</h3>
        <ul className="item-list">
          {employees.map((employee) => (
            <li key={employee.id}>
              <button
                type="button"
                className={selectedEmployee?.id === employee.id ? "item-button selected" : "item-button"}
                onClick={() => setSelectedId(employee.id)}
              >
                <span>{employee.name}</span>
                <small>
                  {employee.dept} / {employee.role}
                </small>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="stack">
        <EmployeePanel employee={selectedEmployee} title="従業員詳細" />
        <section className="panel">
          <h3>実行可能な処理</h3>
          <div className="action-row">
            {actions.map((action) => (
              <button
                type="button"
                key={action}
                onClick={() =>
                  setLastAction(`${selectedEmployee?.name ?? "該当従業員"}: 「${action}」を実行しました`)
                }
              >
                {action}
              </button>
            ))}
          </div>
          <p className="event-log">{lastAction}</p>
        </section>
      </div>
    </section>
  );
}
