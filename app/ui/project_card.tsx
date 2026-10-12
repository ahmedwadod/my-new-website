
export type ProjectCardPorps = {
	name: string;
	description: string;
	image: string;
	link?: string;
	actionLabel?: string;
}

export default function ProjectCard({ name, description, image, link, actionLabel }: ProjectCardPorps) {
	return (
		<a href={link} className=" flex flex-col gap-2
				bg-primary text-teal-50 dark:bg-teal-50 dark:text-primary
				rounded-2xl hover:cursor-pointer
				shadow dark:shadow-teal-50 p-4 hover:scale-105
				transition-all duration-200 ease-in-out
				">
			<img src={`/projects/${image}`}
				alt={name}
				className="w-full h-48 object-contain object-center" />
			<h3 className="text-xl font-bold mt-2">{name}</h3>
			<p className="font-light mt-2">
				{description}
			</p>

			<div className="flex-grow"></div>

			{link &&
				<span className="font-mono mt-2 underline">{actionLabel} &#8599;</span>
			}
		</a>
	);
}

