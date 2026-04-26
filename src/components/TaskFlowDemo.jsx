import { useState } from "react";
import WizardShell from "./WizardShell";

function StepContent({ stepIndex, formState, setFormState }) {
  if (stepIndex === 0) {
    return (
      <div className="form-grid">
        <label>
          対象従業員名
          <input
            value={formState.employeeName}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, employeeName: event.target.value }))
            }
            placeholder="例: 山田 花子"
          />
        </label>
        <label>
          手続き種別
          <select
            value={formState.procedureType}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, procedureType: event.target.value }))
            }
          >
            <option>入社手続き</option>
            <option>年末調整</option>
            <option>雇用契約更新</option>
          </select>
        </label>
      </div>
    );
  }

  if (stepIndex === 1) {
    return (
      <div className="form-grid">
        <label>
          所属部署
          <select
            value={formState.department}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, department: event.target.value }))
            }
          >
            <option>人事部</option>
            <option>営業部</option>
            <option>開発部</option>
          </select>
        </label>
        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={formState.needsDocs}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, needsDocs: event.target.checked }))
            }
          />
          添付書類チェックを有効にする
        </label>
      </div>
    );
  }

  if (stepIndex === 2) {
    return (
      <div className="confirm-box">
        <p>以下の内容で手続きを進めます。</p>
        <ul>
          <li>対象: {formState.employeeName || "未入力"}</li>
          <li>手続き種別: {formState.procedureType}</li>
          <li>部署: {formState.department}</li>
          <li>添付確認: {formState.needsDocs ? "必要" : "不要"}</li>
        </ul>
      </div>
    );
  }

  return <p className="done-message">申請を受け付けました。処理状況に反映されています。</p>;
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
      title={`${template.title}申請`}
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
