module.export = function(config){
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        files: [
            './custom-matchers.js',
            'test-main.js'
        ],
        plugins: ['karma-jasmine', 'karma-jasmine-matchers'],
        reporters: ['dots'],
        color: true,
        singleRun: true
    });
}