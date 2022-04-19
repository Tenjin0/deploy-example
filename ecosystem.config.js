module.exports = {
  apps : [{
    script: 'index.js',
  }],
  deploy : {
    production : {
      user : 'ppetit',
      host : '88.162.216.122',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
