#!/usr/bin/env node
var envDisable = Boolean(process.env.DISABLE_AUTHOR_POST_INSTALL);
var logLevel = process.env.npm_config_loglevel;
var logLevelDisplay = ['silent', 'error', 'warn'].indexOf(logLevel) > -1;

if (!envDisable && !logLevelDisplay) {
  var pkg = require(require('path').resolve('./package.json'));
  if (pkg.credit) {
   if(pkg.credit.customMessage){
    console.log(`\u001b[96m\u001b[1m ${pkg.credit.customMessage}\u001b[96m\u001b[1m`);
   } else {
    console.log(`\u001b[96m\u001b[1mThank you for using ${pkg.name}!\u001b[96m\u001b[1m`);
   }
    console.log(`\u001b[0m\u001b[96mThis Program was built by ${pkg.credit.author.name} ${pkg.credit.company.name}:\u001b[22m\u001b[39m`);
    console.log(`> \u001b[94m${pkg.credit.author.url} || ${pkg.credit.company.url}/\u001b[0m\n`);

  }
}
