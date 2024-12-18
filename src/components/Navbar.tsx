"use client";

import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { useState } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);

	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === "number") {
			let direction = current! - scrollYProgress.getPrevious()!;

			if (scrollYProgress.get() < 0.05) {
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(true);
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					"fixed top-10 inset-x-0 max-w-xl mx-auto z-50 ",
					className
				)}
			>
				<Menu setActive={setActive}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Home"
						link="/"
					/>
					<MenuItem setActive={setActive} active={active} item="Projects">
						<div className="text-sm grid grid-cols-2 gap-5">
							<ProductItem
								title="Bingooo.site"
								href="https://bingooo.site"
								src="/Bingo.png"
								description="A Real-time Multiplayer game platfrom using Next.js, websocket hosted on AWS EC2"
								isLive
							/>
							<ProductItem
								title="Chatwave"
								href="https://prateekbh111-chatwave.vercel.app/"
								src="/ChatWave.png"
								description="A Real-time chat application built using Next.js, Pusher and Redis"
								isLive
							/>
							<ProductItem
								title="MiniLink"
								href="https://github.com/Prateekbh111/Minilink"
								src="/MiniLink.png"
								description="A Web application that transform URLs into concise and shareable links."
							/>
						</div>
					</MenuItem>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Contact Me"
						link="/contact-me"
					/>
				</Menu>
			</motion.div>
		</AnimatePresence>
	);
}
