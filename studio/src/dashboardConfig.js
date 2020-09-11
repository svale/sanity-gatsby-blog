export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5b36ab994770e54470487d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4bveg3vm',
                  apiId: 'd9eb8525-6f69-4dac-abd4-cce6bbac9c8d'
                },
                {
                  buildHookId: '5f5b36ab01a51a1b140c1953',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bbscfk4g',
                  apiId: 'ee6c0d21-de79-414e-b637-f2f61e7c7b39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/svale/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bbscfk4g.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
