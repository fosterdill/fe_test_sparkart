var date = require('datejs');
module.exports = function ( context ) {
  var data = [];

  //remove all album objects which contain no photos
  for (var i = 0; i < context.resources.albums.data.length; i++) {
    if (context.resources.albums.data[i].count != undefined) {
      data.push(context.resources.albums.data[i]);
    }
  }

  //convert dates to be human readable
  for (var i = 0; i < data.length; i++) {
    var date = Date.parse(data[i].created_time);
    data[i].created_time = date.toString("dddd MMM d, HH:mm tt, yyyy");
  }

  context.resources.albums.data = data;
  return context;
}
