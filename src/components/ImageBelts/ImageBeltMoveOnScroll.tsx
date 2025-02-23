"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageBeltMoveOnScrollProps {
	images: string[];
	direction?: "left" | "right";
}
const rotations = [
	"rotate-2",
	"-rotate-2",
	"rotate-2",
	"-rotate-2",
	"rotate-2",
	"-rotate-2",
];

export default function ImageBeltMoveOnScroll({
	images,
	direction = "left",
}: ImageBeltMoveOnScrollProps) {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const transformStyle =
		direction === "left"
			? {
					transform: `translateX(-${scrollPosition}px)`,
			  }
			: {
					transform: `translateX(${scrollPosition}px)`,
			  };

	return (
		<div className="w-full inline-flex flex-nowrap mt-10">
			<ul
				className="-my-4 flex gap-5 items-center justify-center"
				style={transformStyle}
			>
				{images.concat(images).map((image, imageIndex) => (
					<li
						key={imageIndex}
						className={clsx(
							"relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl",
							rotations[imageIndex % rotations.length]
						)}
					>
						<Image
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							height={1000}
							width={1000}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
