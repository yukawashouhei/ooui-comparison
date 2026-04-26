import { useState } from "react";
import WizardShell from "./WizardShell";

function StepContent({ stepIndex, formState, setFormState }) {
  if (stepIndex === 0) {
    return (
      <div className="form-grid">
        <label>
          対象従業員
          <input
            value={formState.employeeName}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, employeeName: event.target.value }))
            }
            placeholder="例: 山田 花子"
          />
        </label>
        <label>
          現在の部署
          <input value={formState.currentDepartment} readOnly />
        </label>
      </div>
    );
  }

  if (stepIndex === 1) {
    return (
      <div className="form-grid">
        <label>
          変更後の部署
          <select
            value={formState.newDepartment}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, newDepartment: event.target.value }))
            }
          >
            <option>人事部</option>
            <option>営業部</option>
            <option>開発部</option>
            <option>経営企画部</option>
          </select>
        </label>
      </div>
    );
  }

  if (stepIndex === 2) {
    return (
      <div className="confirm-box">
        <p>以下の内容で部署変更を反映します。</p>
        <ul>
          <li>対象従業員: {formState.employeeName || "未入力"}</li>
          <li>変更前部署: {formState.currentDepartment}</li>
          <li>変更後部署: {formState.newDepartment}</li>
        </ul>
      </div>
    );
  }

  return <p className="done-message">部署変更が完了しました。従業員情報に反映済みです。</p>;
}

export default function TaskFlowDemo({ template, initialFormState }) {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState(initialFormState);

  const goPrev = () => setStep((prev) => Math.max(prev - 1, 0));
  const goNext = () => setStep((prev) => Math.min(prev + 1, template.steps.length - 1));
  const reset = () => {
    setStep(0);
    setFormState(initialFormState);
  };

  return (
    <WizardShell
      title={template.title}
      steps={template.steps}
      currentStep={step}
      onPrev={goPrev}
      onNext={goNext}
      onReset={reset}
    >
      <StepContent stepIndex={step} formState={formState} setFormState={setFormState} />
    </WizardShell>
  );
}
