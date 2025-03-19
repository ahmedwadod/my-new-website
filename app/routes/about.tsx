import AboutMe from "~/about/aboutme";
import type { Route } from "./+types/about";
import MyStack from "~/about/mystack";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Ahmed Elkhalifa" },
		{ name: "description", content: "Ahmed Elkhalifa's personal website" },
		{ name: "author", content: "Ahmed Elkhalifa" },
		{ name: "keywords", content: "Ahmed Elkhalifa, personal website, software engineer" },
	];
}

export default function About() {
	return <main className="p-10">
		<AboutMe />
		<MyStack />
	</main>
}
