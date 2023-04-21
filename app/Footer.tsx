import Link from "next/link";
import InstagramLogo from "./components/InstagramLogo";

const Footer = () => (
	<footer className="bg-black text-zinc-400 text-sm flex justify-center py-8">
		<div className="flex justify-between items-center flex-auto max-w-5xl px-[5%]">
			<div className="flex space-x-1">
				<span>©</span>
				<div>
					<p>2023 Malina More ASBL</p>
					<p>Reg. 0800.279.001</p>
				</div>
			</div>
			<div className="flex items-center">
				<Link href="https://instagram.com/malina_more_studio">
					<InstagramLogo />
				</Link>
			</div>
		</div>
	</footer>
);

export default Footer;
