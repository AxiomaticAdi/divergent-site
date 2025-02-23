import Image from "next/image";
import Link from "next/link";
import { CustomLink } from "./NavBar";

interface WebMenuProps {
	links: CustomLink[];
}
export default function WebMenu({ links }: WebMenuProps) {
	// Calculate the middle index to split the links
	const middleIndex = Math.floor(links.length / 2);
	const firstHalfLinks = links.slice(0, middleIndex);
	const secondHalfLinks = links.slice(middleIndex);

	return (
		<div className="hidden mx-auto sm:block">
			<div className="flex gap-6 text-zinc-400 items-center">
				{firstHalfLinks.map(({ text, path }, index) => (
					<Link key={index} href={path}>
						{text}
					</Link>
				))}

				<Link className="mx-auto flex-none" href={"/"}>
					<Image
						src={
							"https://res.cloudinary.com/djxfhec23/image/upload/v1740297640/DivergentImprov/divergent_logo_copy_qykdzu.jpg"
						}
						alt="Divergent Logo"
						width={200}
						height={200}
					/>
				</Link>

				{secondHalfLinks.map(({ text, path }, index) => (
					<Link key={index} href={path}>
						{text}
					</Link>
				))}
			</div>
		</div>
	);
}
