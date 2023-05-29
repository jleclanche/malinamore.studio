import ExternalLink from "./ExternalLink";

export const TelLink: React.FC<{
	phoneNumber: string;
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
}> = ({ phoneNumber, className, children }) => (
	<ExternalLink href={`tel:${phoneNumber.replaceAll(" ", "")}`} className={className}>
		{children || phoneNumber}
	</ExternalLink>
);

export default TelLink;
