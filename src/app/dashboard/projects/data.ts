import type { StaticImageData } from "next/image";
import {
  rag1Png, backend1Png, analytics1Png, voice1Png,
  image1Png, science1Png, projectAvatar1Png, multimodal1Png,
  finance1Png, chatbot1Png,
} from "@/assets";

export type ProjectStep = { title: string; description: string };

export type StudentProject = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  hero: StaticImageData;
  metric: string;
  status: string;
  tests: string;
  performance: string;
  overview: string;
  architecture: string;
  skills: string[];
  steps: ProjectStep[];
  darkSteps?: boolean;
};

const baseSteps = [
  ["Installation", "Set up dependencies, environment variables and the local development workflow."],
  ["Project Skeleton", "Create the application structure, reusable components and data flow."],
  ["Core Concepts", "Build the essential feature set and connect the primary user journey."],
  ["Data and Pipeline", "Implement validation, processing and reliable handling for project inputs."],
  ["Feature Engineering", "Add domain-specific logic, states and interaction details."],
  ["Integration", "Connect supporting services and verify the complete flow with realistic data."],
  ["Testing", "Run focused tests and edge-case checks to confirm a stable experience."],
  ["Production Mode", "Prepare deployment configuration for a hosted environment."],
  ["README", "Document the design decisions, commands and results."],
  ["Extend It", "Identify a thoughtful next feature and outline how the project can grow."],
  ["Talk About It & Resume", "Summarize the outcome, technical choices and measurable impact."],
];

const steps = (intro: string): ProjectStep[] => [
  { title: "What You're Building", description: intro },
  ...baseSteps.map(([title, description]) => ({ title, description })),
];

