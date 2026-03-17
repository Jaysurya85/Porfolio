import { siteData } from "@/data/siteData";

export function ContactSection() {
	const { personal } = siteData;

	return (
		<section id="contact" className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-blue-500/[0.08] p-8 sm:p-10">
			<p className="text-sm uppercase tracking-[0.22em] text-zinc-400">Contact</p>
			<h2 className="mt-3 text-3xl font-semibold tracking-tight">Let’s connect.</h2>
			<p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
				I’m open to frontend, backend, and full-stack opportunities where I can contribute to building reliable software.
			</p>
			<div className="mt-6 flex flex-wrap gap-3">
				<a href={`mailto:${personal.email}`} className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
					Email
				</a>
				<a href={personal.github} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
					GitHub
				</a>
				<a href={personal.linkedin} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
					LinkedIn
				</a>
			</div>
		</section>
	);
}
