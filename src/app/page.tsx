import { actionImages1, actionImages2 } from "@/app/constants/imageBeltConst";
import ImageBeltMoveOnScroll from "@/components/ImageBelts/ImageBeltMoveOnScroll";
import Hero from "@/app/sections/Hero";

export default function Home() {
	return (
		<div className="w-full justify-center">
			<div className="max-w-2xl mx-auto flex flex-col gap-5">
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
			</div>
			<Hero />
			<ImageBeltMoveOnScroll images={actionImages1} direction="left" />
			<ImageBeltMoveOnScroll images={actionImages2} direction="right" />
			<div className="max-w-2xl mx-auto flex flex-col gap-5">
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
				<div className="h-96 w-full border border-zinc-300 justify-center"></div>
			</div>
		</div>
	);
}
