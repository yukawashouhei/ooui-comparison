import { useMemo, useState } from "react";
import EmployeePanel from "./EmployeePanel";
import WizardShell from "./WizardShell";

export default function BimodalDemo({ employees, template }) {
  const [selectedId, setSelectedId] = useState(employees[0]?.id ?? "");
  const [wizardOpen, setWizardOpen] = useState(false);
  const [step, setStep] = useState(0);

  const selectedEmployee = useMemo(
    () => employees.find((item) => item.id === selectedId) ?? employees[0],
    [employees, selectedId],
  );

  const closeWizard = () => {
    setWizardOpen(false);
    setStep(0);
  };

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
                <small>{employee.dept}</small>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="stack">
        <EmployeePanel employee={selectedEmployee} title="従業員詳細" />

        {!wizardOpen ? (
          <section className="panel">
            <h3>関連手続き</h3>
            <p>
              {selectedEmployee?.name} の年末調整申請を開始します。
            </p>
            <button type="button" className="primary" onClick={() => setWizardOpen(true)}>
              年末調整申請を開始
            </button>
          </section>
        ) : (
          <WizardShell
            title={`${template.title}申請`}
            steps={template.steps}
            currentStep={step}
            onPrev={() => setStep((prev) => Math.max(prev - 1, 0))}
            onNext={() => setStep((prev) => Math.min(prev + 1, template.steps.length - 1))}
            onReset={closeWizard}
          >
            {step < template.steps.length - 1 ? (
              <p className="event-log">
                {selectedEmployee?.name} の「{template.steps[step]}」を入力中です。
              </p>
            ) : (
              <div className="confirm-box">
                <p>申請が完了しました。従業員詳細へ戻ります。</p>
                <button type="button" onClick={closeWizard}>
                  従業員詳細へ戻る
                </button>
              </div>
            )}
          </WizardShell>
        )}
      </div>
    </section>
  );
}
