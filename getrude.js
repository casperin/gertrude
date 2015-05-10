/* global process, __dirname */
var es6Detective = require('detective-es6');
var amdetective = require('amdetective');
var glob = require('glob');
var fs = require('fs');
var _ = require('lodash');

var root = _.last(process.argv),
    format = process.argv[process.argv.indexOf('-f') + 1] || 'es6';

glob(root + '**/*.js', function (err, files) {
    var data = [];

    files.forEach(function (fileName) {
        var mySourceCode = fs.readFileSync(fileName, 'utf8'),
            dependencies = [];

        if (format === 'es6') {
            dependencies = es6Detective(mySourceCode);
        }

        if (format === 'amd') {
            dependencies = amdetective(mySourceCode);
        }

        dependencies.forEach(function (dependency) {
            if (dependency === 'require') {
                return;
            }

            data.push({
                source: fileName.replace(root, './').replace('.js', ''),
                target: dependency.replace('.js', ''),
                type: 'dependency'
            });
        });
    });

    var template = fs.readFileSync(__dirname + '/template.html', 'utf8');

    var html = _.template(template)({
        links: JSON.stringify(data, null, 4)
    });

    process.stdout.write(html);
});

