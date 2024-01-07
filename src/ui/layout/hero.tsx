import { Component, For } from "solid-js";
import { Button } from "../button";

const TrafficLightsIcon: Component<{ class: string }> = (props) => {
	return (
		<svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
			<circle cx="5" cy="5" r="4.5" />
			<circle cx="21" cy="5" r="4.5" />
			<circle cx="37" cy="5" r="4.5" />
		</svg>
	);
};

const code = `import { createSignal } from "solid-js";

	function Counter() {
		const [count, setCount] = createSignal(0);

		setInterval(() => setCount(count() + 1), 1000);
		
		return (
			<div>
				<p>Count: {count()}</p>
			</div>
		);
	  }`;

export const Hero: Component = () => {
	return (
		<div class="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
			<div class="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
				<div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
					<div class="relative z-10 md:text-center lg:text-left">
						<div class="relative">
							<p class="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
								Effortless UIs with Reactive Precision.
							</p>
							<p class="mt-3 text-2xl tracking-tight text-slate-400">
								SolidJS is a modern JavaScript framework for today's web.
							</p>
							<div class="mt-8 flex gap-4 md:justify-center lg:justify-start">
								<Button href="/quick-start" variant="primary">
									Get started
								</Button>
								<Button href="https://discord.gg/solidjs" variant="secondary">
									Join the community
								</Button>
							</div>
						</div>
					</div>
					<div class="relative lg:static xl:pl-10">
						<div class="relative">
							<div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500 dark:from-sky-300 via-sky-500/70 dark:via-sky-300/70 to-blue-300 opacity-10 blur-lg dark:bg-white" />
							<div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
							<div class="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-sky-200/10 backdrop-blur">
								<div class="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
								<div class="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-800 dark:via-blue-400 to-blue-400/0" />
								<div class="pl-4 pt-4">
									<TrafficLightsIcon class="h-2.5 w-auto stroke-slate-500/30" />
									<div class="mt-4 flex space-x-2 text-xs">
										<div class="flex h-6 rounded-full border dark:border-none border-sky-400 shadow-sm bg-gradient-to-r from-sky-400/30  via-sky-400 to-sky-400/30 p-px font-medium text-sky-300 ">
											<div class="flex items-center rounded-full px-2.5 bg-slate-800">
												Counter.jsx
											</div>
										</div>
									</div>
									<div class="mt-6 flex items-start px-1 text-sm">
										<div
											aria-hidden="true"
											class="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-400"
										>
											<For
												each={Array.from({
													length: code.split("\n").length,
												})}
											>
												{(_, index) => (
													<>
														{(index() + 1).toString().padStart(2, "0")}
														<br />
													</>
												)}
											</For>
										</div>
										<pre class="flex overflow-x-auto pb-6 custom-scrollbar px-4">
											{code}
										</pre>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};