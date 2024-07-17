import { cn } from "@/lib/utils";
import GridPattern from "./magicui/grid-pattern";
import { FlipWords } from "./ui/flip-words";

export default function HeroSection() {
	const words = [
		"Prateek Bhardwaj",
		"a Software Developer.",
		"a Frontend Engineer.",
		"a Backend Engineer.",
		"an Embedded Engineer.",
	];

	return (
		<div className="min-h-screen bg-background flex justify-center items-center px-4 bg-white dark:bg-black">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_20%,black)]"></div>
			<div className="h-3/5 text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
				Hey I am <br />
				<FlipWords words={words} />
			</div>
			<GridPattern
				className={cn(
					"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
				)}
			/>
		</div>
	);
}
