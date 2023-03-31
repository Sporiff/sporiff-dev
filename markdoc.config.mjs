import { defineMarkdocConfig } from "@astrojs/markdoc/config";
import {
  Admonition,
  LinkList,
  Fence,
  YouTubeEmbed,
  CiteQuote,
  YouTube,
  Video,
  Tweet,
} from "./src/components/index";

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
