import ExternalLink from "@/app/components/ExternalLink";
import InstagramLogo from "@/app/components/icons/InstagramLogo";
import {
	EnvelopeIcon,
	MapIcon,
	MapPinIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import EmailLink from "./components/EmailLink";
import TelLink from "./components/TelLink";
import FacebookLogo from "./components/icons/FacebookLogo";
import MeetupLogo from "./components/icons/MeetupLogo";
import { CONTACT_EMAIL, CONTACT_PHONE } from "./constants";

const Footer = () => (
	<footer className="bg-black text-zinc-400 text-sm py-8 sticky top-[100vh]">
		<section
			id="contact"
			className="w-full bg-black text-white flex justify-center"
		>
			<div className="grid grid-flow-row-dense md:grid-flow-col-dense w-full max-w-5xl px-[5%] py-8 leading-6">
				<div>
					<h1 className="font-semibold text-xl">Find us</h1>
					<ul className="text-zinc-200">
						<li className="flex items-center gap-x-2">
							<MapPinIcon title="Address" />
							<ExternalLink href="https://goo.gl/maps/cpYJ3jmpV7xyLUneA?coh=178571&entry=tt">
								Rue Rossini 19, 1070 Anderlecht
							</ExternalLink>
						</li>
						<li className="flex items-center gap-x-2">
							<MapIcon />
							Metro station: Clemenceau
						</li>
						<li className="flex items-center gap-x-2">
							<EnvelopeIcon title="Email address" />{" "}
							<EmailLink email={CONTACT_EMAIL} />
						</li>
						<li className="flex items-center gap-x-2">
							<PhoneIcon title="Email address" />{" "}
							<TelLink phoneNumber={CONTACT_PHONE}>
								{CONTACT_PHONE}
							</TelLink>
						</li>
					</ul>
				</div>
				<div>
					<h1 className="font-semibold text-xl">Opening hours</h1>
					<aside className="font-bold">By appointment only</aside>
					<ul className="gap-y-1 text-zinc-200">
						<li>Wed - Mon: 12:00 – 20:00</li>
						<li>
							Tuesday: <span className="line-through">closed</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section className="flex justify-center">
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
					<ExternalLink href="https://meetup.com/Malina-More">
						<MeetupLogo className="w-6 h-6" />
					</ExternalLink>
				</div>
			</div>
		</section>
	</footer>
);

export default Footer;
