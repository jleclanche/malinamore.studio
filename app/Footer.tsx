import ExternalLink from "@/app/components/ExternalLink";
import InstagramLogo from "@/app/components/icons/InstagramLogo";
import Link from "next/link";
import FacebookLogo from "./components/icons/FacebookLogo";

const Footer = () => (
	<footer className="bg-black text-zinc-400 text-sm flex justify-center py-8">
		<div className="flex justify-between items-center flex-auto max-w-5xl px-[5%]">
			<div className="flex space-x-1">
				<span>©</span>
				<div>
					<p>2023 Malina More ASBL</p>
					<p>BCE 0800.279.001</p>
				</div>
			</div>
			<ul>
				<li>
					<Link href="/about/refund-policy">Refund policy</Link>
				</li>
			</ul>
			<div className="flex items-center gap-3">
				<ExternalLink href="https://instagram.com/malina_more_studio">
					<InstagramLogo className="w-6 h-6" />
				</ExternalLink>
				<ExternalLink href="https://facebook.com/MalinaMoreStudio">
					<FacebookLogo className="w-6 h-6" />
				</ExternalLink>
			</div>
		</div>
	</footer>
);

export default Footer;
