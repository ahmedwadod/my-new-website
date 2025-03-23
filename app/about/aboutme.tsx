import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useEffect, useState } from "react";

export default function AboutMe() {
	const [aboutFile, setAboutFile] = useState("");

	useEffect(() => {
		fetch("/ahmed.json").then(res => res.json()).then(data => {
			setAboutFile(JSON.stringify(data, null, 2));
		});
	}, []);


	return <main className="flex flex-col">
		<h1 className="text-4xl font-bold mb-4">About Me</h1>
		<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
			<SyntaxHighlighter language="json" style={vs2015} className="rounded-2xl shadow-2xl">
				{aboutFile}
			</SyntaxHighlighter>
			<div className="font-mono flex flex-col gap-8">
				<JobHistory title='Fullstack Mobile Developer'
					company='Conefia' duration='Current' />
				<JobHistory title='Software Developer'
					company='School Pal' duration='6 months' />
				<JobHistory title='DevOps Engineer'
					company='IGate' duration='7 months' />
				<JobHistory title='Fullstack Developer'
					company='Brown Technology' duration='1 year' />
				<a href='' className='text-sm underline'>+8 more...</a>
			</div>
		</div>
	</main>
}

function JobHistory({ title, company, duration }: { title: string, company: string, duration: string }) {
	return (
		<div className='flex flex-col border-l-2 pl-2'>
			<h3 className='font-bold'>
				{title}
			</h3>
			<p className='font-light text-gray-600 dark:text-gray-400'>
				{company} <span className='italic'>({duration})</span>
			</p>
		</div>
	);
}
