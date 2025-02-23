import { actionImages } from "@/app/constants/imageBeltConst";
import ImageBeltMoving from "@/components/ImageBelts/ImageBeltMoving";
import Hero from "@/app/sections/Hero";

export default function Home() {
	return (
		<div className="w-full justify-center">
			<div className="max-w-2xl mx-auto flex flex-col gap-5">
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
			</div>
			<Hero />
			<ImageBeltMoving images={actionImages} />
			<div className="max-w-2xl mx-auto flex flex-col gap-5">
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
			</div>
		</div>
	);
}
