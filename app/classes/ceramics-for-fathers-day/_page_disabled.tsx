import ExternalLink from "@/app/components/ExternalLink";

const BookNow = () => (
	<div className="flex justify-center">
		<ExternalLink
			href="https://cal.com/malina-more/ceramics-for-fathers-day?duration=150&month=2023-06&date=2023-06-11"
			className="w-fit text-white bg-green-700 px-5 py-2 rounded-md shadow-md hover:bg-green-600 no-underline"
		>
			Book now (55 €)
		</ExternalLink>
	</div>
);

const BuyAsGift = () => (
	<div className="flex justify-center">
		<ExternalLink
			href="https://buy.stripe.com/5kA3eUbAw03nbzW3cc?prefilled_promo_code=FATHERSDAY"
			className="w-fit text-white bg-green-700 px-5 py-2 rounded-md shadow-md hover:bg-green-600 no-underline"
		>
			Buy as a Gift Card (55 €)
		</ExternalLink>
	</div>
);

const Page = () => (
	<article className="p-10 mx-auto prose">
		<h1>Ceramics for Fathers&apos; Day</h1>
		<p>
			<strong>Beginner-friendly lesson (In English).</strong> In this 2 hour
			session, you will be given 500g of clay and Anna will teach you how to make
			a ceramics dish or piece of your choosing.
		</p>

		<strong className="flex justify-center mb-3">
			Special Price for Father&apos;s Day: 55 € (regular price 65 €)
		</strong>

		<h2>Lesson details</h2>
		<p>
			Lesson themes: Hand-build ceramic dishes, learn to model clay, work with
			underglaze, paint your piece.
		</p>
		<p>
			<strong>Fathers&apos; Day Special</strong>: Make your piece a gift for
			Fathers&apos; Day!
		</p>
		<p>
			The instructor will do final glazing and both kiln firings for you. Your
			creation will be ready for pickup within four weeks after the lesson. You
			will even be able to use it for your next breakfast!
		</p>

		<p>Lesson is followed by 30 min networking session with drinks included.</p>
		<div className="flex gap-3 justify-center">
			<BookNow />
		</div>

		<h2>Buy a gift card</h2>

		<p>
			You can buy a ceramics lesson as a gift card at our special price until
			Fathers&apos; Day. The gift card is valid for any lesson in the next 6
			months!
		</p>

		<div className="flex gap-3 justify-center">
			<BuyAsGift />
		</div>
		<div className="grid grid-cols-4 col-span-2 gap-2 mb-10">
			<div className="overflow-hidden rounded-xl col-span-2 max-h-[14rem]">
				<img
					className="h-full w-full rounded-xl object-cover"
					src="/images/photos/gallery/students/1.jpg"
					alt=""
				/>
			</div>
			<div className="overflow-hidden rounded-xl col-span-2 max-h-[14rem]">
				<img
					className="h-full w-full rounded-xl object-cover"
					src="/images/photos/gallery/students/2.jpg"
					alt=""
				/>
			</div>
			<div className="overflow-hidden rounded-xl col-span-4 max-h-[20rem]">
				<img
					className="h-full w-full rounded-xl object-cover"
					src="/images/photos/gallery/students/3.jpg"
					alt=""
				/>
			</div>
		</div>
		<div className="flex gap-3 justify-center">
			<BookNow />
			<BuyAsGift />
		</div>
	</article>
);

export default Page;
