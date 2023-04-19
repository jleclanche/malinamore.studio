import './globals.css'

import Footer from './Footer'
import Header from './Header'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Malina More Studio',
	description: 'Art & ceramics studio in Brussels',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html className="min-h-screen" lang="en">
			<body className={`${inter.className} min-h-full`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
