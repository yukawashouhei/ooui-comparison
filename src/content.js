export const appMeta = {
  title: "人事労務管理",
  subtitle: "オペレーションセンター",
  description: "従業員情報、申請手続き、処理状況を一元管理します。",
};

export const modeOptions = [
  {
    id: "ooui",
    label: "従業員管理",
    summary: "一覧から対象を選択して詳細と操作を管理",
  },
  {
    id: "task",
    label: "手続き管理",
    summary: "申請手続きをステップ形式で処理",
  },
  {
    id: "bimodal",
    label: "統合運用",
    summary: "従業員管理と手続き処理を連携して運用",
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
    pendingTasks: ["2026年 年末調整未提出"],
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
    pendingTasks: ["入社情報更新チェック"],
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
    pendingTasks: ["復職面談日程の設定"],
  },
];

export const objectActions = [
  "部署変更",
  "契約更新",
  "書類発行",
  "年末調整リマインド送信",
];

export const taskFlowTemplates = [
  {
    id: "onboarding",
    title: "入社手続き",
    steps: ["基本情報", "必要書類", "最終確認", "完了"],
  },
  {
    id: "year-end",
    title: "年末調整",
    steps: ["本人情報", "控除入力", "確認", "提出完了"],
  },
];

export const defaultFormState = {
  employeeName: "",
  department: "人事部",
  procedureType: "入社手続き",
  needsDocs: true,
};
