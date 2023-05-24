import EmailLink from "@/app/components/EmailLink";
import { CONTACT_EMAIL } from "@/app/constants";

const ThankYouPage = () => (
	<main className="py-16">
		<div className="mx-auto max-w-3xl px-6 text-center lg:px-8 prose">
			<div className="mx-auto max-w-2xl">
				<h1 className=" text-gray-900 sm:text-4xl">Thank you!</h1>
			</div>
			<p>
				Your booking has been confirmed! You will receive an email confirmation
				shortly. If you do not, or you have any questions, please contact us at{" "}
				<EmailLink email={CONTACT_EMAIL} />.
			</p>
			<p>We look forward to seeing you soon! 😊</p>
		</div>
	</main>
);

export default ThankYouPage;
