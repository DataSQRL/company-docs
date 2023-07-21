// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DataSQRL',
  tagline: 'Build Data Services In Minutes',
  url: 'https://you.datasqrl.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: true,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'datasqrl', // Usually your GitHub org/user name.
  projectName: 'datasqrl.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: undefined,
          // Please change this to your repo.
          editUrl: 'https://github.com/DataSQRL/company-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-Y4XLW4QZYX',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'DataSQRL',
        logo: {
          alt: 'DataSQRL Logo',
          src: 'img/head_squirrel.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'mission/index',
            position: 'left',
            label: 'Mission & Vision',
          },
          {
            type: 'doc',
            docId: 'culture/index',
            position: 'left',
            label: 'Culture',
          },
          {
            type: 'doc',
            docId: 'process/index',
            position: 'left',
            label: 'How We Work',
          },
          {
            type: 'doc',
            docId: 'intro/index',
            position: 'left',
            label: 'Handbook',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Information',
            items: [
              {
                label: 'Mission & Vision',
                to: '/docs/mission',
              },
              {
                label: 'Culture',
                to: '/docs/culture',
              },
              {
                label: 'How We Work',
                to: '/docs/process',
              },
              {
                label: 'Handbook',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'DataSQRL',
            items: [
              {
                label: 'Contact Us',
                to: '/contact',
              },
              {
                label: 'Main Webpage',
                to: 'https://www.datasqrl.com',
              },
              {
                label: 'About',
                to: 'https://www.datasqrl.com/about',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DataSQRL, Inc.<br /><a href="/docs/attribution">Image Attributions</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/logo.png',
      metadata: [
        {name: 'keywords', content: 'data, API, SQRL, DataSQRL, data service, data pipeline, database, streaming, real-time analytics'},
        {name: 'description', content: 'DataSQRL is a compiler and build tool for streaming data pipelines to build data APIs in minutes.'},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:site', content: '@DataSQRL'}
      ],
    }),

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexPages: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 50
      }),
    ],
  ]
};

module.exports = config;
