import { skillsSvgs } from "@/utils/skillsSvgs";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function MovingSkills() {
	return (
		<div className="w-full rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden py-10">
			<InfiniteMovingCards
				items={skillsSvgs}
				speed="normal"
				pauseOnHover={false}
			/>
		</div>
	);
}
