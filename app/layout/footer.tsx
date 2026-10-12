
export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="flex flex-col gap-8 p-8 justify-center items-center min-h-16 bg-black text-white">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
				<div className="flex flex-col gap-2">
					<h3 className="text-lg font-bold">Find Me</h3>
					<SocialMediaLink href="https://github.com/ahmedwadod">
						GitHub
					</SocialMediaLink>
					<SocialMediaLink href="https://www.linkedin.com/in/ahmed-elkhalifa-198200167/">
						LinkedIn
					</SocialMediaLink>
					<SocialMediaLink href="https://x.com/ahmedwadod_">
						Twitter/X
					</SocialMediaLink>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-lg font-bold">Contact Me</h3>
					<SocialMediaLink href="mailto:ahmed@elkhalifa.dev">
						ahmed@elkhalifa.dev
					</SocialMediaLink>
					<p className="font-mono">
						Kampala, Uganda
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-lg font-bold">Links</h3>
					<SocialMediaLink href="/">
						Home
					</SocialMediaLink>
					<SocialMediaLink href="/about">
						About
					</SocialMediaLink>
				</div>
			</div>

			<p className="text-center text-sm">All rights reserved © {year} <br /> Ahmed Elkhalifa</p>
		</footer>
	);
}

function SocialMediaLink({ href, children }: { href: string, children: React.ReactNode }) {
	return <a href={href} className="font-mono text-secondary hover:underline">{children}</a>;
}
