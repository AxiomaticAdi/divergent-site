import WebMenu from "./WebMenu";
import MobileMenu from "./MobileMenu";

export type CustomLink = {
	text: string;
	path: string;
};

export default function Navbar() {
	const links: CustomLink[] = [
		{
			text: "Shows",
			path: "/shows",
		},
		{
			text: "Workshops",
			path: "/workshops",
		},
		{
			text: "About",
			path: "/about",
		},
		{
			text: "FAQ",
			path: "/faq",
		},
	];

	return (
		<nav className="w-full flex my-8 md:my-12">
			<WebMenu links={links} />
			<MobileMenu links={links} />
		</nav>
	);
}
