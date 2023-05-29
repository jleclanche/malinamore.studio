import EmailLink from "@/app/components/EmailLink";
import { CONTACT_EMAIL } from "@/app/constants";

const ThankYouPage = () => (
	<main className="py-16">
		<div className="mx-auto max-w-3xl px-6 text-center lg:px-8 prose">
			<div className="mx-auto max-w-2xl">
				<h1 className=" text-gray-900 sm:text-4xl">Thank you!</h1>
			</div>
			<p>
				You will receive a receipt by e-mail shortly. To use your gift card,
				please <EmailLink email={CONTACT_EMAIL}>send us an e-mail</EmailLink>{" "}
				before booking your lesson.
			</p>
			<p>We look forward to seeing you soon! 😊</p>
		</div>
	</main>
);

export default ThankYouPage;
