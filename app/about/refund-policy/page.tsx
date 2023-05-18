import Content from "./content.mdx";

const TeamPage = () => (
	<main className="py-16 flex flex-col gap-5">
		<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
			<div className="mx-auto max-w-2xl">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Refund Policy
				</h1>
			</div>
		</div>
		<article className="prose mx-auto">
			<Content />
		</article>
	</main>
);

export default TeamPage;
