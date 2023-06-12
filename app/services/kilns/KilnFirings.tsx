import EmailLink from "@/app/components/EmailLink";
import FullCircleIcon from "@/app/components/icons/fullCircleIcon";
import HalfCircleIcon from "@/app/components/icons/halfCircleIcon";
import KilnIcon from "@/app/components/icons/kilnIcon";
import QuarterCircleIcon from "@/app/components/icons/quarterCircleIcon";
import TemperatureIcon from "@/app/components/icons/temperatureIcon";
import { CONTACT_EMAIL } from "@/app/constants";
import { InformationCircleIcon, ReceiptPercentIcon } from "@heroicons/react/24/outline";

const KilnFirings: React.FC<{ className?: string }> = ({ className }) => (
	<div className={className}>
		<p className="font-bold text-lg">Kiln Firings</p>
		<p className="text-sm text-zinc-500 flex gap-x-1">
			<InformationCircleIcon className="w-5 h-5" /> Prices indicative for a height
			of up to 5cm. Kiln plate diameter: 35cm
		</p>
		<p className="text-sm text-zinc-500 flex gap-x-1">
			<ReceiptPercentIcon className="w-5 h-5" /> 10% off for members and bisque
			firings
		</p>
		<ul className="list-dash">
			<li className="grid grid-cols-[2fr_1fr_1fr] auto-cols-fr gap-x-2 font-bold">
				<span className="flex items-center gap-x-2">
					<TemperatureIcon /> Temperature
				</span>
				<span>950°C</span>
				<span>1250°C</span>
			</li>
			<li className="grid grid-cols-[2fr_1fr_1fr] gap-x-2">
				<span className="flex items-center gap-x-2">
					<QuarterCircleIcon /> Quarter plate
				</span>
				<span>6 €</span>
				<span>8 €</span>
			</li>
			<li className="grid grid-cols-[2fr_1fr_1fr] gap-x-2">
				<span className="flex items-center gap-x-2">
					<HalfCircleIcon /> Half plate
				</span>
				<span>11 €</span>
				<span>15 €</span>
			</li>
			<li className="grid grid-cols-[2fr_1fr_1fr] gap-x-2">
				<span className="flex items-center gap-x-2">
					<FullCircleIcon /> Full plate
				</span>
				<span>20 €</span>
				<span>25 €</span>
			</li>
			<li className="grid grid-cols-[2fr_1fr_1fr] gap-x-2">
				<span className="flex items-center gap-x-2">
					<KilnIcon /> Full kiln
				</span>
				<span>100 €</span>
				<span>120 €</span>
			</li>
		</ul>
		<p className="text-sm text-zinc-500">
			We fire our kilns at least once a week, on Fridays. You will be able to pick
			up your piece the following Monday. For special shapes, bulk orders, and
			custom temperatures, <EmailLink email={CONTACT_EMAIL}>contact us</EmailLink>
			.
		</p>
	</div>
);

export default KilnFirings;
