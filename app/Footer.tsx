import ExternalLink from "@/app/components/ExternalLink";
import InstagramLogo from "@/app/components/icons/InstagramLogo";

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
			<div className="flex items-center">
				<ExternalLink href="https://instagram.com/malina_more_studio">
					<InstagramLogo />
				</ExternalLink>
			</div>
		</div>
	</footer>
);

export default Footer;
