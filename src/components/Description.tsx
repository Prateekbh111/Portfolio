import { LinkPreview } from "@/components/ui/link-preview";
export default function Description() {
	return (
		<div className="flex justify-center items-center h-[40rem] space-y-10 flex-col px-4 bg-white dark:bg-black">
			<p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
				I specialize in developing full-stack applications using modern
				technologies like{" "}
				<LinkPreview url="https://nextjs.org/" className="font-bold">
					Next.js
				</LinkPreview>{" "}
				and{" "}
				<LinkPreview url="https://react.dev/" className="font-bold">
					React.js
				</LinkPreview>{" "}
				for building dynamic and responsive user interfaces.
			</p>
			<p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
				My backend expertise includes working with{" "}
				<LinkPreview url="https://nodejs.org/en" className="font-bold">
					Node.js
				</LinkPreview>
				,{" "}
				<LinkPreview url="https://www.mongodb.com/" className="font-bold">
					MongoDB
				</LinkPreview>{" "}
				and{" "}
				<LinkPreview url="https://redis.io/" className="font-bold">
					Redis
				</LinkPreview>{" "}
				to create scalable and efficient server-side applications.
			</p>
			<p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
				Beyond web development, I have worked with{" "}
				<LinkPreview url="https://www.microchip.com/" className="font-bold">
					Microchip studio
				</LinkPreview>{" "}
				for embedded systems programming, showcasing my versatility in both
				software and hardware development.
			</p>
		</div>
	);
}
