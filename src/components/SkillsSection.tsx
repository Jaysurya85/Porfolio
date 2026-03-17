import { siteData } from "@/data/siteData";

export function SkillsSection() {
	return (
		<section id="skills">
			<div className="mb-8">
				<p className="text-sm uppercase tracking-[0.22em] text-zinc-500">What I work with</p>
				<h2 className="mt-3 text-3xl font-semibold tracking-tight">Skills</h2>
			</div>
			<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
				{siteData.skills.map((group) => (
					<div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
						<h3 className="text-lg font-semibold">{group.title}</h3>
						<ul className="mt-4 space-y-3 text-sm text-zinc-400">
							{group.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
