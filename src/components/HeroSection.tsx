import { siteData } from "@/data/siteData";

export function HeroSection() {
	const { personal } = siteData;

	return (
		<section className="max-w-3xl">
			<p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
				{personal.role}
			</p>
			<h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
				{personal.headline}
			</h1>
			<p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
				{personal.summary}
			</p>
			<div className="mt-8 flex flex-wrap gap-3">
				<a
					href="#projects"
					className="rounded-2xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:bg-blue-400"
				>
					View Projects
				</a>
				<a
					href={personal.github}
					className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:bg-white/10"
				>
					GitHub
				</a>
				<a
					href={personal.linkedin}
					className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:bg-white/10"
				>
					LinkedIn
				</a>
			</div>
		</section>
	);
}
