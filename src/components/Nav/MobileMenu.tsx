import {
	Popover,
	PopoverBackdrop,
	PopoverButton,
	PopoverPanel,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";
import { CustomLink } from "./NavBar";
import Image from "next/image";

interface MobileMenuProps {
	links: CustomLink[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
	return (
		<div className="flex flex-col items-center w-full sm:hidden">
			<div className="ml-auto mr-4">
				<Popover>
					<PopoverButton className="group flex items-center rounded-full bg-white px-4 py-2 font-medium shadow-md backdrop-blur text-zinc-400 border-zinc-300">
						<Bars3Icon className="h-6 w-6" />
					</PopoverButton>
					<Transition>
						<TransitionChild
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="duration-150 ease-in"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<PopoverBackdrop className="fixed inset-0 z-50 backdrop-blur-sm" />
						</TransitionChild>
						<TransitionChild
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-150 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<PopoverPanel
								focus
								className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8"
							>
								<div className="flex flex-row-reverse items-center justify-between">
									<PopoverButton aria-label="Close menu" className="-m-1 p-1">
										<XMarkIcon className="h-6 w-6" />
									</PopoverButton>
								</div>
								<nav className="mt-6">
									<ul className="flex flex-col gap-4 items-center">
										{links.map(({ text, path }, index) => (
											<li key={index}>
												<Link href={path}>{text}</Link>
											</li>
										))}
									</ul>
								</nav>
							</PopoverPanel>
						</TransitionChild>
					</Transition>
				</Popover>
			</div>
			<div className="mx-auto">
				<Image
					src={
						"https://res.cloudinary.com/djxfhec23/image/upload/v1740297640/DivergentImprov/divergent_logo_copy_qykdzu.jpg"
					}
					alt="Divergent Logo"
					width={200}
					height={200}
				/>
			</div>
		</div>
	);
}
