declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// This needs to be in sync with ImageMetadata
	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"blog": {
"2018/a-reluctant-return-to-windows.mdoc": {
  id: "2018/a-reluctant-return-to-windows.mdoc",
  slug: "2018/a-reluctant-return-to-windows",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/acclimitising-to-new-tech.mdoc": {
  id: "2018/acclimitising-to-new-tech.mdoc",
  slug: "2018/acclimitising-to-new-tech",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/apple-drink-the-cider.mdoc": {
  id: "2018/apple-drink-the-cider.mdoc",
  slug: "2018/apple-drink-the-cider",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/back-to-the-drawing-board.mdoc": {
  id: "2018/back-to-the-drawing-board.mdoc",
  slug: "2018/back-to-the-drawing-board",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/baku-social.mdoc": {
  id: "2018/baku-social.mdoc",
  slug: "2018/baku-social",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/deploying-controlling-chrome-intune.mdoc": {
  id: "2018/deploying-controlling-chrome-intune.mdoc",
  slug: "2018/deploying-controlling-chrome-intune",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/deploying-sophos.mdoc": {
  id: "2018/deploying-sophos.mdoc",
  slug: "2018/deploying-sophos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/elementary-juno.mdoc": {
  id: "2018/elementary-juno.mdoc",
  slug: "2018/elementary-juno",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/getting-on-with-gutenberg.mdoc": {
  id: "2018/getting-on-with-gutenberg.mdoc",
  slug: "2018/getting-on-with-gutenberg",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/intel-fail.mdoc": {
  id: "2018/intel-fail.mdoc",
  slug: "2018/intel-fail",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/knit-and-perl.mdoc": {
  id: "2018/knit-and-perl.mdoc",
  slug: "2018/knit-and-perl",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/new-site.mdoc": {
  id: "2018/new-site.mdoc",
  slug: "2018/new-site",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/personal-matters.mdoc": {
  id: "2018/personal-matters.mdoc",
  slug: "2018/personal-matters",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/pgp-problems.mdoc": {
  id: "2018/pgp-problems.mdoc",
  slug: "2018/pgp-problems",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/some-more-windows-work.mdoc": {
  id: "2018/some-more-windows-work.mdoc",
  slug: "2018/some-more-windows-work",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/teams-deployment-headaches.mdoc": {
  id: "2018/teams-deployment-headaches.mdoc",
  slug: "2018/teams-deployment-headaches",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/thermy.mdoc": {
  id: "2018/thermy.mdoc",
  slug: "2018/thermy",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2018/uncontrolled-devices.mdoc": {
  id: "2018/uncontrolled-devices.mdoc",
  slug: "2018/uncontrolled-devices",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/baku-social-news.mdoc": {
  id: "2019/baku-social-news.mdoc",
  slug: "2019/baku-social-news",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/bring-back-my-internet.mdoc": {
  id: "2019/bring-back-my-internet.mdoc",
  slug: "2019/bring-back-my-internet",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/coleslaw-migration.mdoc": {
  id: "2019/coleslaw-migration.mdoc",
  slug: "2019/coleslaw-migration",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/going-free.mdoc": {
  id: "2019/going-free.mdoc",
  slug: "2019/going-free",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/goodbye-guix.mdoc": {
  id: "2019/goodbye-guix.mdoc",
  slug: "2019/goodbye-guix",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/into-the-void.mdoc": {
  id: "2019/into-the-void.mdoc",
  slug: "2019/into-the-void",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/matrix-is-here.mdoc": {
  id: "2019/matrix-is-here.mdoc",
  slug: "2019/matrix-is-here",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/more-writing.mdoc": {
  id: "2019/more-writing.mdoc",
  slug: "2019/more-writing",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/moving-to-sphinx.mdoc": {
  id: "2019/moving-to-sphinx.mdoc",
  slug: "2019/moving-to-sphinx",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/new-developments.mdoc": {
  id: "2019/new-developments.mdoc",
  slug: "2019/new-developments",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/progress.mdoc": {
  id: "2019/progress.mdoc",
  slug: "2019/progress",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/say-no-to-slack.mdoc": {
  id: "2019/say-no-to-slack.mdoc",
  slug: "2019/say-no-to-slack",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/tanukitunes-update.mdoc": {
  id: "2019/tanukitunes-update.mdoc",
  slug: "2019/tanukitunes-update",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2019/weeabot.mdoc": {
  id: "2019/weeabot.mdoc",
  slug: "2019/weeabot",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/a-new-year.mdoc": {
  id: "2020/a-new-year.mdoc",
  slug: "2020/a-new-year",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/alpine.mdoc": {
  id: "2020/alpine.mdoc",
  slug: "2020/alpine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/building-smarter.mdoc": {
  id: "2020/building-smarter.mdoc",
  slug: "2020/building-smarter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/burnout.mdoc": {
  id: "2020/burnout.mdoc",
  slug: "2020/burnout",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/going-green.mdoc": {
  id: "2020/going-green.mdoc",
  slug: "2020/going-green",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/in-defence-of-gnome-web.mdoc": {
  id: "2020/in-defence-of-gnome-web.mdoc",
  slug: "2020/in-defence-of-gnome-web",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/learning-freebsd.mdoc": {
  id: "2020/learning-freebsd.mdoc",
  slug: "2020/learning-freebsd",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/more-speed.mdoc": {
  id: "2020/more-speed.mdoc",
  slug: "2020/more-speed",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/moving-to-freebsd.mdoc": {
  id: "2020/moving-to-freebsd.mdoc",
  slug: "2020/moving-to-freebsd",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/plan-9-fun.mdoc": {
  id: "2020/plan-9-fun.mdoc",
  slug: "2020/plan-9-fun",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/playing-with-ports.mdoc": {
  id: "2020/playing-with-ports.mdoc",
  slug: "2020/playing-with-ports",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/python-programming.mdoc": {
  id: "2020/python-programming.mdoc",
  slug: "2020/python-programming",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/roswell-for-everyone.mdoc": {
  id: "2020/roswell-for-everyone.mdoc",
  slug: "2020/roswell-for-everyone",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/site-speed-improvements.mdoc": {
  id: "2020/site-speed-improvements.mdoc",
  slug: "2020/site-speed-improvements",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2020/walled-gardens.mdoc": {
  id: "2020/walled-gardens.mdoc",
  slug: "2020/walled-gardens",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2021/brave-browser.mdoc": {
  id: "2021/brave-browser.mdoc",
  slug: "2021/brave-browser",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2021/dell-xps-13-thoughts.mdoc": {
  id: "2021/dell-xps-13-thoughts.mdoc",
  slug: "2021/dell-xps-13-thoughts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2021/finally-change.mdoc": {
  id: "2021/finally-change.mdoc",
  slug: "2021/finally-change",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2021/july-update.mdoc": {
  id: "2021/july-update.mdoc",
  slug: "2021/july-update",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2021/m1-mac.mdoc": {
  id: "2021/m1-mac.mdoc",
  slug: "2021/m1-mac",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2021/the-hunt.mdoc": {
  id: "2021/the-hunt.mdoc",
  slug: "2021/the-hunt",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2022/automation-fun.mdoc": {
  id: "2022/automation-fun.mdoc",
  slug: "2022/automation-fun",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2022/fediverse.mdoc": {
  id: "2022/fediverse.mdoc",
  slug: "2022/fediverse",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
"2022/writing-path.mdoc": {
  id: "2022/writing-path.mdoc",
  slug: "2022/writing-path",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
