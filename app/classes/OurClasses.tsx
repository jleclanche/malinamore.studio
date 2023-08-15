import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import EmailLink from "../components/EmailLink";
import ExternalLink from "../components/ExternalLink";
import { CONTACT_EMAIL } from "../constants";

const OurClasses = () => (
	<div className="flex flex-col gap-5 px-10">
		<h1 className="font-bold text-2xl text-center">Our classes</h1>
		<div className="flex flex-col gap-y-1.5 max-w-5xl mx-auto">
			<p>
				<strong>Discover the art of ceramics with Anna!</strong> Talented
				ceramist with 13 years of practice and 7 years of experience teaching
				the art, you will learn from the best in the craft.
			</p>
			<p>
				Each lesson lasts around two-and-a-half hours and includes up to 1kg of
				clay per person, equipment, kiln firing, and complimentary tea or
				coffee.
			</p>
			<p>
				<Link href="/memberships" className="text-sky-500 hover:underline">
					Members
				</Link>{" "}
				get 20€ off &quot;Fall in Love with Clay&quot; classes, and can attend
				&quot;Free-style ceramics&quot; classes for free.
			</p>
			<p>
				<strong>Private classes</strong> are available in English, French and
				Russian. Please book at least 5 days in advance.
			</p>
		</div>
		<div className="grid justify-around grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4 max-w-5xl mx-auto">
			<div>
				<p className="font-bold text-lg">Group lessons</p>
				<p className="text-sm text-zinc-500 flex items-center gap-x-1 mt-1">
					<ClockIcon /> Next group lessons on September 10th!
				</p>
				<ul className="list-dash pl-4 space-y-1 mt-2">
					<li>
						<Link
							href="/classes/fall-in-love-with-clay"
							className="text-sky-500 hover:underline"
						>
							Fall in Love with Clay (65 €)
						</Link>
						<span className="block text-sm text-zinc-500">
							Beginner-friendly. Gift cards available!
						</span>
					</li>
					<li>
						<ExternalLink
							href="https://lu.ma/malinamore.studio?utm_source=malinamore.studio&utm_medium=class-link"
							className="text-sky-500 hover:underline"
						>
							Free-style ceramics
						</ExternalLink>{" "}
						(40 € - Free for members)
						<span className="block text-sm text-zinc-500">
							Weekly, every Wednesday.
						</span>
					</li>
					<li>
						Introduction to glazing (50 €)
						<span className="block text-sm text-zinc-500">
							Advanced. Coming soon.
						</span>
					</li>
				</ul>
			</div>
			<div>
				<p className="font-bold text-lg">On-demand classes</p>
				<ul className="list-dash pl-4 mt-2">
					<li>1 person: 125 € / lesson</li>
					<li>2-4 people: 75 € / lesson / person</li>
					<li>5+ people: 60 € / lesson / person</li>
					<li>
						Large groups:{" "}
						<Link
							href="/classes/teambuilding-ceramics"
							className="text-sky-500 hover:underline"
						>
							Custom Prices available
						</Link>
					</li>
				</ul>
				<p className="mt-3">
					Please{" "}
					<EmailLink
						email={CONTACT_EMAIL}
						className="text-sky-500 hover:underline"
					>
						contact us
					</EmailLink>{" "}
					to book a private class.
				</p>
			</div>
		</div>
		<ExternalLink
			href="https://lu.ma/malinamore.studio?utm_source=malinamore.studio&utm_medium=book-a-class&utm_campaign=our-classes"
			className="mx-auto w-fit text-white bg-green-700 px-5 py-2 rounded-md shadow-md hover:bg-green-600 hover:no-underline"
		>
			Book a class
		</ExternalLink>
	</div>
);

export default OurClasses;
