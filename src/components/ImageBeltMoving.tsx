import clsx from "clsx";
import Image from "next/image";

interface ImageBeltProps {
	images: string[];
}
const rotations = [
	"rotate-2",
	"-rotate-2",
	"rotate-2",
	"-rotate-2",
	"rotate-2",
	"-rotate-2",
];

export default function ImageBeltMoving({ images }: ImageBeltProps) {
	return (
		<div className="w-full inline-flex flex-nowrap">
			<ul className="-my-4 flex gap-5 items-center justify-center animate-move-belt-left">
				{images.map((image, imageIndex) => (
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
