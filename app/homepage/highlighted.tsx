import Button from "~/ui/link_button";
import ProjectCard from "~/ui/project_card";

export default function Highlighted() {
	return (
		<section className="flex flex-col mt-10">
			<h2 className="text-4xl font-bold mb-8 self-center">Highlighted Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Aviya />
				<Almazad />
				<Homecare />
				<SalaaMedia />
			</div>
			<a className="self-center"
				href="https://drive.google.com/drive/folders/1zwUwoMhWfi_dNaEHylzo3u1Gmddae8Iv?usp=drive_link">
				<Button className="self-center mt-8" text="View Portfolio &#8599;" />
			</a>
		</section>
	);
}

function SalaaMedia() {
	return <ProjectCard name="SalaaMedia Website" image="/salaamedia.org.png"
		description="A modern-design organization portfolio for SalaaMedia built with WordPress."
		link="https://salaamedia.org"
		actionLabel="Visit Website" />
}

function Almazad() {
	return <ProjectCard name="Almazad App" image="/almazad.png"
		description="Real-time auctions mobile application built with Flutter. The app integrates with SignalR for real-time updates and offers features like: User Authentication, Auctions, Bidding, Notifications, and a wallet system."
		link="mailto:ahmed@elkhalifa.dev?subject=Almazad%20App%20Demo&body=Hello,%20I'm%20interested%20in%20your%20project%20Almazad%20App%20and%20I%20would%20like%20a%20demo."
		actionLabel="Request a Demo" />

}

function Homecare() {
	return <ProjectCard name="Homecare System" image="/homecare_system.png"
		description="A compelete backend built with NodeJs and MongoDB for a single-vendor online purchasing system that offers: Advanced Product Variants, Delivery Zones, Staff Managment, Inventory and a RESTful API for mobile app integration."
		link="mailto:ahmed@elkhalifa.dev&subject=Homecare%20System%20Demo&body=Hello,%20I'm%20interested%20in%20your%20project%20Homecare%20System%20and%20I%20would%20like%20a%20demo."
		actionLabel="Request a Demo"
	/>
}

function Aviya() {
	return <ProjectCard name="Aviya Telemed" image="aviya.png"
		description="A mobile application for telemedicine services that offers Booking Appointments, Video Calls, and Prescriptions for US based patients. Built with React Native and AWS Services."
		link="https://play.google.com/store/apps/details?id=com.topflight.aviya&hl=en"
		actionLabel="View on Google Play" />
}
