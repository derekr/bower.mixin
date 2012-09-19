var app = {};

app.list = $();

app.init = function (packages) {
  // get all packages
  // init with shit
  
  var packageLiString = '';
  
  _.each(packages, function (package) {
    packageLiString += '<li>' + package.name + ' - ' + package.url + '</li>';
  });
  
  this.list.append(packageLiString);
};