import FullCircleIcon from "@/app/components/icons/fullCircleIcon";
import HalfCircleIcon from "@/app/components/icons/halfCircleIcon";
import KilnIcon from "@/app/components/icons/kilnIcon";
import QuarterCircleIcon from "@/app/components/icons/quarterCircleIcon";
import TemperatureIcon from "@/app/components/icons/temperatureIcon";
import { InformationCircleIcon, ReceiptPercentIcon } from "@heroicons/react/24/outline";
import EmailSubscriptionWidget from "./EmailSubscriptionWidget";
import OurClasses from "./classes/OurClasses";
import EmailLink from "./components/EmailLink";
import Gallery from "./components/Gallery";
import TelLink from "./components/TelLink";
import { CONTACT_EMAIL, CONTACT_PHONE } from "./constants";

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
						<div className="flex flex-col gap-2 space-y-1 md:space-y-0.5">
							<p className="font-bold text-lg">Kiln Firings</p>
							<p className="text-sm text-zinc-500 flex gap-x-1">
								<InformationCircleIcon className="w-5 h-5" /> Prices
								indicative for a height of up to 5cm. Kiln plate
								diameter: 35cm
							</p>
							<p className="text-sm text-zinc-500 flex gap-x-1">
								<ReceiptPercentIcon className="w-5 h-5" /> 10% off for
								members and bisque firings
							</p>
							<ul className="list-dash">
								<li className="grid grid-cols-[2fr_1fr_1fr] auto-cols-fr gap-x-2 font-bold">
									<span className="flex items-center gap-x-2">
										<TemperatureIcon /> Temperature
									</span>
									<span>950°C</span>
									<span>1250°C</span>
								</li>
								<li className="grid grid-cols-[2fr_1fr_1fr] gap-x-2">
									<span className="flex items-center gap-x-2">
										<QuarterCircleIcon /> Quarter plate
									</span>
									<span>6 €</span>
									<span>8 €</span>
								</li>
								<li className="grid grid-cols-[2fr_1fr_1fr] gap-x-2">
									<span className="flex items-center gap-x-2">
										<HalfCircleIcon /> Half plate
									</span>
									<span>11 €</span>
									<span>15 €</span>
								</li>
								<li className="grid grid-cols-[2fr_1fr_1fr] gap-x-2">
									<span className="flex items-center gap-x-2">
										<FullCircleIcon /> Full plate
									</span>
									<span>20 €</span>
									<span>25 €</span>
								</li>
								<li className="grid grid-cols-[2fr_1fr_1fr] gap-x-2">
									<span className="flex items-center gap-x-2">
										<KilnIcon /> Full kiln
									</span>
									<span>100 €</span>
									<span>120 €</span>
								</li>
							</ul>
							<p className="text-sm text-zinc-500">
								We fire our kilns at least once a week, on Fridays. You
								will be able to pick up your piece the following Monday.
								For special shapes, bulk orders, and custom
								temperatures,{" "}
								<EmailLink email={CONTACT_EMAIL}>contact us</EmailLink>.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
