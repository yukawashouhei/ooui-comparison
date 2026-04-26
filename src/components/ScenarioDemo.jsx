import { useMemo, useState } from "react";

function ScenarioPanel({ scenario }) {
  return (
    <div className="demo-panel">
      <h3>{scenario.title}</h3>
      <ol>
        {scenario.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="action-row">
        {scenario.sampleActions.map((action) => (
          <button type="button" key={action}>
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ScenarioDemo({ scenarios }) {
  const [activeKey, setActiveKey] = useState(scenarios[0]?.key ?? "");
  const activeScenario = useMemo(
    () => scenarios.find((item) => item.key === activeKey) ?? scenarios[0],
    [activeKey, scenarios],
  );

  return (
    <section className="section">
      <h2>操作イメージ</h2>
      <p className="section-note">
        タブを切り替えると、各UI思想での業務フローの見え方を比較できます。
      </p>
      <div className="tab-list" role="tablist" aria-label="UI思想切替">
        {scenarios.map((scenario) => (
          <button
            key={scenario.key}
            type="button"
            role="tab"
            aria-selected={scenario.key === activeScenario.key}
            className={scenario.key === activeScenario.key ? "active" : ""}
            onClick={() => setActiveKey(scenario.key)}
          >
            {scenario.title.replace(": ", " / ")}
          </button>
        ))}
      </div>
      {activeScenario ? <ScenarioPanel scenario={activeScenario} /> : null}
    </section>
  );
}
