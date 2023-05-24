import { Inter } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<GoogleAnalytics />
			<body className={`${inter.className} relative min-h-screen`}>
				<Header />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
