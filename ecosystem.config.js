module.exports = {
  apps: [
    // First application
    {
      name: 'EXAMPLE_DEPLOY',
      script: 'index.js',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy : {
    production : {
      user : 'ppetit',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:Tenjin0/deploy-example.git',
      path : '/home/ppetit/deploy',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
