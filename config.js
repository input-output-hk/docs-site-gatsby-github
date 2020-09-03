const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://cardano.org',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://ucarecdn.com/c1477310-438e-4141-bbf8-b866dd0b258a/CardanoRGB_LogoFullWhite.png',
    logoLink: 'https://cardano.org',
    title:
      "<p>DOCS</p>",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'test_cardano-docs',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/section',
      '/foo',
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Cardano.org', link: 'https://cardano.org' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://why.cardano.org' target='_blank' rel='noopener noreferrer'>Cardano </a><div class='accentCircle'></div><a href='https://www.haskell.org/' target='_blank' rel='noopener noreferrer'>Haskell</a>",
  },
  siteMetadata: {
    title: 'Cardano Documentation',
    description: 'Documentation for the Cardano ecosystem ',
    ogImage: null,
    docsLocation: 'https://cardano.org',
    favicon: 'pwa-512.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Cardano Documention',
      short_name: 'Cardano Docs',
      start_url: '/',
      background_color: '#1d1e21',
      theme_color: '#5281f7',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
