import EmailSubscriptionWidget from "./EmailSubscriptionWidget";
import OurClasses from "./classes/OurClasses";
import EmailLink from "./components/EmailLink";
import Gallery from "./components/Gallery";
import TelLink from "./components/TelLink";
import { CONTACT_EMAIL, CONTACT_PHONE } from "./constants";
import KilnFirings from "./services/kilns/KilnFirings";

export default function Home() {
	return (
		<main className="flex flex-col items-center gap-10 overflow-x-hidden leading-7 py-10">
			<section className="max-w-5xl px-10">
				<h1 className="text-lg md:text-2xl font-medium text-zinc-500">
					Art & Ceramics Studio in Brussels
				</h1>
				{/* TODO: have the title to use Inter Display (2023-05-17: in beta) */}
				<p className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter my-6">
					Learn. Grow. Share.
				</p>
				<p>
					Malina More Studio is a beautiful 180m<sup>2</sup> ceramics, arts &
					crafts studio in Brussels, next to Anderlecht City Hall.
				</p>
				<p>
					We host weekly ceramic classes and offer kiln rentals as well as
					co-working and event space.
				</p>
				<p>
					You can reach us at{" "}
					<EmailLink
						email={CONTACT_EMAIL}
						className="text-sky-500 hover:underline"
					/>{" "}
					or{" "}
					<TelLink
						phoneNumber={CONTACT_PHONE}
						className="text-sky-500 hover:underline"
					/>{" "}
					if you have any questions.
				</p>
			</section>

			<section className="max-w-2xl md:!py-0 text-center">
				<h2 className="font-bold text-xl mb-4">
					Sign up to the monthly newsletter
				</h2>
				<EmailSubscriptionWidget />
			</section>
			{/*
			<section className="self-stretch overflow-hidden text-center">
				<h2 className="font-bold text-xl">Schedule a class</h2>
				<BookingCalendar />
			</section> */}

			<section className="max-w-5xl flex flex-col gap-5">
				<Gallery
					photos={[
						{ src: "/images/photos/gallery/1.jpg" },
						{ src: "/images/photos/gallery/2.jpg" },
						{ src: "/images/photos/gallery/3.jpg" },
						{ src: "/images/photos/gallery/4.jpg" },
					]}
				/>
			</section>

			<section id="our-classes" className="bg-zinc-100 w-full py-5">
				<OurClasses />
			</section>

			<section id="services" className="bg-zinc-100 w-full py-5">
				<div className="px-10">
					<h1 className="max-w-5xl font-bold text-2xl text-center mx-auto mb-5">
						Other services available
					</h1>
					<div className="grid justify-around grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4 max-w-5xl mx-auto">
						<div className="flex flex-col gap-2 space-y-1 md:space-y-0.5">
							<p className="font-bold text-lg">Co-working space</p>
							<p>
								We have a large, open space available for co-working.
								Art tools and materials are available for use and we can
								make extra services available upon request. Please
								contact us at least 3 days in advance to reserve a spot.
							</p>
							<ul className="list-dash pl-4">
								<li>1 table or desk: 25 € / 4 hours</li>
								<li>Materials: Prices vary</li>
								<li>Discounts for regular access</li>
							</ul>
						</div>
						<KilnFirings className="flex flex-col gap-2 space-y-1 md:space-y-0.5" />
					</div>
				</div>
			</section>
		</main>
	);
}
