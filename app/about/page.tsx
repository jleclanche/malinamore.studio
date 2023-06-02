import ExternalLink from "../components/ExternalLink";

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
			<img
				src="/images/photos/opening_party.jpg"
				className="rounded-lg w-3/4 mx-auto"
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
				Malina More was founded by{" "}
				<ExternalLink href="https://instagram.com/malina_more">
					Anna Radovenchik
				</ExternalLink>
				, a ceramics artist with a passion for teaching. Giving as much care and
				attention to the studio as she does to her porcelain, Anna created a
				spacious yet cozy studio, fully-equipped for classes and workshops in
				ceramics and other arts & crafts.
			</p>
		</section>
	</main>
);

export default AboutPage;
