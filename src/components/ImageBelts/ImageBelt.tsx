import clsx from "clsx";
import Image from "next/image";
import { rotations } from "@/app/constants/imageBeltConst";

interface ImageBeltProps {
	images: string[];
}

export default function ImageBelt({ images }: ImageBeltProps) {
	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{images.map((image, imageIndex) => (
					<div
						key={image}
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
					</div>
				))}
			</div>
		</div>
	);
}
