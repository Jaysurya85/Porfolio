type Project = {
	title: string;
	description: string;
	tech: string[];
	github: string;
	demo: string;
};

type SkillGroup = {
	title: string;
	items: string[];
};

type ExperienceRole = {
	title: string;
	period: string;
	highlights: string[];
};

export const siteData = {
	personal: {
		name: "Jaysurya Ray",
		role: "Backend & Systems Engineer • Full-Stack Developer",
		headline: "I build scalable backend systems, distributed applications, and polished frontend experiences.",
		summary:
			"M.S. Computer Science student at the University of Florida with a 4.0 GPA and prior backend engineering experience at Infosys. I enjoy building distributed systems, performant services, and clean user-facing products that pair strong backend design with thoughtful frontend execution.",
		email: "jaysuryaray1998@gmail.com",
		github: "https://github.com/Jaysurya85",
		linkedin: "https://www.linkedin.com/in/Jaysurya85/",
	},
	codeforces: {
		title: "Competitive Programming",
		handle: "jaysuryaray1998",
		profile: "https://codeforces.com/profile/jaysuryaray1998",
		summary:
			"Solved 700+ algorithmic problems on Codeforces and reached Specialist level with a 1400+ rating.",
		highlights: ["700+ problems solved", "Specialist", "1400+ rating", "Java • Rust • Python"],
	},
	projects: [
		{
			title: "P2P File Sharing System",
			description:
				"BitTorrent-like peer-to-peer file sharing system built with Java sockets, concurrency, and custom peer messaging.",
			tech: ["Java", "TCP", "Concurrency", "Distributed Systems"],
			github: "https://github.com/Jaysurya85/P2PFileSharing",
			demo: "",
		},
		{
			title: "Redis Clone",
			description:
				"In-memory key-value store in Rust with RESP parsing, expiration support, and persistence.",
			tech: ["Rust", "Systems", "Protocol Design"],
			github: "https://github.com/Jaysurya85/custom_redis_rust",
			demo: "",
		},
		{
			title: "Algorithm Visualizer",
			description:
				"Interactive frontend tool for visualizing graph and sorting algorithms with a clean, user-friendly interface.",
			tech: ["React", "JavaScript", "Frontend"],
			github: "",
			demo: "https://algo-visualiser-d4a06.web.app",
		},
		{
			title: "PLP Interpreter",
			description:
				"Compiler / interpreter project focused on parsing, execution, and language design fundamentals.",
			tech: ["Java", "ANTLR", "Compiler Design"],
			github: "",
			demo: "",
		},
	] as Project[],
	skills: [
		{
			title: "Programming",
			items: ["Java", "Python", "Rust", "C", "JavaScript", "TypeScript"],
		},
		{
			title: "Backend & Web",
			items: ["Spring Boot", "Django", "React", "SolidJS", "Flutter", "REST APIs"],
		},
		{
			title: "Systems & Data",
			items: ["Redis", "SQL", "Linux", "Docker", "Concurrency", "Distributed Systems"],
		},
		{
			title: "Tools",
			items: ["Git", "Jenkins", "Vim", "VS Code", "PyCharm", "PostgreSQL"],
		},
	] as SkillGroup[],
	experience: {
		company: "Infosys",
		roles: [
			{
				title: "Specialist Programmer L2",
				period: "May 2024 — Jul 2025",
				highlights: [
					"Engineered a multithreaded load distribution algorithm in Python reducing computation time from 12s to 3s (75% improvement)",
					"Developed a background queue server for asynchronous processing, improving scalability and system responsiveness",
					"Reduced system processing time by 94% with optimized Java-based data calculations",
					"Integrated services into Jenkins CI/CD pipelines for automated build, testing, and deployment",
				],
			},
			{
				title: "Specialist Programmer L1",
				period: "Sep 2021 — May 2024",
				highlights: [
					"Implemented Redis caching layer reducing API response time by 65% and supporting 5k+ requests/sec",
					"Built token-based authentication system improving security and reducing failures by 40%",
					"Designed a database-driven framework that reduced manual testing effort by 30+ hours/month",
					"Improved release cycles by automating UI generation and backend workflows",
				],
			},
		] as ExperienceRole[],
	},
	navLinks: [
		{ label: "Projects", href: "#projects" },
		{ label: "Skills", href: "#skills" },
		{ label: "Experience", href: "#experience" },
		{ label: "Codeforces", href: "#codeforces" },
		{ label: "Contact", href: "#contact" },
	],
};
