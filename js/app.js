var app = {};

app.list = $();

app.init = function (packages) {
  // get all packages
  // init with shit
  
  var rowsTmpl = Handlebars.templates['rows.tmpl'];
  
  var html = rowsTmpl({ packages: packages });
 
  this.list.append(html);
  
  this.initFilterBar();
};

app.initFilterBar = function () {
  $('.filter-bar input').keyup(function (e) {
    var val = $(e.currentTarget).val();
    
    if (val) {
      var matchSelector = '[data-package-name*="' + val + '"]';
      $('#packages li').not(matchSelector).hide();
      $(matchSelector).show();
    } else {
      $('#packages li').show();
    }
  });
};

app.spinner = {};

app.spinner.addCenteredSpinner = function () {
  var opts = {
    lines: 13, // The number of lines to draw
    length: 7, // The length of each line
    width: 4, // The line thickness
    radius: 10, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    color: '#333', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
  };
  
  var spinner = this.centeredSpinner = new Spinner(opts).spin();
  
  var spinnerContainer = $('.centered-spinner').append(spinner.el);
};

app.spinner.removeCenteredSpinner = function () {
  this.centeredSpinner.stop();
};

Handlebars.registerHelper('lower', function(str) {
  return str.toLowerCase();
});