/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")();

const nextConfig = {
	experimental: {
		appDir: true,
	},
	async rewrites() {
		return [
			{
				source: "/subscribe",
				destination: "https://0z5gh.mjt.lu/wgt/0z5gh/z2t/subscribe?c=8214db8c",
			},
			{
				source: "/r/meetup",
				destination: "https://www.meetup.com/Malina-More/",
			},
			{
				source: "/r/facebook",
				destination: "https://facebook.com/MalinaMoreStudio",
			},
			{
				source: "/r/instagram",
				destination: "https://instagram.com/malina_more_studio",
			},
			{
				source: "/classes/ceramics-for-fathers-day",
				destination: "/classes/fall-in-love-with-clay",
			}
		];
	},
	experimental: {
		typedRoutes: true,
	},
};

module.exports = withMDX(nextConfig);
