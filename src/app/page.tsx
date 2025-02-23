import {
	InstagramLogoIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import SocialLink from "@/components/SocialLink";
import { actionImages } from "@/app/constants/imageBeltConst";
import ImageBelt from "@/components/ImageBelt";

export default function Home() {
	return (
		<div className="w-full justify-center">
			<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
				Not your momma&apos;s improv community
			</h1>
			<p className="mt-6 text-base text-zinc-600">
				I’m Spencer, a software designer and entrepreneur based in New York
				City. I’m the founder and CEO of Planetaria, where we develop
				technologies that empower regular people to explore space on their own
				terms.
			</p>
			<div className="mt-6 flex gap-6">
				<SocialLink
					href="#"
					aria-label="Follow on Instagram"
					icon={InstagramLogoIcon}
				/>
				<SocialLink
					href="#"
					aria-label="Follow on GitHub"
					icon={GitHubLogoIcon}
				/>
				<SocialLink
					href="#"
					aria-label="Follow on LinkedIn"
					icon={LinkedInLogoIcon}
				/>
			</div>
			<ImageBelt images={actionImages} />
		</div>
	);
}
