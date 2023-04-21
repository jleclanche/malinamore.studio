import Link from "next/link";

const navigation = [
	{
		title: "Services",
		href: "#what-we-do",
	},
	{
		title: "About",
		href: "#about",
	},
	{
		title: "Contact",
		href: "#contact",
	},
];

const Header = () => (
	<header className="flex justify-between flex-wrap gap-y-4 bg-black text-white p-6">
		<span className="uppercase font-bold tracking-wider">
			Malina More Studio
		</span>
		<nav className="space-x-4">
			{navigation.map((item) => (
				<Link className="font-medium" key={item.title} href={item.href}>
					{item.title}
				</Link>
			))}
		</nav>
	</header>
);

export default Header;
