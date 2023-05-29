import { Inter } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";
import { GA_MEASUREMENT_ID } from "./constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const GA_CODE = `
window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "${GA_MEASUREMENT_ID}", { page_path: window.location.pathname });
`;

const GoogleAnalytics = () => (
	<>
		<script
			async
			src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
		/>
		<script id="google-analytics" dangerouslySetInnerHTML={{ __html: GA_CODE }} />
	</>
);

export const metadata = {
	title: "Malina More Studio",
	description: "Art & ceramics studio in Brussels",
};

export default function RootLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={lang}>
			<head>
				<GoogleAnalytics />
			</head>
			<body className={`${inter.className} relative min-h-screen`}>
				<Header />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
