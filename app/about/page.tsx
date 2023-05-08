import Image from "next/image";
import StudioInside from "@/app/assets/images/studio_inside.jpg";

const AboutPage = () => (
	<main className="flex flex-col items-center py-16">
		<section className="max-w-7xl px-6 lg:px-8">
			<div className="max-w-2xl text-center">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					About Malina More
				</h1>
				<p className="mt-4 text-lg leading-8 text-gray-600">
					What makes us special
				</p>
			</div>
		</section>
		<section className="max-w-7xl mt-10 px-6 lg:px-8">
			<Image
				src={StudioInside}
				className="rounded-lg w-3/4 mx-auto"
				unoptimized
				alt="Inside Malina More"
			/>
		</section>
		<section className="max-w-7xl mt-12 px-6 lg:px-8">
			<p className="max-w-2xl mx-auto leading-6">
				Malina More Studio is a beautiful 180m<sup>2</sup> ceramics, arts &
				crafts studio in Brussels, within walking distance of Anderlecht City
				Hall and metro station Clemenceau.
			</p>
			<p className="max-w-2xl mx-auto mt-4 leading-6">
				Malina More was founded by Anna Radovenchik, a ceramics artist with a
				passion for teaching. Giving as much care and attention to the studio as
				she does to her porcelain, Anna – along with her partner Jerome – has
				managed to create a cozy, spacious studio equipped with everything
				necessary for comfortable work.
			</p>
		</section>
	</main>
);

export default AboutPage;
