
export type StackSectionProps = {
	className?: string;
	children: React.ReactNode;
}

export default function StackSection({ className, children }: StackSectionProps) {
	return <div className={`text-primary p-8 flex flex-col items-center justify-center
		gap-3 ${className}`}>
		{children}
	</div>
}
