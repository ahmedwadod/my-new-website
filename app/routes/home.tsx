import Landing from "~/homepage/landing";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Ahmed Elkhalifa" },
		{ name: "description", content: "Ahmed Elkhalifa's personal website" },
		{ name: "author", content: "Ahmed Elkhalifa" },
		{ name: "keywords", content: "Ahmed Elkhalifa, personal website, software engineer" },
	];
}

export default function Home() {
	return <Landing />;
}
