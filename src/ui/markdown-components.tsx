import { onMount } from "solid-js";
import {
	createEffect,
	createUniqueId,
	ParentProps,
	mergeProps,
	type JSXElement,
} from "solid-js";
import { usePageState } from "~/data/page-state";
import { Callout, CalloutProps } from "~/ui/callout";
import { TabsCodeBlocks } from "~/ui/tab-code-blocks";

type DefaultProps = { children: JSXElement };

function getSectionString(children: unknown): string {
	if (typeof children == "string") {
		return children as string;
	}
	if (children instanceof Element) {
		const e = document.createElement("textarea");
		e.innerHTML = children.innerHTML;
		return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
	}
	if (Array.isArray(children)) {
		let str = "";
		children.forEach((item) => (str += getSectionString(item)));
		return str;
	}
	return "";
}

export default {
	strong: (props: DefaultProps) => (
		<span class="font-semibold text-slate-300">{props.children}</span>
	),
	Callout: (props: CalloutProps) => (
		<Callout title={props.title} type={props.type}>
			{props.children}
		</Callout>
	),
	TabsCodeBlocks: (props: DefaultProps) => (
		<TabsCodeBlocks>{props.children}</TabsCodeBlocks>
	),
	ssr: (props: DefaultProps) => <>{props.children}</>,
	spa: () => <></>,
	h1: (props: DefaultProps) => (
		<h1
			{...props}
			class="prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]"
		>
			{props.children}
		</h1>
	),
	h2: (props: DefaultProps) => {
		const { addSection } = usePageState();
		onMount(() => {
			addSection(getSectionString(props.children), 2);
		});
		return (
			<>
				<hr class="dark:prose-hr:border-slate-800" />
				<h2
					{...props}
					class="prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]"
				>
					{props.children}
				</h2>
			</>
		);
	},
	h3: (props: DefaultProps) => {
		const { addSection } = usePageState();
		onMount(() => {
			addSection(getSectionString(props.children), 3);
		});
		return (
			<h3
				{...props}
				class="prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]"
			>
				{props.children}
			</h3>
		);
	},
	h4: (props: DefaultProps) => {
		return (
			<h4
				{...props}
				class="prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]"
			>
				{props.children}
			</h4>
		);
	},
	h5: (props: DefaultProps) => {
		return (
			<h5
				{...props}
				class="prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]"
			>
				{props.children}
			</h5>
		);
	},
	h6: (props: DefaultProps) => (
		<h6
			{...props}
			class="prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]"
		>
			{props.children}
		</h6>
	),
	p: (props: DefaultProps) => (
		<p {...props} class="my-4">
			{props.children}
		</p>
	),
	a: (props: DefaultProps) => (
		<a
			{...props}
			class="no-underline shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:[--tw-prose-underline-size:6px] text-sky-300 font-medium"
		>
			{props.children}
		</a>
	),
	li: (props: DefaultProps) => (
		<li {...props} class="mb-2">
			{props.children}
		</li>
	),
	ul: (props: DefaultProps) => (
		<ul
			{...props}
			class="list-disc marker:text-solid-accent marker:dark:text-solid-accentlight marker:text-2xl pl-8 mb-2"
		>
			{props.children}
		</ul>
	),
	ol: (props: DefaultProps) => (
		<ol {...props} class="list-decimal pl-8 mb-2">
			{props.children}
		</ol>
	),
	nav: (props: DefaultProps) => <nav {...props}>{props.children}</nav>,
	TesterComponent: () => (
		<p>
			Remove This Now!!! If you see this it means that markdown custom
			components does work
		</p>
	),
	pre: (props: DefaultProps) => {
		return (
			<pre
				{...props}
				class="[&>code]:bg-transparent [&>code]:p-0 [&>code]:text-sm [&>code]:leading-normal custom-scroll-bar"
			>
				{props.children}
			</pre>
		);
	},
	code: (props: DefaultProps) => {
		return (
			<code
				class="inline-block not-prose text-mono bg-slate-800/70 text-slate-300 px-1.5 py-0.5 rounded-lg text-[0.8em] leading-snug"
				{...props}
			>
				{props.children}
			</code>
		);
	},
	table: (props: DefaultProps) => <table>{props.children}</table>,
	th: (props: DefaultProps) => <th>{props.children}</th>,
	thead: (props: DefaultProps) => <thead>{props.children}</thead>,
	td: (props: DefaultProps) => <td>{props.children}</td>,
	tr: (props: DefaultProps) => <tr>{props.children}</tr>,
	hr: (props: DefaultProps) => {
		return <hr {...props} class="dark:prose-hr:border-slate-800" />;
	},
	response: (props: DefaultProps) => {
		return <span>{props.children}</span>;
	},
	void: (props: DefaultProps) => {
		return <span>{props.children}</span>;
	},
	unknown: (props: DefaultProps) => {
		return <span>{props.children}</span>;
	},
};