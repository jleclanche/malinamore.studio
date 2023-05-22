import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import EmailLink from "../components/EmailLink";
import ExternalLink from "../components/ExternalLink";
import { CALENDAR_LINK, CONTACT_EMAIL } from "../constants";

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
				clay per person, equipment, and complimentary tea or coffee. Members get
				20% off all lessons!
			</p>
			<p>
				<EmailLink
					email={CONTACT_EMAIL}
					className="text-sky-500 hover:underline"
				>
					Contact us
				</EmailLink>{" "}
				to book a class. For private lessons, please book at least 5 days in
				advance. Classes are available in English, French and Russian.
			</p>
		</div>
		<div className="grid justify-around grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4 max-w-5xl mx-auto">
			<div>
				<p className="font-bold text-lg">Group lessons</p>
				<p className="text-sm text-zinc-500 flex items-center gap-x-1 mt-1">
					<ClockIcon /> Our weekly group lessons begin in June!
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
							Every 2 weeks, best for beginners
						</span>
					</li>
					<li>
						<ExternalLink
							href="https://cal.com/malina-more/free-style-ceramics"
							className="text-sky-500 hover:underline"
						>
							Free-style ceramics (40 €)
						</ExternalLink>
						<span className="block text-sm text-zinc-500">
							Weekly, beginner-friendly
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
					<li>1 person: 100 € / lesson</li>
					<li>2 people: 85 € / lesson / person</li>
					<li>3 people: 75 € / lesson / person</li>
					<li>4+ people: 50 € / lesson / person</li>
					<li>10+ people & birthdays: custom prices available</li>
				</ul>
			</div>
		</div>
		<ExternalLink
			href={CALENDAR_LINK}
			className="mx-auto w-fit text-white bg-green-700 px-5 py-2 rounded-md shadow-md hover:bg-green-600 hover:no-underline"
		>
			Book a class
		</ExternalLink>
	</div>
);

export default OurClasses;
