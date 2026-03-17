import { siteData } from "@/data/siteData";

export function CodeforcesSection() {
	const { codeforces } = siteData;

	return (
		<section id="codeforces" className="max-w-3xl">
			<div className="mb-8">
				<p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Problem Solving</p>
				<h2 className="mt-3 text-3xl font-semibold tracking-tight">{codeforces.title}</h2>
			</div>
			<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h3 className="text-xl font-semibold">Codeforces</h3>
						<p className="mt-1 text-sm text-zinc-500">Handle: {codeforces.handle}</p>
					</div>
					<a href={codeforces.profile} className="text-sm text-blue-400 transition hover:text-blue-300">
						View Profile →
					</a>
				</div>
				<p className="mt-4 text-sm leading-6 text-zinc-400">{codeforces.summary}</p>
				<div className="mt-5 flex flex-wrap gap-2">
					{codeforces.highlights.map((item) => (
						<span
							key={item}
							className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
