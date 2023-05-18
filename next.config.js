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
		];
	},
};

module.exports = withMDX(nextConfig);
