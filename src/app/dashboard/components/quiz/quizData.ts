export interface Question {
  id: number;
  text: string;
  topic: string;
  topicTheme?: "blue" | "orange" | "green" | "purple";
  options: string[];
  correctAnswer: string;
  code?: string;
  codeTitle?: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    topic: "DSA - Arrays & Search",
    topicTheme: "blue",
    text: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)",
    code: `function binarySearch(arr, x) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === x) return m;
    if (arr[m] < x) l = m + 1;
    else r = m - 1;
  }
  return -1;
}`,
  },
  {
    id: 2,
    topic: "JavaScript - Core",
    topicTheme: "orange",
    text: "What will [1,2,3].map(n => n * 2) return?",
    options: ["[2, 4, 6]", "[1, 2, 3]", "[2, 4]", "ReferenceError"],
    correctAnswer: "[2, 4, 6]",
    code: `const result = [1, 2, 3].map(n => n * 2);
console.log(result);`,
    codeTitle: "map.js",
  },
  {
    id: 3,
    topic: "AI Quiz",
    topicTheme: "blue",
    text: "Which database is best suited for storing user sessions with TTL?",
    options: [
      "MySQL",
      "Redis - in-memory with expiry",
      "MongoDB",
      "PostgreSQL",
    ],
    correctAnswer: "Redis - in-memory with expiry",
  },
  {
    id: 4,
    topic: "React - Performance",
    topicTheme: "green",
    text: "What does useMemo do in React?",
    options: [
      "Memoizes expensive calculation",
      "Memoizes entire component",
      "Fetches data on mount",
      "Nothing - deprecated hook",
    ],
    correctAnswer: "Memoizes expensive calculation",
    code: `const expensive = useMemo(() => compute(a, b), [a, b]);`,
  },
  {
    id: 5,
    topic: "Time Complexity - Analysis",
    topicTheme: "purple",
    text: "What is the complexity of nested loops: for i in n, for j in n?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(2*n)"],
    correctAnswer: "O(n²)",
    code: `for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    doWork();
  }
}`,
  },
  {
    id: 6,
    topic: "AI Quiz",
    topicTheme: "green",
    text: "Which type of machine learning uses labeled data to train a model to make predictions?",
    options: [
      "Supervised learning",
      "Reinforcement learning",
      "Unsupervised learning",
      "Randomized learning",
    ],
    correctAnswer: "Supervised learning",
  },
];
