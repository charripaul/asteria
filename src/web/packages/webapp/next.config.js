// pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules')(['lodash-es', '@asteria/stores', '@asteria/client-side-apis']);

module.exports = withTM();
