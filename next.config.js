/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")();

const nextConfig = {
	experimental: {
		appDir: true,
	},
	async redirects() {
		return [
			{
				source: "/subscribe",
				destination: "https://0z5gh.mjt.lu/wgt/0z5gh/z2t/subscribe?c=8214db8c",
				permanent: false,
			},
			{
				source: "/memberships/subscribe",
				destination: "https://buy.stripe.com/14k16M6gc8zT47u289",
				permanent: false,
			},
			{
				source: "/billing",
				destination: "https://billing.stripe.com/p/login/9AQ3es9E31kH1heaEE",
				permanent: false,
			},
			{
				source: "/calendar",
				destination:
					"https://lu.ma/malinamore.studio?utm_source=malinamore.studio&utm_medium=redirect",
				permanent: false,
			},
			{
				source: "/r/meetup",
				destination: "https://www.meetup.com/Malina-More/",
				permanent: false,
			},
			{
				source: "/r/facebook",
				destination: "https://facebook.com/malinamore.studio",
				permanent: false,
			},
			{
				source: "/r/instagram",
				destination: "https://instagram.com/malinamore.studio",
				permanent: false,
			},
			{
				source: "/classes/ceramics-for-fathers-day",
				destination: "/classes/fall-in-love-with-clay",
				permanent: false,
			},
		];
	},
	experimental: {
		typedRoutes: true,
	},
};

module.exports = withMDX(nextConfig);
