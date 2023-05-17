import {
	ClockIcon,
	EnvelopeIcon,
	InformationCircleIcon,
	LanguageIcon,
	MapIcon,
	ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import EmailSubscriptionWidget from "./EmailSubscriptionWidget";
import EmailLink from "./components/EmailLink";
import ExternalLink from "./components/ExternalLink";
import Gallery from "./components/Gallery";
import FullCircleIcon from "@/app/components/icons/fullCircleIcon";
import HalfCircleIcon from "@/app/components/icons/halfCircleIcon";
import QuarterCircleIcon from "@/app/components/icons/quarterCircleIcon";
import TemperatureIcon from "@/app/components/icons/temperatureIcon";
import KilnIcon from "@/app/components/icons/kilnIcon";

const email = "contact@malinamore.studio";

export default function Home() {
	return (
		<main className="flex flex-col items-center gap-10 overflow-x-hidden leading-7">
			<section className="max-w-5xl py-5">
				<div className="px-[5%]">
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
						We host weekly ceramic classes, kiln rental, and can provide
						co-working and event space. To find out more, contact us at{" "}
						<EmailLink email={email} />.
					</p>
				</div>
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
				<div className="flex flex-col gap-5 px-[5%]">
					<h1 className="font-bold text-2xl text-center">Our classes</h1>
					<div className="flex flex-col gap-y-1.5 max-w-5xl mx-auto">
						<p>
							<strong>Discover the art of ceramics with Anna!</strong>{" "}
							Talented ceramist with 13 years of practice and 7 years of
							experience teaching the art, you will learn from the best in
							the craft.
						</p>
						<p>
							Each lesson lasts around two-and-a-half hours and includes
							1kg of clay per person, equipment, and complimentary tea or
							coffee. Members get 20% off all lessons!
						</p>
						<p>
							<EmailLink email={email}>Contact us</EmailLink> to book a
							class. For on-demand classes, please book at least 5 days in
							advance. Classes are available in English and French.
						</p>
					</div>
					<div className="grid justify-around grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4 max-w-5xl mx-auto">
						<div>
							<p className="font-bold text-lg">Group lessons</p>
							<ul className="list-dash pl-4 space-y-1 mt-2">
								<li>
									Free-style ceramics: 40 €
									<span className="block text-sm text-zinc-500">
										weekly, good for beginners
									</span>
								</li>
								<li>
									Introduction to ceramics: 45 €
									<span className="block text-sm text-zinc-500">
										monthly, 10 spots
									</span>
								</li>
								<li>
									Introduction to glazing: 50 €
									<span className="block text-sm text-zinc-500">
										monthly, 10 spots
									</span>
								</li>
								<li>More coming soon!</li>
							</ul>
							<p className="text-sm text-zinc-500 flex items-center gap-x-1 mt-1">
								<ClockIcon /> Our weekly group lessons begin in June!
							</p>
						</div>
						<div>
							<p className="font-bold text-lg">On-demand classes</p>
							<ul className="list-dash pl-4  mt-2">
								<li>1 person: 100 € / lesson</li>
								<li>2 people: 85 € / lesson / person</li>
								<li>3 people: 75 € / lesson / person</li>
								<li>4+ people: 50 € / lesson / person</li>
								<li>10+ people & birthdays: custom prices available</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="what-we-do" className="bg-zinc-100 w-full py-5">
				<div className="px-[5%]">
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
								<EmailLink email={email}>contact us</EmailLink>.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="py-12 max-w-5xl">
				<div className="px-[5%]">
					<h1 className="font-bold text-2xl text-center mb-5">
						About Malina More
					</h1>
					<p className="mt-2">
						Malina More ASBL was founded by Anna Radovenchik, by her wish of
						sharing her admiration of art and her passion for porcelain.
					</p>
					<p className="mt-2">
						Based in the Brussels Capital region and co-managed by Anna and her
						partner Jerome, the ASBL&apos;s goals are to teach and showcase the
						arts of ceramics, gravure, photography, and other fine arts.
					</p>
					<p className="mt-2">
						Are you looking for work or volunteering opportunities, please{" "}
						<EmailLink email={email}>reach out</EmailLink>.
					</p>
				</div>
			</section>

			<section
				id="contact"
				className="w-full bg-black text-white flex justify-center"
			>
				<div className="grid grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4 w-full max-w-5xl px-[5%] py-8">
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
								<EmailLink email={email} />
							</li>
						</ul>
					</div>
					<div>
						<h1 className="font-semibold text-xl">Opening hours</h1>
						<ul className="gap-y-1 text-zinc-200">
							<li>Mon – Sat: 13:00 – 18:00 (appointment required)</li>
							<li>
								Sunday: <span className="line-through">closed</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
}
