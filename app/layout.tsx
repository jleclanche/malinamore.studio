import { Inter } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";
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
		<html className="min-h-screen" lang={lang}>
			<body className={`${inter.className} min-h-full`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
