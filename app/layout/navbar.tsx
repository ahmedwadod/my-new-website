
export default function NavBar() {
	return <nav className="flex justify-between items-center p-4">
		<a href="/" className="flex gap-1 items-center">
			<img src="/ICON.png" alt="Ahmed Elkhalifa" className="w-12 h-12 rounded-full" />
			<h1 className="text-sm font-mono font-light md:block hidden">Elkhalifa.dev</h1>
		</a>
		<div className="font-mono flex items-center space-x-4">
			<a href="/about" className="hover:text-secondary" >About</a>
			<a
				href="https://drive.google.com/drive/folders/1zwUwoMhWfi_dNaEHylzo3u1Gmddae8Iv?usp=drive_link"
				className="hover:text-secondary">
				Portfolio &#8599;
			</a>
			<a href="https://dev.to/ahmedwadod" className="hover:text-secondary">Blogs &#8599;</a>
		</div>
	</nav>;
}
