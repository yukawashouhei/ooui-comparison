export default function ModeSwitcher({ options, activeMode, onChange }) {
  return (
    <div className="mode-switcher" role="tablist" aria-label="UIモード切替">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="tab"
          aria-selected={activeMode === option.id}
          className={activeMode === option.id ? "mode-button active" : "mode-button"}
          onClick={() => onChange(option.id)}
        >
          <span className="mode-label">{option.label}</span>
          <span className="mode-summary">{option.summary}</span>
        </button>
      ))}
    </div>
  );
}
