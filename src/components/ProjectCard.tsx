type Project = {
	title: string;
	description: string;
	tech: string[];
	github: string;
	demo: string;
};

export function ProjectCard({ project }: { project: Project }) {
	return (
		<article className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-200 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
			<h3 className="text-xl font-semibold text-white">{project.title}</h3>
			<p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
			<div className="mt-4 flex flex-wrap gap-2">
				{project.tech.map((item) => (
					<span
						key={item}
						className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
					>
						{item}
					</span>
				))}
			</div>
			<div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-400">
				{project.github ? (
					<a href={project.github} className="transition hover:text-blue-300">
						GitHub →
					</a>
				) : null}
				{project.demo ? (
					<a href={project.demo} className="transition hover:text-blue-300">
						Demo →
					</a>
				) : null}
				{!project.github && !project.demo ? <span className="text-zinc-500">Link coming soon</span> : null}
			</div>
		</article>
	);
}
