require('datejs');
module.exports = function ( context ) {

  var data = context.resources.photos.data;
  console.log(data);
  //convert dates to be human readable
  for (var i = 0; i < data.length; i++) {
    var date = Date.parse(data[i].created_time);
    context.resources.photos.data[i].created_time = date.toString("dddd MMM d");
  }

  return context;
}
