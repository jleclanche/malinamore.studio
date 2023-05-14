import {
	ClockIcon,
	CubeIcon,
	EnvelopeIcon,
	InformationCircleIcon,
	LanguageIcon,
	MapIcon,
	ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import EmailSubscriptionWidget from "./EmailSubscriptionWidget";
import EmailLink from "./components/EmailLink";
import ExternalLink from "./components/ExternalLink";
import Gallery from "./components/Gallery";

const email = "contact@malinamore.studio";

export default function Home() {
	return (
		<main
			className={clsx(
				"flex flex-col items-center overflow-x-hidden",
				"gap-10",
				"[&_a]:text-sky-500 [&_a:hover]:underline",
				// add regular heading spacing
				"[&>*>h1+*]:!mt-8",
				"[&_ul]:pl-6 [&_ul]:py-2 [&_ul]:space-y-1 [&_ul.list-dash>li]:pl-1",
				"[&_svg]:h-5 [&_svg]:w-5 md:[&_svg]:h-4 md:[&_svg]:w-4 [&_svg]:inline",
			)}
		>
			<section className="max-w-5xl py-5">
				<p className="text-lg md:text-2xl font-medium text-zinc-500">
					Art & Ceramics Studio in Brussels
				</p>

				{/* TODO: have the title to use Inter Display (2023-05-10: in beta) */}
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

			<section
				id="our-classes"
				className="bg-zinc-100 w-full max-w-[100vw] py-5 flex flex-col gap-5"
			>
				<h1 className="font-bold text-2xl text-center">Our classes</h1>

				<div className="mx-auto">
					<p>
						<strong>Discover the art of ceramics with Anna!</strong>{" "}
						Talented ceramist since 2010 and with seven years of experience
						teaching the art, you will learn from the best in the craft.
					</p>
					<p>
						Each lesson lasts ~2.5 hours and includes 1kg clay per person,
						equipment, and complimentary tea or coffee. Members get 20% off
						all lessons!
					</p>
				</div>

				<div className="grid justify-around grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4 mx-auto">
					<div>
						<p className="font-bold text-lg">Group lessons</p>
						<p className="text-sm text-zinc-500 flex md:items-center gap-x-1">
							<ClockIcon /> Our weekly group lessons begin in June!
						</p>
						<p className="text-sm text-zinc-500 flex items-center gap-x-1">
							<EnvelopeIcon />
							<EmailLink email={email}>Contact us</EmailLink> to reserve a
							spot
						</p>
						<ul className="list-dash">
							<li>
								Free-style ceramics (Weekly - good for beginners): 40 €
							</li>
							<li>Introduction to ceramics (Monthly - 10 spots): 45 €</li>
							<li>Introduction to glazing (Monthly - 10 spots): 50 €</li>
							<li>More coming soon!</li>
						</ul>
					</div>
					<div>
						<p className="font-bold text-lg">On-demand classes</p>
						<p className="text-sm text-zinc-500 flex md:items-center gap-x-1">
							<ClockIcon />
							<EmailLink email={email}>Contact us</EmailLink> at least 5
							days in advance
						</p>
						<p className="text-sm text-zinc-500 flex items-center gap-x-1">
							<LanguageIcon /> Available in English or French
						</p>
						<ul className="list-dash">
							<li>1-3 people: 100 € / 85 € / 75 € / person</li>
							<li>4+ people: 50 € / lesson / person</li>
							<li>10+ people & birthdays: custom prices available</li>
						</ul>
					</div>
				</div>
			</section>

			<section
				id="what-we-do"
				className="bg-zinc-100 w-full max-w-[100vw] child:max-w-5xl child:mx-auto py-5"
			>
				<h1 className="font-bold text-2xl text-center">
					Other services available
				</h1>

				<div
					className={clsx(
						"grid justify-around grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4",
						"child:space-y-1 md:child:space-y-0.5",
					)}
				>
					<div>
						<p className="font-bold text-lg">Co-working space</p>
						<p className="text-sm text-zinc-500 flex md:items-center gap-x-1">
							<ClockIcon /> each lesson lasts ~2 hours and includes
							complimentary tea or coffee
						</p>
						<p className="text-sm text-zinc-500 flex items-center gap-x-1">
							<CubeIcon /> price includes standard equipment rental,
							materials
						</p>
						<ul className="list-dash">
							<li>1-3 people: 100 € / 85 € / 75 € / person</li>
							<li>4+ people: 50 € / lesson / person</li>
							<li>
								15+ people:{" "}
								<EmailLink email={email}>contact us</EmailLink>
							</li>
						</ul>
					</div>

					<div>
						<p className="font-bold text-lg">Kiln Firings</p>
						<p className="text-sm text-zinc-500 flex items-center gap-x-1">
							<InformationCircleIcon /> Prices indicative for a height of
							up to 5cm. Kiln plate diameter: 35cm
						</p>
						<p className="text-sm text-zinc-500 flex items-center gap-x-1">
							<ReceiptPercentIcon /> 10% off for members and bisque
							firings
						</p>
						<ul className="list-dash">
							<li>Temperatures: 950°C / 1250°C</li>
							<li>Quarter plate: 6 € / 8 €</li>
							<li>Half plate: 11 € / 15 €</li>
							<li>Full plate: 20 € / 25 €</li>
							<li>Or 100 € / 120 € for a full kiln load</li>
						</ul>
						<p className="text-sm text-zinc-500">
							We fire our kilns at least once a week, on Fridays (pickup
							on Mondays).
						</p>
						<p className="text-sm text-zinc-500">
							For special shapes, bulk orders, and custom temperatures,{" "}
							<EmailLink email={email}>contact us</EmailLink>.
						</p>
					</div>
				</div>
			</section>

			<section id="about" className="!py-12 max-w-5xl">
				<h1 className="font-bold text-2xl text-center">About Malina More</h1>
				<p>
					Malina More ASBL was founded by Anna Radovenchik, by her wish of
					sharing her admiration of art and her passion for porcelain.
				</p>
				<p>
					Based in the Brussels Capital region and co-managed by Anna and her
					partner Jerome, the ASBL&apos;s goals are to teach and showcase the
					arts of ceramics, gravure, photography, and other fine arts.
				</p>
				<p>
					Are you looking for work or volunteering opportunities, please{" "}
					<EmailLink email={email}>reach out</EmailLink>.
				</p>
			</section>

			<section
				id="contact"
				className="w-full !max-w-[100vw] bg-black text-white flex justify-center !px-0"
			>
				<div className="grid grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4 w-full max-w-5xl p-5">
					<div>
						<h1 className="font-semibold text-xl">Find us</h1>
						<ul className="!pl-0 text-zinc-200 child:flex child:items-center child:gap-x-2">
							<li>
								<MapPinIcon title="Address" />
								<ExternalLink href="https://goo.gl/maps/cpYJ3jmpV7xyLUneA?coh=178571&entry=tt">
									Rue Rossini 19, 1070 Anderlecht
								</ExternalLink>
							</li>
							<li>
								<MapIcon />
								Metro station: Clemenceau
							</li>
							<li>
								<EnvelopeIcon title="Email address" />{" "}
								<EmailLink email={email} />
							</li>
						</ul>
					</div>
					<div>
						<h1 className="font-semibold text-xl">Opening hours</h1>
						<ul className="gap-y-1 text-zinc-200 !px-0">
							<li>Mon – sat: 13:00 – 18:00 (appointment required)</li>
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
