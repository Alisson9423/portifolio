// config-overrides.js
const tsImportPluginFactory = require('ts-import-plugin');
const { getLoader } = require('react-app-rewired');
const rewireLessModules = require('react-app-rewire-less-modules');

module.exports = function override(config, env) {
    const tsLoader = getLoader(
        config.module.rules,
        rule =>
            rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
                libraryDirectory: 'es',
                libraryName: 'antd',
                style: true
            }) ]
        })
    };

    config = rewireLessModules.withLoaderOptions(
        `${env === 'production' ? 'wmf' : '[path][name]__[local]-'}-[hash:base64:8]`, {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' }
        })(config, env);

    return config;
};