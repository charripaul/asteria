// pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules')(['lodash-es', '@asteria/stores', '@asteria/apis']);

module.exports = withTM();
