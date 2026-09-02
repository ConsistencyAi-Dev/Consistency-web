import React from "react";
import ComingSoon from "../../components/ComingSoon";
import { projects } from "../data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage() {
  return <ComingSoon title="Project Details" description="Project details and interactive deep dives are coming soon." />;
}

/*
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "../data";

export async function OriginalProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const panel = "rounded-lg border border-[#E2E8F0] bg-white";
  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-4 text-left">
      <div className="flex items-center justify-between text-[11px] text-[#64748B]"><span><Link href="/dashboard/projects" className="text-[#2B50EC]">Projects</Link> <span className="px-1">›</span> {project.title}</span><Link href="/dashboard/projects" className="rounded border border-[#E2E8F0] bg-white px-3 py-1.5 text-[#0F172A]">← Back to Projects</Link></div>
      <section className="relative h-[190px] overflow-hidden rounded-lg bg-[#0F172A]"><Image src={project.hero} alt={project.title} fill priority className="object-cover" sizes="(max-width: 1100px) 100vw, 1100px" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /><div className="absolute bottom-4 left-5"><div className="mb-1 flex gap-1.5">{project.tags.map((tag) => <span key={tag} className="rounded bg-black/50 px-2 py-1 text-[9px] text-white">{tag}</span>)}</div><h2 className="text-[22px] font-semibold leading-7 text-white">{project.title}</h2></div></section>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{[["PLATFORM ECOSYSTEM", project.metric, "Modern project architecture"], ["PROJECT STATUS", project.status, "Deployment status"], ["UNIT TEST STATUS", project.tests, "Automated quality checks"], ["PERFORMANCE INDEX", project.performance, "High accuracy learning sample"]].map(([label, value, detail]) => <div key={label} className={`${panel} p-3`}><p className="text-[8px] font-semibold text-[#64748B]">{label}</p><p className="mt-1 text-[15px] font-semibold leading-5 text-[#0F172A]">{value}</p><p className="text-[9px] text-[#94A3B8]">{detail}</p></div>)}</div>

      <div className="grid gap-3 lg:grid-cols-[1fr_330px]"><div className="flex flex-col gap-3"><section className={`${panel} p-4`}><h3 className="text-[13px] font-semibold text-[#0F172A]">Project Overview</h3><p className="mt-2 text-[10px] leading-4 text-[#64748B]">{project.overview}</p></section><section className={`${panel} p-4`}><h3 className="text-[13px] font-semibold text-[#0F172A]">Architecture &amp; System Flow</h3><p className="mt-2 text-[10px] leading-4 text-[#64748B]">{project.architecture}</p></section></div><section className={`${panel} p-4`}><h3 className="text-[13px] font-semibold text-[#0F172A]">Skills Demonstrated</h3><div className="mt-2 divide-y divide-[#F1F5F9]">{project.skills.map((skill) => <div key={skill} className="flex items-center justify-between gap-2 py-2"><span className="rounded bg-[#EEF2FF] px-1.5 py-1 text-[8px] text-[#2B50EC]">{skill}</span><span className="text-right text-[8px] text-[#64748B]">Applied in the project workflow</span></div>)}</div></section></div>

      <section className="mt-2"><h3 className="text-[13px] font-semibold text-[#0F172A]">Build Process</h3><p className="mb-3 text-[10px] text-[#64748B]">A step-by-step walkthrough of how this project was designed, implemented and tested.</p><div className="flex flex-col gap-2">{project.steps.map((step, index) => <article key={step.title} className={`rounded-lg border p-3 ${project.darkSteps ? "border-[#0F172A] bg-[#0F172A] text-white" : "border-[#E2E8F0] bg-white text-[#0F172A]"}`}><div className="flex items-center gap-2"><span className={`flex h-5 w-5 items-center justify-center rounded text-[9px] ${project.darkSteps ? "bg-[#2B50EC] text-white" : "bg-[#EEF2FF] text-[#2B50EC]"}`}>{index === 0 ? "✦" : index}</span><h4 className="text-[10px] font-semibold">{step.title}</h4><span className={`ml-auto text-[8px] ${project.darkSteps ? "text-[#CBD5E1]" : "text-[#94A3B8]"}`}>Part {index + 1}</span></div><p className={`mt-1 pl-7 text-[9px] leading-4 ${project.darkSteps ? "text-[#CBD5E1]" : "text-[#64748B]"}`}>{step.description}</p></article>)}</div></section>
    </div>
  );
}
*/