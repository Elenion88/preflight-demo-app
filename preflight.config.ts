export default {
  url: 'http://localhost:3000',

  routes: {
    include: ['/'],
    exclude: ['/api/*', '/_next/*'],
    maxRoutes: 1,
  },

  viewports: [
    { name: 'desktop', width: 1280, height: 900 },
  ],

  qa: {
    categories: ['visual', 'functional', 'accessibility', 'console-errors'],
    minSeverity: 'minor',
    maxFindings: 10,
  },

  fix: {
    enabled: true,
    autoApprove: true,
    maxRetries: 3,
  },

  github: {
    repo: 'Elenion88/preflight-demo-app',
  },

  dashboard: {
    port: 4400,
    open: true,
  },
};
