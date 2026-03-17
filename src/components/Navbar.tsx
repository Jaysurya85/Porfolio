import { siteData } from "@/data/siteData";

export function Navbar() {
	return (
		<header className="sticky top-0 z-30 border-b border-white/10 bg-[#0d1117]/85 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<a href="#home" className="text-sm font-semibold tracking-wide text-white">
					{siteData.personal.name}
				</a>
				<nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
					{siteData.navLinks.map((link) => (
						<a key={link.label} href={link.href} className="transition hover:text-white">
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
