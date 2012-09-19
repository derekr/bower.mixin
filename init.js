var bower = require('bower/lib/core/source');

Hooks.addMenuItem("Actions/Bower/Install components…", "cmd-ctrl-b", function() {
  
  // bower.search('jquery', function (err, data) {
  //   console.log(data);
  // });
  // 
  // bower.info('jquery', function (err, data) {
  //   console.log(data);
  // });
  
  var win = new Window();
  win.htmlPath = "index.html";
  win.useDefaultCSS = true;
  win.buttons = ["Nevermind"];
  win.onButtonClick = function() { win.close(); }
  win.run();
  
  bower.all(function (err, packages) {
    win.applyFunction('initBower', [packages]);
  });
  
});