
export type ToolBoxProps = {
	name: string;
	experience: string;
	icon?: string;
}

export default function ToolBox({ name, experience, icon }: ToolBoxProps) {
	const iconUrl = icon ? `/stack/${icon}` : `/stack/${name.toLowerCase()}.png`;
	return <div
		className="px-6 py-4 bg-white w-24 shadow-2xl rounded-2xl flex flex-col items-center gap-4">

		<img src={iconUrl} alt="icon" className="w-16 h-16 object-center object-contain" />
		<p className="text-xs font-extralight text-black opacity-60">{experience}</p>
	</div>
}