export const projects: StudentProject[] = [
  { slug: "multi-agent-rag", title: "Multi-Agent RAG Research Assistant", description: "A research assistant that combines retrieval, summarization and reliable source-backed answers.", tags: ["Python", "LangGraph", "RAG"], hero: rag1Png, metric: "16 Parts", status: "Deployed", tests: "9/9 Passing", performance: "R@3 = 100%", overview: "Three autonomous agents retrieve, summarize and critique sources to formulate comprehensive answers with traceable knowledge.", architecture: "A modular graph coordinates retrieval, synthesis and validation agents around a shared state.", skills: ["RAG", "LangGraph", "AI Agents", "Pinecone", "FastAPI / Docker"], steps: steps("Build a multi-agent research workflow that retrieves, summarizes and validates answers before presenting them.") },
  { slug: "scalable-backend-api", title: "Scalable Backend API", description: "A production-ready API designed for high-concurrency systems and dependable operations.", tags: ["FastAPI", "MySQL", "Docker"], hero: backend1Png, metric: "16 Parts", status: "Deployed", tests: "7/7 Passing", performance: "1-2 weeks build", overview: "A robust task management API with secure accounts, JWT authentication and clearly structured CRUD operations.", architecture: "A layered service architecture keeps routes, schemas, persistence and deployment concerns separate.", skills: ["FastAPI", "SQLAlchemy", "Redis", "System Design"], steps: steps("Build and ship a high-concurrency backend with authentication, persistence, caching and deployment.") },
  { slug: "data-analytics-dashboard", title: "Data Analytics Dashboard", description: "An interactive analytics experience that turns messy transactional data into decisions.", tags: ["MongoDB", "Python", "Tableau"], hero: analytics1Png, metric: "16 Parts", status: "Dashboard Live", tests: "5/5 Passing", performance: "2,040 to 1,940 rows", overview: "An end-to-end data pipeline that cleans, models and visualizes transactional sales data.", architecture: "The pipeline moves from MongoDB through cleaning and feature work into a Power BI dashboard.", skills: ["MongoDB", "pandas", "Power BI", "EDA"], steps: steps("Turn raw sales data into a tested, polished dashboard with a repeatable cleaning and reporting pipeline.") },
  { slug: "personal-voice-assistant", title: "Personal Voice Assistant", description: "A real-time voice assistant with streaming speech input, intent handling and natural responses.", tags: ["Whisper", "GPT", "Python3"], hero: voice1Png, metric: "15 Parts", status: "Interactive", tests: "9/9 Passing", performance: "gpt-4o integration", overview: "A real-time assistant that transcribes spoken language, understands intent and responds naturally.", architecture: "Streaming audio flows through speech recognition, an LLM response layer and voice synthesis.", skills: ["Speech Recognition", "GPT", "LangChain", "Audio Handling"], steps: steps("Create a conversational voice loop with transcription, reasoning, speech synthesis and a responsive interface.") },
  { slug: "image-to-speech", title: "Image-to-Speech GenAI Tool", description: "An accessibility tool that describes visual scenes for people with impaired vision.", tags: ["BLIP", "LangChain", "Streamlit"], hero: image1Png, metric: "14 Parts", status: "Deployed", tests: "5/5 Passing", performance: "Streamlit + HF", overview: "An accessibility application that turns an uploaded image into a useful spoken description.", architecture: "Vision captioning, prompt orchestration and speech synthesis work together in a simple Streamlit flow.", skills: ["Vision AI", "LangChain", "Streamlit", "Hugging Face"], steps: steps("Build an image captioning tool that turns visual input into an accessible audio description.") },
  { slug: "data-science-gemma", title: "Data Science AI Assistant (Gemma)", description: "A local AI assistant for practical data science questions and reusable Python workflows.", tags: ["Gemma", "Python", "RAG"], hero: science1Png, metric: "14 Parts", status: "0→assistant", tests: "18/18 Passing", performance: "12/12 Runs", overview: "A data-science copilot that explains concepts, generates runnable Python and keeps answers grounded.", architecture: "A local model, prompt templates and a small retrieval layer provide reproducible answers.", skills: ["Open-source LLMs", "Prompt Engineering", "RAG", "App Deployment"], steps: steps("Build a grounded data science assistant powered by a local Gemma model and runnable Python.") },
  { slug: "azure-talking-avatar", title: "Azure Talking Avatar", description: "A conversational avatar experience that turns generated responses into expressive speech.", tags: ["Azure", "GPT", "TTS"], hero: projectAvatar1Png, metric: "14 Parts", status: "0→video", tests: "7/7 Passing", performance: "SSML Batch", overview: "A user-friendly system where typed prompts become natural dialogue, voice and an animated avatar.", architecture: "Azure Speech Services connects the language model, SSML generation and avatar playback.", skills: ["Azure Cognitive", "SSML Design", "Azure OpenAI", "Multimedia Pipelines"], steps: steps("Connect Azure speech, language and avatar services into a responsive talking assistant.") },
  { slug: "video-analyzer", title: "Video Analyzer", description: "A video intelligence pipeline that extracts frames, speech and searchable events.", tags: ["OpenCV", "Whisper", "Llama"], hero: multimodal1Png, metric: "14 Parts", status: "0→summary", tests: "6/6 Passing", performance: "OpenCV Real", overview: "A video analysis workflow that combines frame extraction, transcription and multimodal understanding.", architecture: "The pipeline orchestrates video loading, scene detection, audio transcription and report generation.", skills: ["Computer Vision", "Speech-to-Text", "Vision-language", "Multimodal"], steps: steps("Process a video into searchable scenes, transcript and a concise AI-generated summary."), darkSteps: true },
  { slug: "llm-finance-agent", title: "LLM-based Finance Agent", description: "A finance research agent that explains market context and supports careful analysis.", tags: ["ML", "LangChain", "Streamlit"], hero: finance1Png, metric: "14 Parts", status: "0→analysis", tests: "7/7 Passing", performance: "ML+NLP Active", overview: "An educational finance assistant for research notes, financial news and explainable investment analysis.", architecture: "Retrieval, structured prompts and a small interface keep analysis focused and inspectable.", skills: ["Machine Learning", "Time-series", "ML/NLP", "Agent Design"], steps: steps("Build a research assistant that combines financial data, retrieval and explainable analysis.") },
  { slug: "multi-modal-medical-chatbot", title: "Multi-Modal Medical Chatbot", description: "An educational health assistant for text, image and safety-first conversations.", tags: ["RAG", "Safety", "Multi-modal"], hero: chatbot1Png, metric: "15 Parts", status: "Safety First", tests: "13/13 Passing", performance: "Multi-input", overview: "An educational prototype that combines clinical language understanding with image and text inputs.", architecture: "A safety layer, retrieval system and multimodal model keep responses grounded and appropriately cautious.", skills: ["Safety Engineering", "Multi-modal Input", "Vector Retrieval", "Privacy & Compliance"], steps: steps("Design a safety-first multimodal assistant that grounds every response and handles uncertainty.") },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}