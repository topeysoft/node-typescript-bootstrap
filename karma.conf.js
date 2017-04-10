// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'karma-typescript'],
        specReporter: {
            maxLogLines: 5, // limit number of lines logged per test
            suppressErrorSummary: true, // do not print error summary
            suppressFailed: false, // do not print information about failed tests
            suppressPassed: false, // do not print information about passed tests
            suppressSkipped: true, // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
        },
        // plugins: [
        //     require('karma-jasmine'),
        //     require("karma-spec-reporter"),
        //     require('karma-chrome-launcher'),
        //     require('karma-remap-istanbul'),
        //     require('karma-typescript'),
        // ],
        files: [{
            pattern: 'src/**/*.spec.ts',
            watched: true
        }],
        preprocessors: {
            // './src/**/*.ts': ['karma-typescript']
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        remapIstanbulReporter: {
            reports: {
                html: 'coverage',
                lcovonly: './coverage/coverage.lcov'
            }
        },
        reporters: ["spec"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};