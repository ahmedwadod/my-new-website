import StackSection from "~/ui/stack_section";
import ToolBox from "~/ui/tool_box";

export default function MyStack() {
	return (
		<section className="flex flex-col mt-10">
			<h1 className="text-4xl font-bold mb-4">My Stack</h1>
			<div className="grid grid-cols-1 md:grid-cols-6 gap-0">
				<StackSection className="bg-gray-100">
					<ToolBox name="react" experience="2+ years" />
					<ToolBox name="svelte" icon="svelte.svg" experience="2+ years" />
					<ToolBox name="vue" experience="1+ years" />
				</StackSection>

				<StackSection className="bg-gray-200">
					<ToolBox name="flutter" experience="5+ years" />
					<ToolBox name="reactnative" experience="1+ years" />
				</StackSection>

				<StackSection className="bg-gray-300">
					<ToolBox name="nextjs" experience="2+ years" />
					<ToolBox name="nodejs" experience="6+ years" />
				</StackSection>

				<StackSection className="bg-gray-400">
					<ToolBox name="postgresql" experience="4+ years" />
					<ToolBox name="mongodb" experience="4+ years" />
					<ToolBox name="mysql" experience="8+ years" />
				</StackSection>

				<StackSection className="bg-gray-500">
					<ToolBox name="docker" experience="4+ years" />
					<ToolBox name="aws" experience="3+ years" />
					<ToolBox name="digitalocean" experience="4+ years" />
				</StackSection>

				<StackSection className="bg-gray-600">
					<ToolBox name="git" experience="6+ years" />
					<ToolBox name="github" experience="6+ years" />
				</StackSection>

			</div>
		</section>
	);
}

