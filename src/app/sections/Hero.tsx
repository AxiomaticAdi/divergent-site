import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import SocialLink from "@/components/SocialLink";

export default function Hero() {
	return (
		<div className="flex flex-col items-center justify-center mx-auto max-w-2xl">
			<p className="mt-6 text-2xl text-zinc-600">
				Not your momma&apos;s improv community
			</p>
			<div className="mt-3 flex gap-6">
				<SocialLink
					href="https://www.instagram.com/divergentimprov/"
					aria-label="Follow on Instagram"
					icon={InstagramLogoIcon}
				/>
				<SocialLink
					href="https://www.linkedin.com/company/enron-energy/"
					aria-label="Follow on LinkedIn"
					icon={LinkedInLogoIcon}
				/>
			</div>
		</div>
	);
}
