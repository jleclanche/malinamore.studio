import ExternalLink from "@/app/components/ExternalLink";

const BookNow = () => (
	<div className="flex justify-center">
		<ExternalLink
			href="https://cal.com/malina-more/fall-in-love-with-clay"
			className="w-fit text-white bg-green-700 px-5 py-2 rounded-md shadow-md hover:bg-green-600 no-underline"
		>
			Book now (65 €)
		</ExternalLink>
	</div>
);

const Page = () => (
	<article className="p-10 mx-auto prose">
		<h1>Fall in Love with Clay</h1>
		<p>
			<strong>Beginner-friendly lesson (In English).</strong> In this 2 hour
			session, you will be given 500g of clay and Anna will teach you how to make
			the plate/bowl/cup of your dreams.
		</p>
		<p>
			Lesson themes: Hand-build ceramic dishes, learn to model clay, work with
			underglaze, paint your piece.
		</p>
		<p>
			The instructor will do final glazing and both kiln firings for you. Your
			creation will be ready for pickup within 3 weeks after the lesson. You will
			even be able to use it for your next breakfast!
		</p>

		<p>Lesson is followed by 30 min networking session with drinks included.</p>

		<BookNow />

		<div className="grid grid-cols-4 col-span-2 gap-2 mb-10">
			<div className=" overflow-hidden rounded-xl col-span-2 max-h-[14rem]">
				<img
					className="h-full w-full rounded-xl object-cover"
					src="/images/photos/gallery/students/1.jpg"
					alt=""
				/>
			</div>
			<div className=" overflow-hidden rounded-xl col-span-2 max-h-[14rem]">
				<img
					className="h-full w-full rounded-xl object-cover"
					src="/images/photos/gallery/students/2.jpg"
					alt=""
				/>
			</div>
			<div className=" overflow-hidden rounded-xl col-span-4 max-h-[20rem]">
				<img
					className="h-full w-full rounded-xl object-cover"
					src="/images/photos/gallery/students/3.jpg"
					alt=""
				/>
			</div>
		</div>
		<BookNow />
	</article>
);

export default Page;
