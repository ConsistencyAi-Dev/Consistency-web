export interface CurriculumModule {
  num: number;
  title: string;
  lessons: string;
  details: string[];
}

export const CURRICULUM_DATA: CurriculumModule[] = [
  {
    num: 1,
    title: "Python for ML & Math Foundations",
    lessons: "8 lessons - 2.5h",
    details: [
      "NumPy, Pandas, Visualization",
      "Probability, Linear Algebra essentials",
      "Hands-on notebooks",
    ],
  },
  {
    num: 2,
    title: "Supervised Learning Deep-Dive",
    lessons: "12 lessons - 4h",
    details: ["Regression models, Classification trees", "Support Vector Machines", "Evaluation metrics & validations"],
  },
  {
    num: 3,
    title: "Deep Learning Fundamentals",
    lessons: "10 lessons - 3h",
    details: ["Perceptrons & Neural Networks", "Backpropagation solvers", "Optimizers (Adam, SGD)"],
  },
  {
    num: 4,
    title: "Transformers & NLP",
    lessons: "9 lessons - 4.5h",
    details: ["Self-Attention mechanisms", "BERT & GPT architecture", "Hugging Face pipeline usage"],
  },
  {
    num: 5,
    title: "GenAI & RAG Systems",
    lessons: "11 lessons - 5h",
    details: ["Vector indexes (Pinecone, Chroma)", "LangChain context loaders", "Prompt engineering recipes"],
  },
  {
    num: 6,
    title: "MLOps & Deployment",
    lessons: "7 lessons - 3h",
    details: ["Docker containers", "API handlers (FastAPI, Flask)", "Model registries (MLflow)"],
  },
];
