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
"2018/a-reluctant-return-to-windows.mdx": {
  id: "2018/a-reluctant-return-to-windows.mdx",
  slug: "2018/a-reluctant-return-to-windows",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/acclimitising-to-new-tech.mdx": {
  id: "2018/acclimitising-to-new-tech.mdx",
  slug: "2018/acclimitising-to-new-tech",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/apple-drink-the-cider.mdx": {
  id: "2018/apple-drink-the-cider.mdx",
  slug: "2018/apple-drink-the-cider",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/back-to-the-drawing-board.mdx": {
  id: "2018/back-to-the-drawing-board.mdx",
  slug: "2018/back-to-the-drawing-board",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/baku-social.mdx": {
  id: "2018/baku-social.mdx",
  slug: "2018/baku-social",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/deploying-controlling-chrome-intune.mdx": {
  id: "2018/deploying-controlling-chrome-intune.mdx",
  slug: "2018/deploying-controlling-chrome-intune",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/deploying-sophos.mdx": {
  id: "2018/deploying-sophos.mdx",
  slug: "2018/deploying-sophos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/elementary-juno.mdx": {
  id: "2018/elementary-juno.mdx",
  slug: "2018/elementary-juno",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/getting-on-with-gutenberg.mdx": {
  id: "2018/getting-on-with-gutenberg.mdx",
  slug: "2018/getting-on-with-gutenberg",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/intel-fail.mdx": {
  id: "2018/intel-fail.mdx",
  slug: "2018/intel-fail",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/knit-and-perl.mdx": {
  id: "2018/knit-and-perl.mdx",
  slug: "2018/knit-and-perl",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/new-site.mdx": {
  id: "2018/new-site.mdx",
  slug: "2018/new-site",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/personal-matters.mdx": {
  id: "2018/personal-matters.mdx",
  slug: "2018/personal-matters",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/pgp-problems.mdx": {
  id: "2018/pgp-problems.mdx",
  slug: "2018/pgp-problems",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/some-more-windows-work.mdx": {
  id: "2018/some-more-windows-work.mdx",
  slug: "2018/some-more-windows-work",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/teams-deployment-headaches.mdx": {
  id: "2018/teams-deployment-headaches.mdx",
  slug: "2018/teams-deployment-headaches",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/thermy.mdx": {
  id: "2018/thermy.mdx",
  slug: "2018/thermy",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2018/uncontrolled-devices.mdx": {
  id: "2018/uncontrolled-devices.mdx",
  slug: "2018/uncontrolled-devices",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/baku-social-news.mdx": {
  id: "2019/baku-social-news.mdx",
  slug: "2019/baku-social-news",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/bring-back-my-internet.mdx": {
  id: "2019/bring-back-my-internet.mdx",
  slug: "2019/bring-back-my-internet",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/coleslaw-migration.mdx": {
  id: "2019/coleslaw-migration.mdx",
  slug: "2019/coleslaw-migration",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/going-free.mdx": {
  id: "2019/going-free.mdx",
  slug: "2019/going-free",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/goodbye-guix.mdx": {
  id: "2019/goodbye-guix.mdx",
  slug: "2019/goodbye-guix",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/into-the-void.mdx": {
  id: "2019/into-the-void.mdx",
  slug: "2019/into-the-void",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/matrix-is-here.mdx": {
  id: "2019/matrix-is-here.mdx",
  slug: "2019/matrix-is-here",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/more-writing.mdx": {
  id: "2019/more-writing.mdx",
  slug: "2019/more-writing",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/moving-to-sphinx.mdx": {
  id: "2019/moving-to-sphinx.mdx",
  slug: "2019/moving-to-sphinx",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/new-developments.mdx": {
  id: "2019/new-developments.mdx",
  slug: "2019/new-developments",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/progress.mdx": {
  id: "2019/progress.mdx",
  slug: "2019/progress",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/say-no-to-slack.mdx": {
  id: "2019/say-no-to-slack.mdx",
  slug: "2019/say-no-to-slack",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/tanukitunes-update.mdx": {
  id: "2019/tanukitunes-update.mdx",
  slug: "2019/tanukitunes-update",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2019/weeabot.mdx": {
  id: "2019/weeabot.mdx",
  slug: "2019/weeabot",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/a-new-year.mdx": {
  id: "2020/a-new-year.mdx",
  slug: "2020/a-new-year",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/alpine.mdx": {
  id: "2020/alpine.mdx",
  slug: "2020/alpine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/building-smarter.mdx": {
  id: "2020/building-smarter.mdx",
  slug: "2020/building-smarter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/burnout.mdx": {
  id: "2020/burnout.mdx",
  slug: "2020/burnout",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/going-green.mdx": {
  id: "2020/going-green.mdx",
  slug: "2020/going-green",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/in-defence-of-gnome-web.mdx": {
  id: "2020/in-defence-of-gnome-web.mdx",
  slug: "2020/in-defence-of-gnome-web",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/learning-freebsd.mdx": {
  id: "2020/learning-freebsd.mdx",
  slug: "2020/learning-freebsd",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/more-speed.mdx": {
  id: "2020/more-speed.mdx",
  slug: "2020/more-speed",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/moving-to-freebsd.mdx": {
  id: "2020/moving-to-freebsd.mdx",
  slug: "2020/moving-to-freebsd",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/plan-9-fun.mdx": {
  id: "2020/plan-9-fun.mdx",
  slug: "2020/plan-9-fun",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/playing-with-ports.mdx": {
  id: "2020/playing-with-ports.mdx",
  slug: "2020/playing-with-ports",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/python-programming.mdx": {
  id: "2020/python-programming.mdx",
  slug: "2020/python-programming",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/roswell-for-everyone.mdx": {
  id: "2020/roswell-for-everyone.mdx",
  slug: "2020/roswell-for-everyone",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/site-speed-improvements.mdx": {
  id: "2020/site-speed-improvements.mdx",
  slug: "2020/site-speed-improvements",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2020/walled-gardens.mdx": {
  id: "2020/walled-gardens.mdx",
  slug: "2020/walled-gardens",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2021/brave-browser.mdx": {
  id: "2021/brave-browser.mdx",
  slug: "2021/brave-browser",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2021/dell-xps-13-thoughts.mdx": {
  id: "2021/dell-xps-13-thoughts.mdx",
  slug: "2021/dell-xps-13-thoughts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2021/finally-change.mdx": {
  id: "2021/finally-change.mdx",
  slug: "2021/finally-change",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2021/july-update.mdx": {
  id: "2021/july-update.mdx",
  slug: "2021/july-update",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2021/m1-mac.mdx": {
  id: "2021/m1-mac.mdx",
  slug: "2021/m1-mac",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2021/the-hunt.mdx": {
  id: "2021/the-hunt.mdx",
  slug: "2021/the-hunt",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2022/automation-fun.mdx": {
  id: "2022/automation-fun.mdx",
  slug: "2022/automation-fun",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2022/fediverse.mdx": {
  id: "2022/fediverse.mdx",
  slug: "2022/fediverse",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"2022/writing-path.mdx": {
  id: "2022/writing-path.mdx",
  slug: "2022/writing-path",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
