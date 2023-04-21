import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import {
	ArchiveBoxIcon,
	CalendarDaysIcon,
	ClockIcon,
	CubeIcon,
} from "@heroicons/react/24/outline";
import {
	AtSymbolIcon,
	BookOpenIcon,
	BuildingLibraryIcon,
	MapPinIcon,
} from "@heroicons/react/24/solid";
import BelgianMetroLogo from "./components/BelgianMetroLogo";

import EmailSubscriptionWidget from "./EmailSubscriptionWidget";
import Crescents from "./assets/images/crescents.jpg";
import Handed from "./assets/images/handed.jpg";
import Prime from "./assets/images/prime.jpg";
import Six from "./assets/images/six.jpg";

const mailto = "mailto:contact@malinamore.studio";

export default function Home() {
	return (
		<main
			className={clsx(
				"flex flex-col items-center overflow-x-hidden",
				// INTERNAL STYLESHEET
				"child:p-[5%] child:max-w-5xl child:space-y-4",
				"[&_a]:text-sky-500 [&_a:hover]:underline",
				// add regular heading spacing
				"[&>*>h1+*]:!mt-8",
				"[&_ul]:pl-6 [&_ul]:py-2 [&_ul]:space-y-1 [&_ul.list-dash>li]:pl-1",
				"[&_svg]:h-5 [&_svg]:w-5 md:[&_svg]:h-4 md:[&_svg]:w-4 [&_svg]:inline"
			)}
		>
			<section>
				<p className="text-lg md:text-2xl font-medium text-zinc-500">
					Art & Ceramics Studio in Brussels
				</p>

				{/* TODO: have the title to use Inter Display (2023-04-18: in beta) */}
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter my-6">
					Learn. Grow. Share.
				</h1>

				<p>
					Malina More Studio is a beautiful 180m<sup>2</sup> ceramics, arts &
					crafts studio in Brussels, next to Anderlecht City Hall.
				</p>
				<p>
					We host weekly ceramic classes, kiln rental, and can provide
					co-working and event space. To find out more, contact us at{" "}
					<Link href={mailto}>contact@malinamore.studio</Link>.
				</p>
			</section>

			<section className="md:!py-0">
				<h2 className="font-bold text-xl">Sign up to the monthly newsletter</h2>
				<EmailSubscriptionWidget />
			</section>

			<section>
				<div
					className={clsx(
						"flex flex-col md:flex-row items-center gap-x-8 gap-y-4 w-[125%] max-w-[125%] -ml-[12.5%]",
						"child:flex child:items-center child:h-48 child:rounded-md child:object-cover"
					)}
				>
					<Image
						src={Prime}
						unoptimized
						alt="A flower-shaped blue vase holding a white flower, next to a set of similar colored vases"
					/>
					<Image
						src={Handed}
						unoptimized
						alt="A hand holding a stack of ceramic dishes"
					/>
					<Image
						src={Crescents}
						unoptimized
						alt="Two crescent-shaped plates, behind a blurred green plant"
					/>
					<Image src={Six} unoptimized alt="Six small colorful deep dishes" />
				</div>
			</section>

			<section
				id="what-we-do"
				className="bg-zinc-100 w-full !max-w-[100vw] child:max-w-5xl child:mx-auto"
			>
				<h1 className="font-bold text-2xl text-center">What We Do</h1>

				<div
					className={clsx(
						"grid justify-around grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4",
						"child:space-y-1 md:child:space-y-0.5"
					)}
				>
					<div>
						<p className="font-bold text-lg">Ceramics Classes</p>
						<p className="text-sm text-zinc-500 flex md:items-center gap-x-1">
							<ClockIcon /> each lesson lasts 2 ~ 2
							<span className="fraction">1/2</span> hours
						</p>
						<p className="text-sm text-zinc-500 flex items-center gap-x-1">
							<CubeIcon /> price includes equipment rental and materials
						</p>
						<ul className="list-dash">
							<li>1-3 people: 100 € / lesson / person</li>
							<li>4+ people: 50 € / lesson / person</li>
						</ul>
					</div>

					<div>
						<p className="font-bold text-lg">Kiln Firings</p>
						<p className="text-sm text-zinc-500 flex items-center gap-x-1">
							<CalendarDaysIcon /> we fire our kilns at least once, on
							Fridays
						</p>
						<p className="text-sm text-zinc-500 flex items-center gap-x-1">
							<ArchiveBoxIcon /> pickups are available on Mondays
						</p>
						<ul className="list-dash">
							<li>
								Under 15cm<sup>3</sup>: 3 € / piece
							</li>
							<li>
								Under 30cm<sup>3</sup>: 6 € / piece
							</li>
						</ul>
						<p className="text-sm text-zinc-500">
							For larger pieces, bulk orders, and special firings,{" "}
							<Link href={mailto}>contact us</Link>
						</p>
					</div>
				</div>
			</section>

			<section id="about" className="!py-12">
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
					<Link href={mailto}>reach out to us</Link>.
				</p>
			</section>

			<section
				id="contact"
				className="w-full !max-w-[100vw] bg-black text-white flex justify-center !px-0"
			>
				<div className="grid grid-flow-row-dense md:grid-flow-col-dense gap-x-8 gap-y-4 w-full max-w-5xl px-[5%]">
					<div>
						<h1 className="font-semibold text-xl">Find us</h1>
						<ul className="!pl-0 text-zinc-200 child:flex child:items-center child:gap-x-2">
							<li>
								<MapPinIcon /> Rue Rossini 19
							</li>
							<li>
								<BuildingLibraryIcon /> Anderlecht City Hall
							</li>
							<li>
								<BelgianMetroLogo /> M. Clemenceau
							</li>
							<li>
								<AtSymbolIcon />{" "}
								<Link href={mailto}>contact@malinamore.studio</Link>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="font-semibold text-xl">Opening hours</h1>
						<ul className="!pl-0 grid grid-cols-2 grid-flow-dense text-zinc-200 child:flex child:items-center">
							<li>Mon—Fri:</li>
							<li>13:00—18:00</li>

							<li className="self-start">Saturday:</li>
							<li className="!inline-block">
								12:00—19:00{" "}
								<span className="block gap-x-1">
									<BookOpenIcon /> classes only
								</span>
							</li>

							<li>Sunday:</li>
							<li className="text-zinc-400">
								<span className="line-through">closed</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
}
