import ExternalLink from "@/app/components/ExternalLink";
import InstagramLogo from "@/app/components/icons/InstagramLogo";
import LinkedInLogo from "@/app/components/icons/LinkedInLogo";
import WebsiteLogo from "@/app/components/icons/WebsiteLogo";

const people = [
	{
		name: "Anna Radovenchik",
		role: "Ceramist • President • Administrator",
		image: "/images/team/anna.jpg",
		instagram: "https://instagram.com/malina_more",
	},
	{
		name: "Jerome Leclanche",
		role: "Treasurer • Administrator",
		image: "/images/team/jerome.jpg",
		website: "https://leclan.ch",
		linkedin: "https://www.linkedin.com/in/jleclanche",
	},
	{
		name: "Daria Shcherbak",
		role: "Secretary • Administrator",
		image: "/images/team/daria.jpg",
		linkedin: "https://www.linkedin.com/in/daria-shcherbak-56747a102",
	},
	{
		name: "Sooyoung Lee",
		role: "Volunteer • Manager • Coordinator",
		image: "/images/team/sooyoung.jpg",
	},
];

const TeamPage = () => (
	<main className="py-16">
		<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
			<div className="mx-auto max-w-2xl">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Meet the team
				</h1>
				<p className="mt-4 text-lg leading-8 text-gray-600">
					The people behind Malina More
				</p>
			</div>
			<ul className="flex flex-wrap justify-evenly gap-x-8 gap-y-16 max-w-2xl mx-auto mt-20">
				{people.map((person) => (
					<li key={person.name}>
						<img
							className="mx-auto h-56 rounded-full"
							src={person.image}
							alt={`Picture of ${person.name}`}
						/>
						<p className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
							{person.name}
						</p>
						<p className="text-sm leading-6 text-gray-600">{person.role}</p>
						<ul className="mt-6 flex justify-center gap-x-6">
							{person.website ? (
								<li>
									<ExternalLink
										href={person.website}
										className="text-gray-400 hover:text-gray-500"
									>
										<WebsiteLogo />
									</ExternalLink>
								</li>
							) : null}
							{person.instagram ? (
								<li>
									<ExternalLink
										href={person.instagram}
										className="text-gray-400 hover:text-gray-500"
									>
										<InstagramLogo />
									</ExternalLink>
								</li>
							) : null}
							{person.linkedin ? (
								<li>
									<ExternalLink
										href={person.linkedin}
										className="text-gray-400 hover:text-gray-500"
									>
										<LinkedInLogo />
									</ExternalLink>
								</li>
							) : null}
						</ul>
					</li>
				))}
			</ul>
		</div>
	</main>
);

export default TeamPage;
