export interface Video {
   link: string;
   type: string
}

export interface Quote {
	author: string;
   link: string;
}

export interface Callout {
   type: string;
	title?: string;
}

export interface ArticleCard {
	title: string;
	description: string;
	href: string;
	image?: string;
}

// LinkList types

interface Links {
   name: string;
   url: string;
}

export interface File {
   name: string;
   icon?: string;
   description?: string;
   links: Array<Links>;
}

export interface ListContent {
   list: Array<File>;
}
