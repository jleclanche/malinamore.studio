import Link from "next/link";

const Header = () => (
	<header className="flex justify-between flex-wrap gap-y-4 bg-black text-white p-6">
		<span className="uppercase font-bold tracking-wider">
			<Link href="/">Malina More Studio</Link>
		</span>
		<nav className="space-x-4">
			<Link className="font-medium" href="/classes">
				Classes
			</Link>
			<Link className="font-medium" href="/#services">
				Services
			</Link>
			<Link className="font-medium" href="/about">
				About
			</Link>
			<Link className="font-medium" href="/about/team">
				Team
			</Link>
		</nav>
	</header>
);

export default Header;
