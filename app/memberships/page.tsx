import ExternalLink from "../components/ExternalLink";

const Page = () => (
	<article className="py-10">
		<div className="flex flex-col gap-5 px-10">
			<h1 className="font-bold text-2xl text-center">
				Membership to Malina More
			</h1>
			<div className="flex flex-col max-w-5xl mx-auto prose">
				<p>
					Becoming a member is the best way to support Malina More ASBL!
					<br />
					Memberships are 400€ for 6 months, starting the day you become a
					member. You can cancel at any time.
				</p>
				<h3>Benefits</h3>
				<ul>
					<li>
						Free access to the weekly &quot;Free-style ceramics&quot;
						lessons
					</li>
					<li>
						20€ discount on all &quot;Fall in Love with Clay&quot; series
						workshops
					</li>
					<li>10% discount on all kiln usage</li>
					<li>Discounts on many other paid events</li>
				</ul>
				<p className="flex justify-center gap-3">
					<ExternalLink
						href="/memberships/subscribe"
						className="w-fit text-white bg-green-700 px-5 py-2 rounded-md shadow-md hover:bg-green-600 no-underline"
					>
						Become a member
					</ExternalLink>
					<ExternalLink
						href="/billing"
						className="w-fit text-white bg-blue-700 px-5 py-2 rounded-md shadow-md hover:bg-blue-600 no-underline"
					>
						Manage my membership
					</ExternalLink>
				</p>
			</div>
		</div>
	</article>
);

export default Page;
