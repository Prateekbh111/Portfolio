"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
	type: "spring",
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
};

export const MenuItem = ({
	setActive,
	active,
	item,
	link,
	children,
}: {
	setActive: (item: string) => void;
	active: string | null;
	item: string;
	link?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div onMouseEnter={() => setActive(item)} className="relative">
			<motion.p
				transition={{ duration: 0.3 }}
				className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
			>
				{!children ? <Link href={`${link}`}>{item}</Link> : item}
			</motion.p>
			{active !== null && children && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}
				>
					{active === item && (
						<div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-4 mb-2 z-[60]">
							<motion.div
								transition={transition}
								layoutId="active" // layoutId ensures smooth animation
								className="bg-white dark:bg-black rounded-2xl  border border-black/[0.2] dark:border-white/[0.2] shadow-xl "
							>
								<motion.div
									layout // layout ensures smooth animation
									className="w-max h-full p-4 "
								>
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	);
};

export const Menu = ({
	setActive,
	children,
}: {
	setActive: (item: string | null) => void;
	children: React.ReactNode;
}) => {
	return (
		<nav
			onMouseLeave={() => setActive(null)} // resets the state
			className="relative rounded-2xl  dark:bg-black bg-white dark:border-white/[0.2] border shadow-input flex justify-center space-x-4 px-6 py-4"
		>
			{children}
		</nav>
	);
};

export const ProductItem = ({
	title,
	description,
	href,
	src,
	isLive = false,
}: {
	title: string;
	description: string;
	href: string;
	src: string;
	isLive?: boolean;
}) => {
	return (
		<Link
			href={href}
			className="flex p-2 rounded-lg space-x-2 hover:dark:bg-neutral-800 hover:bg-neutral-300 "
		>
			<div className="flex relative">
				<Image
					src={src}
					width={140}
					height={70}
					alt={title}
					className="flex-shrink-0 rounded-md shadow-2xl"
				/>
				{isLive && (
					<span className="right-0 top-0 absolute flex h-3 w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
					</span>
				)}
			</div>
			<div>
				<h4 className="flex text-xl font-bold mb-1 text-black dark:text-white">
					{title}
				</h4>
				<p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
					{description}
				</p>
			</div>
		</Link>
	);
};

export const HoveredLink = ({ children, ...rest }: any) => {
	return (
		<Link
			{...rest}
			className="text-neutral-700 dark:text-neutral-200 hover:dark:bg-neutral-800 hover:bg-neutral-300 p-2 rounded-lg"
		>
			{children}
		</Link>
	);
};
