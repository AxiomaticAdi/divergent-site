import { actionImages } from "@/app/constants/imageBeltConst";
import ImageBelt from "@/components/ImageBelt";
import Hero from "@/app/sections/Hero";

export default function Home() {
	return (
		<div className="w-full justify-center">
			<Hero />
			<ImageBelt images={actionImages} />
		</div>
	);
}
