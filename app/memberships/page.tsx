import EmailLink from "../components/EmailLink";
import { CONTACT_EMAIL } from "../constants";

const Page = () => (
	<article className="py-10">
		<div className="flex flex-col gap-5 px-10">
			<h1 className="font-bold text-2xl text-center">Memberships</h1>
			<div className="flex flex-col gap-y-1.5 max-w-5xl mx-auto">
				<p>
					Becoming a member is the best way to support Malina More ASBL. As a
					member, you get cheaper rates on kiln firings, lessons and
					workshops. Our highest-tier members get one free lesson per month.
				</p>
				<p>
					We have a minimum membership fee of 10€ / month, with higher tiers
					at 20€ and 50€ / month. A 10% discount is available if you wish to
					pay yearly.
				</p>
				<p>
					More details coming soon. If you are already interested,{" "}
					<EmailLink email={CONTACT_EMAIL} className="text-blue-400">
						contact us to become a member
					</EmailLink>
					!
				</p>
			</div>
		</div>
	</article>
);

export default Page;
