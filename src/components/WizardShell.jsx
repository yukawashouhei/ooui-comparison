export default function WizardShell({
  title,
  steps,
  currentStep,
  onPrev,
  onNext,
  onReset,
  children,
}) {
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  return (
    <section className="panel">
      <h3>{title}</h3>
      <ol className="stepper">
        {steps.map((step, index) => (
          <li
            key={step}
            className={
              index === currentStep
                ? "step-item current"
                : index < currentStep
                  ? "step-item done"
                  : "step-item"
            }
          >
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="wizard-body">{children}</div>

      <div className="wizard-footer">
        <button type="button" onClick={onPrev} disabled={isFirst}>
          戻る
        </button>
        {!isLast ? (
          <button type="button" className="primary" onClick={onNext}>
            次へ
          </button>
        ) : (
          <button type="button" className="primary" onClick={onReset}>
            最初からやり直す
          </button>
        )}
      </div>
    </section>
  );
}
