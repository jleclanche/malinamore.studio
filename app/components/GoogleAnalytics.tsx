"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID } from "../constants";

const GA_CODE = `
window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("consent", "default", { analytics_storage: "denied" });
gtag("config", "${GA_MEASUREMENT_ID}", { page_path: window.location.pathname });
`;

const GoogleAnalytics = () => (
	<>
		<Script
			strategy="beforeInteractive"
			src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
		/>
		<Script
			id="google-analytics"
			strategy="beforeInteractive"
			dangerouslySetInnerHTML={{
				__html: GA_CODE,
			}}
		/>
	</>
);

export default GoogleAnalytics;
