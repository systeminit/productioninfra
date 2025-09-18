import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'Build Production Infrastructure',
    description: 'Production Infrastructure with System Initiative and AWS',

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    themeConfig: {
      logo: '/logo.png',

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Foundation', link: '/foundation/iam' },
        { text: 'Infrastructure', link: '/infrastructure/foundational-networking' },
        { text: 'Application', link: '/application/application-artifacts' },
        { text: 'Compute', link: '/compute/application-compute' },
        { text: 'Operations', link: '/operations/continuous-deployment' }
      ],

      sidebar: [
        {
          text: 'Foundation Layer',
          collapsed: false,
          items: [
            { text: 'IAM', link: '/foundation/iam' },
            { text: 'VCS', link: '/foundation/vcs' },
            { text: 'Application Configuration', link: '/foundation/application-configuration' },
            { text: 'Application Dependencies', link: '/foundation/application-dependencies' }
          ]
        },
        {
          text: 'Infrastructure Layer',
          collapsed: false,
          items: [
            { text: 'Foundational Networking', link: '/infrastructure/foundational-networking' },
            { text: 'Observability', link: '/infrastructure/observability' },
            { text: 'Service Discovery', link: '/infrastructure/service-discovery' },
            { text: 'Credential Management', link: '/infrastructure/credential-management-secrets' }
          ]
        },
        {
          text: 'Application Layer',
          collapsed: false,
          items: [
            { text: 'Application Artifacts', link: '/application/application-artifacts' },
            { text: 'Database', link: '/application/database' },
            { text: 'WAF & CDN', link: '/application/waf-cdn' },
            { text: 'Overlay Network', link: '/application/overlay-network' }
          ]
        },
        {
          text: 'Compute & Deployment',
          collapsed: false,
          items: [
            { text: 'Application Compute', link: '/compute/application-compute' },
            { text: 'Continuous Integration', link: '/compute/continuous-integration' },
            { text: 'Health & Smoke Test', link: '/compute/health-smoke-test' },
            { text: 'Load Balancer', link: '/compute/load-balancer' }
          ]
        },
        {
          text: 'Operations',
          collapsed: false,
          items: [
            { text: 'Continuous Deployment', link: '/operations/continuous-deployment' },
            { text: 'Alerts', link: '/operations/alerts' }
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com' }
      ],

      footer: {
        message: 'Production Infrastructure Guide',
        copyright: 'Copyright © 2024'
      }
    },

    // Mermaid configuration
    mermaid: {
      theme: 'default'
    },

    // Ensure mermaid works in production
    vite: {
      define: {
        __VUE_PROD_DEVTOOLS__: false
      }
    }
  })
)