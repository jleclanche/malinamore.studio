const nextTranslate = require("next-translate-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	async rewrites() {
		return [
			{
				source: "/subscribe",
				destination: "https://0z5gh.mjt.lu/wgt/0z5gh/z2t/subscribe?c=8214db8c",
			},
		];
	},
};

module.exports = nextTranslate(nextConfig);
