import { defineMarkdocConfig } from "@astrojs/markdoc/config";
import Admonition from "./src/components/Admonition.astro";
import LinkList from "./src/components/LinkList.astro";
import Fence from "./src/components/Fence.astro";
import YouTubeEmbed from "./src/components/YouTubeEmbed.astro";
import YouTube from "./src/components/YouTube.astro";
import Video from "./src/components/Video.astro";
import Tweet from "./src/components/Tweet.astro";
import CiteQuote from "./src/components/Citequote.astro";

export default defineMarkdocConfig({
  tags: {
    admonition: {
      render: Admonition,
      attributes: {
        type: {
          type: String,
          default: "info",
          matches: ["warning", "info", "success", "error"],
        },
        icon: { type: String },
        role: {
          type: String,
          default: "none",
        },
        ariaLive: {
          type: String,
          default: "off",
        },
      },
    },
    linklist: {
      render: LinkList,
    },
    ytembed: {
      render: YouTubeEmbed,
      attributes: {
        src: {
          type: String,
        },
      },
    },
    video: {
      render: Video,
      attributes: {
        link: {
          type: String,
        },
        type: {
          type: String,
        },
      },
    },
    citequote: {
      render: CiteQuote,
      attributes: {
        author: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    },
    youtube: {
      render: YouTube,
      attributes: {
        id: {
          type: String,
        },
      },
    },
    tweet: {
      render: Tweet,
      attributes: {
        id: {
          type: String,
        },
      },
    },
  },
  nodes: {
    fence: {
      render: Fence,
      attributes: {
        language: { type: String },
        content: { type: String },
      },
    },
  },
});
