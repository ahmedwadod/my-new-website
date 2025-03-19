import Landing from "~/homepage/landing";
import type { Route } from "./+types/home";
import Highlighted from "~/homepage/highlighted";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Ahmed Elkhalifa" },
		{ name: "description", content: "Ahmed Elkhalifa's personal website" },
		{ name: "author", content: "Ahmed Elkhalifa" },
		{ name: "keywords", content: "Ahmed Elkhalifa, personal website, software engineer" },
	];
}

export default function Home() {
	return <main className="p-10">
		<Landing />
		<Highlighted />
	</main>;
}
