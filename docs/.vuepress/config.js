module.exports = {
  title: 'Vue Starter Docs',
  description: 'Vue2 project boilerplate for large scale applications.',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Github',
        link: 'https://github.com/getamas/vue-starter'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: ['/guide/', '/guide/development']
      }
    ]
  }
}
