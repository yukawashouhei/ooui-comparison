import { useState } from "react";
import {
  appMeta,
  defaultFormState,
  employeeRecords,
  modeOptions,
  objectActions,
  taskFlowTemplates,
} from "./content";
import BimodalDemo from "./components/BimodalDemo";
import ModeSwitcher from "./components/ModeSwitcher";
import OouiDemo from "./components/OouiDemo";
import TaskFlowDemo from "./components/TaskFlowDemo";

export default function App() {
  const [activeMode, setActiveMode] = useState("ooui");
  const onboardingTemplate = taskFlowTemplates[0];
  const yearEndTemplate = taskFlowTemplates[1];

  const renderDemo = () => {
    if (activeMode === "ooui") {
      return <OouiDemo employees={employeeRecords} actions={objectActions} />;
    }

    if (activeMode === "task") {
      return <TaskFlowDemo template={onboardingTemplate} initialFormState={defaultFormState} />;
    }

    return <BimodalDemo employees={employeeRecords} template={yearEndTemplate} />;
  };

  return (
    <main className="container">
      <header className="app-header">
        <h1>{appMeta.title}</h1>
        <p className="subtitle">{appMeta.subtitle}</p>
      </header>

      <ModeSwitcher options={modeOptions} activeMode={activeMode} onChange={setActiveMode} />
      {renderDemo()}
    </main>
  );
}
