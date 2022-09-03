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
}

export interface ArticleCard {
	title: string;
	description: string;
	href: string;
	image?: string;
}