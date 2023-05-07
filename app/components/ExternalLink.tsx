import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

const ExternalLink: React.FC<
	DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ href, children, ...props }) => (
	<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
		{children}
	</a>
);

export default ExternalLink;
