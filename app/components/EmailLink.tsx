import ExternalLink from "./ExternalLink";

export const EmailLink: React.FC<{
	email: string;
	className?: string;
	subject?: string;
	children?: React.ReactNode | React.ReactNode[];
}> = ({ email, className, subject, children }) => (
	<ExternalLink
		href={
			subject
				? `mailto:${email}?subject=${encodeURIComponent(subject)}`
				: `mailto:${email}`
		}
		className={className}
	>
		{children || email}
	</ExternalLink>
);

export default EmailLink;
