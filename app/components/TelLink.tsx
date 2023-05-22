import ExternalLink from "./ExternalLink";

export const TelLink: React.FC<{
	phoneNumber: string;
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
}> = ({ phoneNumber, className, children }) => (
	<ExternalLink href={`tel:${phoneNumber}`} className={className}>
		{children || phoneNumber.replaceAll(" ", "")}
	</ExternalLink>
);

export default TelLink;
