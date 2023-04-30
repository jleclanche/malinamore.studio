"use client"
import { FormEvent, useState } from "react";

const EmailSubscriptionWidget = () => {
	const [subscriptionStatus, setSubscriptionStatus] = useState(0);

	const submitSubscriberEmail = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const input = form.email as HTMLInputElement;
		const email = input.value.trim();

		// * structure used by the Mailjet-generated form
		const body = JSON.stringify({
			Email: email,
			Fields: []
		})

		// * `/subscribe` is a rewrite
		// * see next.config.js
		const request = new Request("/subscribe", {
			method: "POST",
			body
		})

		await fetch(request).then(response => {
			setSubscriptionStatus(response.status)
		})
	}

	return (
		<div className="flex flex-col gap-y-4 md:gap-y-6">
			<form method="POST" onSubmit={submitSubscriberEmail} className="flex flex-col md:flex-row flex-wrap max-w-sm gap-4">
				{
					(() => {
						switch (subscriptionStatus) {
							case 0:
								return (
									<>
										<input type="email" name="email" autoComplete="email" placeholder="email@example.com" className="flex-[3] bg-gray-200 p-3 rounded-md" />
										<button type="submit" className="flex flex-1 min-w-8 basis-8 p-3 justify-center items-center bg-black text-white rounded-md font-bold">Sign up</button>
									</>
								)
							case 200:
								return (
									<>
										<input type="email" name="email" autoComplete="email" placeholder="email@example.com" className="flex-[3] bg-gray-200 p-3 rounded-md" />
										<button disabled={true} className="flex flex-1 min-w-8 basis-8 p-3 justify-center items-center bg-black text-white rounded-md font-bold">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" className="!h-8 !w-8 -my-1">
												<path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
											</svg>
										</button>
										<span>Thank you! Check your email to confirm your subscription</span>
									</>
								)
							case 500:
								return (
									<>
										<input type="email" name="email" autoComplete="email" placeholder="email@example.com" className="flex-[3] bg-gray-200 p-3 rounded-md" />
										<button type="submit" className="flex flex-1 min-w-8 basis-8 p-3 justify-center items-center bg-black text-white rounded-md font-bold">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="!h-8 !w-8 -my-1">
												<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z" />
											</svg>
										</button>
										<span>This email address appears to be invalid. Please check it and press the button to submit again</span>
									</>
								)
						}
					})()
				}
			</form>
		</div>
	)
}

export default EmailSubscriptionWidget;