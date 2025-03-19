
export default function NavBar() {
	return <nav className="flex justify-between items-center p-4">
		<a href="/" className="flex gap-1 items-center">
			<img src="/ICON.png" alt="Ahmed Elkhalifa" className="w-12 h-12 rounded-full" />
			<h1 className="text-sm font-mono font-light md:block hidden">Elkhalifa.dev</h1>
		</a>
		<div className="font-mono flex items-center space-x-4">
			<a href="/about" >About</a>
			<a href="/projects">Projects</a>
			<a href="https://dev.to/ahmedwadod">Blogs</a>
		</div>
	</nav>;
}
