const EmailSubscriptionWidget = () => {
	return (
		<form method="POST" action="" className="flex gap-3">
			<input
				type="email"
				name="email"
				autoComplete="email"
				placeholder="email@example.com"
				className="bg-gray-200 p-3 rounded-md"
			/>
			<button
				type="submit"
				className="bg-black text-white p-3 rounded-md font-bold"
			>
				Sign up
			</button>
		</form>
	);
};

export default EmailSubscriptionWidget;
