
type ButtonProps = {
	text: string;
	className?: string;
};

export default function Button({ text, className }: ButtonProps) {
	return (
		<button className={`py-4 px-6 shadow-lg cursor-pointer rounded-full bg-secondary 
			text-white ${className}`}>
			{text}
		</button>
	);
}
