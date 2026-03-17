import { siteData } from "@/data/siteData";

export function ExperienceSection() {
	const { experience } = siteData;

	return (
		<section id="experience" className="max-w-3xl">
			<div className="mb-8">
				<p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Background</p>
				<h2 className="mt-3 text-3xl font-semibold tracking-tight">Experience</h2>
			</div>

			<div className="space-y-6">
				{experience.roles.map((role) => (
					<div key={role.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
						<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
							<h3 className="text-xl font-semibold">
								{experience.company} — {role.title}
							</h3>
							<p className="text-sm text-zinc-500">{role.period}</p>
						</div>

						<ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
							{role.highlights.map((item) => (
								<li key={item} className="flex gap-3">
									<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
