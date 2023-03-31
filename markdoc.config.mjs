import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Admonition from "src/components/Admonition.astro";

export default defineMarkdocConfig({
  tags: {
    admonition: {
      render: Admonition,
      attributes: {
        type: {
         type: String,
         default: 'info',
         matches: ['warning', 'info', 'success', 'error']
         },
         icon: {type: String},
         role: {
            type: String,
            default: 'none'
         },
         ariaLive: {
            type: String,
            default: 'off'
         },
      }
    },
  },
})