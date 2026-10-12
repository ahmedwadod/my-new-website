import Button from "~/ui/link_button";

export default function Landing() {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 gap-16">
			<section className="col-span-1">
				<img className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
					src="/me.jpeg" alt="Ahmed Elkhalifa" />
				<h1 className="text-3xl font-bold mt-2">Ahmed Elkhalifa</h1>
				<p className="font-mono">
					Software Developer @ <a href="https://conefia.com" className="underline">Conefia</a>
				</p>
				<p className="font-mono mt-2 mb-4">
					Hey, I’m Ahmed – a tech enthusiast and coding wizard with over 10 years of experience. I'm a swiss knife in the tech world, I work on all type of projects from web and mobile apps down to embedded systems. I love working with startups and I enjoy the unique challenges they bring. I'm always looking for new opportunities to learn and grow.
				</p>
				<div className="flex gap-4">
					<a href="mailto:ahmed@elkhalifa.dev">
						<Button text="Hire me 👋" className="bg-teal-700 shake-button" />
					</a>
				</div>
			</section>

			<section className="col-span-1 flex flex-col gap-4">
				<img className="h-36 object-center object-cover 
				grayscale transition duration-300 ease-in-out hover:grayscale-0"
					src="/banner.jpeg" alt="Banner" />
				<h2 className="text-2xl font-bold">My Skills</h2>
				<p className="font-mono font-light">
					Assembly, C/C++, Dart, Kotlin, Swift, HTML, CSS, JavaScript, TypeScript, SQL, Lua, Python, React, Svelte, Vue3, Next.js, Node.js, AWS SAM, React Native, RevenueCat, Keycloak, Docker, Docker Compose, Google Maps API, Flutter, SharePoint, Figma, WordPress, Shopify, TensorFlow, PyTorch, NumPy, Windows Server, TrueNAS, Ubuntu, Arch Linux, QuickBooks Online, cPanel, Arduino Studio
				</p>
				<a href="/about">
					<Button text="Learn more" />
				</a>
			</section>
		</main>
	);
}
