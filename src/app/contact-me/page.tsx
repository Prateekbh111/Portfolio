"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/utils/cn";
import axios from "axios";

export default function Page() {
	const { toast } = useToast();

	function isFormDataValid(formDataObject: Record<string, any>) {
		if (Object.keys(formDataObject).length === 0) {
			return false;
		}
		for (const key in formDataObject) {
			if (!formDataObject[key]) {
				return false;
			}
		}
		return true;
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const formDataObject = Object.fromEntries(formData.entries());

		if (!isFormDataValid(formDataObject)) {
			toast({
				title: "Empty form",
				description: "I think you have missed some fields !!!!",
				variant: "destructive",
			});
			return;
		}

		try {
			console.log(formDataObject);
			const response = await axios.post("/api/send-email", formDataObject);
			toast({
				title: "Message sent.",
				description: "Your message has been sent.",
			});
		} catch (error) {
			console.log(error);
			toast({
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
				variant: "destructive",
			});
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center dark:bg-black bg-white ">
			<div className="max-w-md w-full mx-auto rounded-none border border-neutral-300 dark:border-neutral-800 shadow-2xl md:rounded-2xl p-4 md:p-8  bg-white dark:bg-black">
				<h2 className="font-bold text-5xl text-center text-neutral-800 dark:text-neutral-200">
					Contact me
				</h2>

				<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

				<form className="my-8" onSubmit={handleSubmit}>
					<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
						<LabelInputContainer>
							<Label htmlFor="firstname">First name</Label>
							<Input
								name="firstname"
								id="firstname"
								placeholder="Sakshi"
								type="text"
							/>
						</LabelInputContainer>
						<LabelInputContainer>
							<Label htmlFor="lastname">Last name</Label>
							<Input
								name="lastname"
								id="lastname"
								placeholder="Bhardwaj"
								type="text"
							/>
						</LabelInputContainer>
					</div>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="email">Email Address</Label>
						<Input
							name="email"
							id="email"
							placeholder="nandi.trisha@28.com"
							type="email"
						/>
					</LabelInputContainer>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="textarea">Your Message</Label>
						<Input
							name="message"
							id="textarea"
							placeholder="Your Message or suggestion here"
							type="textarea"
						/>
					</LabelInputContainer>

					<button
						className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
						type="submit"
					>
						Send &rarr;
						<BottomGradient />
					</button>
				</form>
			</div>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
