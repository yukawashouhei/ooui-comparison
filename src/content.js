export const appMeta = {
  title: "人事労務管理",
  subtitle: "オペレーションセンター",
  description: "従業員情報、申請手続き、処理状況を一元管理します。",
};

export const modeOptions = [
  {
    id: "ooui",
    label: "OOUI（従業員管理）",
    summary: "従業員を選択して部署変更を実行",
  },
  {
    id: "task",
    label: "タスク志向UI（手続き管理）",
    summary: "部署変更を手順に沿って処理",
  },
  {
    id: "bimodal",
    label: "バイモーダルUI（統合運用）",
    summary: "一覧操作と手順処理を組み合わせて完了",
  },
];

export const employeeRecords = [
  {
    id: "emp-001",
    name: "山田 花子",
    dept: "人事部",
    role: "採用担当",
    status: "在職中",
    contractType: "正社員",
    startedAt: "2022-04-01",
    docs: ["雇用契約書", "扶養控除等申告書"],
    pendingTasks: ["部署変更申請の承認待ち"],
  },
  {
    id: "emp-002",
    name: "佐藤 太郎",
    dept: "営業部",
    role: "アカウントマネージャー",
    status: "在職中",
    contractType: "正社員",
    startedAt: "2021-10-01",
    docs: ["雇用契約書", "評価シート 2025"],
    pendingTasks: ["部署変更差分の確認待ち"],
  },
  {
    id: "emp-003",
    name: "鈴木 一郎",
    dept: "開発部",
    role: "エンジニア",
    status: "休職中",
    contractType: "正社員",
    startedAt: "2020-07-15",
    docs: ["雇用契約書", "休職届"],
    pendingTasks: ["部署変更対象の最終確認"],
  },
];

export const objectActions = [
  "部署変更を保存",
];

export const taskFlowTemplates = [
  {
    id: "dept-change-task",
    title: "部署変更フロー",
    steps: ["対象確認", "新部署選択", "変更内容確認", "完了"],
  },
  {
    id: "dept-change-bimodal",
    title: "部署変更フロー",
    steps: ["対象確認", "新部署選択", "変更内容確認", "完了"],
  },
];

export const defaultFormState = {
  employeeName: "",
  currentDepartment: "人事部",
  newDepartment: "営業部",
};
