var bower = require('bower/lib/core/source'),
    path = require('path'),
    getInstallPath = require('./getInstallPath.js');

Hooks.addMenuItem("Actions/Bower/Install components…", "cmd-ctrl-b", function() {
  
  var installPath = getInstallPath(
    path.dirname(Document.current().path())
  );
  console.log(installPath);
  var win = new Window();
  win.htmlPath = "index.html";
  win.title = "Bower - Install components"
  win.useDefaultCSS = true;
  win.buttons = ["Nevermind"];
  win.onButtonClick = function() { win.close(); }
  win.run();
  
  win.onMessage = function (name, arguments) {
    if (name === 'install') {
      var pkgName = arguments[0];
      
      bower.info(pkgName, function (err, pkgData) {
        var pkg = pkgData.pkg;
        process.chdir(installPath);
        pkg.install();
      });
    }
  };
  
  bower.all(function (err, packages) {
    win.applyFunction('initBower', [packages]);
  });
  
});