export const boards = [
  {
    id: 1,
    name: "Platform Launch",
  },
  {
    id: 2,
    name: "Marketing Plan",
  },
  {
    id: 3,
    name: "Roadmap",
  },
];

export const columns = [
  {
    id: 11,
    name: "Todo",
    boardId: 1,
    order: 1,
  },
  {
    id: 12,
    name: "Doing",
    boardId: 1,
    order: 2,
  },
  {
    id: 13,
    name: "Done",
    boardId: 1,
    order: 3,
  },
  {
    id: 14,
    name: "Todo",
    boardId: 2,
    order: 1,
  },
  {
    id: 15,
    name: "Doing",
    boardId: 2,
    order: 2,
  },
  {
    id: 16,
    name: "Done",
    boardId: 2,
    order: 3,
  },
  {
    id: 17,
    name: "Now",
    boardId: 3,
    order: 1,
  },
  {
    id: 18,
    name: "Next",
    boardId: 3,
    order: 2,
  },
  {
    id: 19,
    name: "Later",
    boardId: 3,
    order: 3,
  },
];

export const tasks = [
  {
    id: 111,
    title: "Build UI for onboarding flow",
    description: "",
    status: "Todo",
    columnId: 11,
    order: 1,
  },
  {
    id: 112,
    title: "Build UI for search",
    description: "",
    status: "Todo",
    columnId: 11,
    order: 2,
  },
  {
    id: 113,
    title: "Build settings UI",
    description: "",
    status: "Todo",
    columnId: 11,
    order: 3,
  },
  {
    id: 114,
    title: "QA and test all major user journeys",
    description:
      "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
    status: "Todo",
    columnId: 11,
    order: 4,
  },
  {
    id: 121,
    title: "Design settings and search pages",
    description: "",
    status: "Doing",
    columnId: 12,
    order: 1,
  },
  {
    id: 122,
    title: "Add account management endpoints",
    description: "",
    status: "Doing",
    columnId: 12,
    order: 2,
  },
  {
    id: 123,
    title: "Design onboarding flow",
    description: "",
    status: "Doing",
    columnId: 12,
    order: 3,
  },
  {
    id: 124,
    title: "Add search endpoints",
    description: "",
    status: "Doing",
    columnId: 12,
    order: 4,
  },
  {
    id: 125,
    title: "Add authentication endpoints",
    description: "",
    status: "Doing",
    columnId: 12,
    order: 5,
  },
  {
    id: 126,
    title:
      "Research pricing points of various competitors and trial different business models",
    description:
      "We know what we're planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
    status: "Doing",
    columnId: 12,
    order: 6,
  },
  {
    id: 131,
    title: "Conduct 5 wireframe tests",
    description:
      "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
    status: "Done",
    columnId: 13,
    order: 1,
  },
  {
    id: 132,
    title: "Create wireframe prototype",
    description:
      "Create a grayscale clickable wireframe prototype to test our assumptions so far.",
    status: "Done",
    columnId: 13,
    order: 2,
  },
  {
    id: 133,
    title: "Review results of usability tests and iterate",
    description:
      "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
    status: "Done",
    columnId: 13,
    order: 3,
  },
  {
    id: 134,
    title:
      "Create paper prototypes and conduct 10 usability tests with potential customers",
    description: "",
    status: "Done",
    columnId: 13,
    order: 4,
  },
  {
    id: 135,
    title: "Market discovery",
    description:
      "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
    status: "Done",
    columnId: 13,
    order: 5,
  },
  {
    id: 136,
    title: "Competitor analysis",
    description: "",
    status: "Done",
    columnId: 13,
    order: 6,
  },
  {
    id: 137,
    title: "Research the market",
    description:
      "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
    status: "Done",
    columnId: 13,
    order: 7,
  },
  {
    id: 141,
    title: "Plan Product Hunt launch",
    description: "",
    status: "Todo",
    columnId: 14,
    order: 1,
  },
  {
    id: 142,
    title: "Share on Show HN",
    description: "",
    status: "",
    columnId: 14,
    order: 2,
  },
  {
    id: 143,
    title: "Write launch article to publish on multiple channels",
    description: "",
    status: "",
    columnId: 14,
    order: 3,
  },
  {
    id: 151,
    title: "Launch version one",
    description: "",
    status: "",
    columnId: 17,
    order: 1,
  },
  {
    id: 152,
    title: "Review early feedback and plan next steps for roadmap",
    description:
      "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
    status: "",
    columnId: 17,
    order: 2,
  },
];


export const subtasks = [
  {
    id: 1111,
    title: "Sign up page",
    isCompleted: true,
    taskId: 111,
  },
  {
    id: 1112,
    title: "Sign in page",
    isCompleted: false,
    taskId: 111,
  },
  {
    id: 1113,
    title: "Welcome page",
    isCompleted: false,
    taskId: 111,
  },
  {
    id: 1121,
    title: "Search page",
    isCompleted: false,
    taskId: 112,
  },
  {
    id: 1131,
    title: "Account page",
    isCompleted: false,
    taskId: 113,
  },
  {
    id: 1132,
    title: "Billing page",
    isCompleted: false,
    taskId: 113,
  },
  {
    id: 1141,
    title: "Internal testing",
    isCompleted: false,
    taskId: 114,
  },
  {
    id: 1142,
    title: "External testing",
    isCompleted: false,
    taskId: 114,
  },
  {
    id: 1211,
    title: "Settings - Account page",
    isCompleted: true,
    taskId: 121,
  },
  {
    id: 1212,
    title: "Settings - Billing page",
    isCompleted: true,
    taskId: 121,
  },
  {
    id: 1213,
    title: "Search page",
    isCompleted: false,
    taskId: 121,
  },
  {
    id: 1221,
    title: "Upgrade plan",
    isCompleted: true,
    taskId: 122,
  },
  {
    id: 1222,
    title: "Cancel plan",
    isCompleted: true,
    taskId: 122,
  },
  {
    id: 1223,
    title: "Update payment method",
    isCompleted: false,
    taskId: 122,
  },
  {
    id: 1231,
    title: "Sign up page",
    isCompleted: true,
    taskId: 123,
  },
  {
    id: 1232,
    title: "Sign in page",
    isCompleted: false,
    taskId: 123,
  },
  {
    id: 1233,
    title: "Welcome page",
    isCompleted: false,
    taskId: 123,
  },
  {
    id: 1241,
    title: "Add search endpoint",
    isCompleted: true,
    taskId: 124,
  },
  {
    id: 1242,
    title: "Define search filters",
    isCompleted: false,
    taskId: 124,
  },
  {
    id: 1251,
    title: "Define user model",
    isCompleted: true,
    taskId: 125,
  },
  {
    id: 1252,
    title: "Add auth endpoints",
    isCompleted: false,
    taskId: 125,
  },
  {
    id: 1261,
    title: "Research competitor pricing and business models",
    isCompleted: true,
    taskId: 126,
  },
  {
    id: 1262,
    title: "Outline a business model that works for our solution",
    isCompleted: false,
    taskId: 126,
  },
  {
    id: 1263,
    title:
      "Talk to potential customers about our proposed solution and ask for fair price expectancy",
    isCompleted: false,
    taskId: 126,
  },
];
