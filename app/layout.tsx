import { Inter } from "next/font/google";
import { LocalBusiness, WithContext } from "schema-dts";
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
	description: "A beautiful 180m2 ceramics, arts & crafts studio in Brussels.",
};

const jsonLd: WithContext<LocalBusiness> = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Malina More Studio",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Rue Rossini 19",
		addressLocality: "Anderlecht",
		addressRegion: "Brussels",
		postalCode: "1070",
		addressCountry: "Belgium",
	},
	url: "https://www.malinamore.studio",
	email: "contact@malinamore.studio",
	telephone: "+32 2 894 63 38",
	logo: "https://malinamore.studio/icon.png",
	description: metadata.description,
	smokingAllowed: false,
	sameAs: [
		"https://www.instagram.com/malina_more_studio",
		"https://www.facebook.com/MalinaMoreStudio",
	],
	parentOrganization: {
		"@type": "Organization",
		name: "Malina More ASBL",
		legalName: "Malina More ASBL",
		nonprofitStatus: "NonprofitSBBI",
		url: "https://malinamore.be",
		email: "contact@malinamore.be",
		foundingDate: "2023-04-01",
		vatID: "BE0800279001",
	},
};

export default function RootLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang="en">
			<head>
				<GoogleAnalytics />
			</head>
			<body className={`${inter.className} relative min-h-screen`}>
				<Header />
				<div>{children}</div>
				<Footer />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	);
}
