import EmailLink from "@/app/components/EmailLink";
import { CONTACT_EMAIL } from "@/app/constants";

const BookNow = () => (
	<div className="flex justify-center">
		<EmailLink
			email={CONTACT_EMAIL}
			subject="Booking a team building event"
			className="w-fit text-white bg-green-700 px-5 py-2 rounded-md shadow-md hover:bg-green-600 no-underline"
		>
			Contact us to book
		</EmailLink>
	</div>
);

const Page = () => (
	<article className="p-10 mx-auto prose">
		<h1>Creative Team Building: Hand-modeling Ceramics</h1>
		<p>
			Engage your team in a unique, hands-on experience that is both fun and
			therapeutic. Our ceramics workshop is the perfect blend of creativity and
			camaraderie. The guided lesson is beginner-friendly and conducted in English
			or French.
		</p>
		<p>
			Lesson themes: Hand-build ceramic dishes, learn to model clay, work with
			underglaze, paint your piece.
		</p>
		<p>
			In this 2-hour workshop, each participant will be provided with 500g of clay
			and expert guidance from Anna, our accomplished ceramic artist. She will
			instruct your team on how to hand-build a ceramic plate or bowl of their own
			design. Participants will not only learn to model clay but also get the
			chance to experiment with underglaze and paint their creations.
		</p>

		<p>
			The therapeutic nature of working with clay has been well documented. It can
			reduce stress and anxiety, stimulate creativity, and promote an overall
			sense of wellbeing. These benefits, combined with the opportunity to engage
			in a unique shared experience, make our workshop a standout option for
			team-building events.
		</p>

		<p>
			Our ceramics workshop can accommodate groups of up to 30 people, making it a
			perfect choice for teams large and small. The instructor will handle the
			final glazing and both kiln firings, and the creations will be ready for
			pickup within three weeks of the workshop. Your team members will be
			thrilled to take home a piece of art they&apos;ve made themselves and use it
			for their morning routine, creating a lasting memory of the event.
		</p>

		<p>
			This event includes self-serve coffee, tea or soft drinks. Please book at
			least five days in advance.
		</p>

		<p>
			For any questions or to book a team building group event, please book at
			least five days in advance at <EmailLink email={CONTACT_EMAIL} />.
		</p>

		<BookNow />

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
		<BookNow />
	</article>
);

export default Page;
