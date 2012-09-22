//
// Locate the appropriate .jshintrc to use when running JSHint.
//
// Borrows search logic from: http://github.com/jshint/node-jshint/
//

var path = require('path'),
    fs = require('fs');

function findNearestConfig(fileName, dirName) {
    dirName = dirName || process.cwd();

    var targetFileName = path.normalize(path.join(dirName, fileName));
    if (fs.existsSync(targetFileName)) {
        return dirName;
    }

    var parentDirName = path.resolve(dirName, '..');
    if (dirName === parentDirName) {
        return null;
    } else {
        return findNearestConfig(fileName, parentDirName);
    }
}

function getInstallPath(startingDir) {
    var projectConfigPath = findNearestConfig('component.json', startingDir),
        componentsPath = findNearestConfig('components', startingDir);

    var configPath = projectConfigPath || componentsPath;

    return configPath;
}

module.exports = getInstallPath;