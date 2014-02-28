module.exports = function ( context ) {
  var data = [];
  for (var i = 0; i < context.resources.albums.data.length; i++) {
    if (context.resources.albums.data[i].count != undefined) {
      data.push(context.resources.albums.data[i]);
    }
  }
  context.resources.albums.data = data;
  return context;
}
