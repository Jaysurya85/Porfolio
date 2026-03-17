import { siteData } from "@/data/siteData";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
	return (
		<section id="projects">
			<div className="mb-8">
				<p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Featured Work</p>
				<h2 className="mt-3 text-3xl font-semibold tracking-tight">Projects</h2>
			</div>
			<div className="grid gap-5 md:grid-cols-2">
				{siteData.projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</section>
	);
}
