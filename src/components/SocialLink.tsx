import Link from "next/link";

export default function SocialLink({
	icon: Icon,
	...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
	icon: React.ComponentType<{ className?: string }>;
}) {
	return (
		<Link className="group -m-1 p-1" {...props}>
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
		</Link>
	);
}
