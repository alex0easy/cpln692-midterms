// Global variables
var pagenumber = 0; // start with 0;
var Url = "https://raw.githubusercontent.com/alex0easy/cpln692-midterms/master/data/sample.json";
var allData; // For storing all data;
var pageData; // For storing data to be made into markers;
var myMarkers; // For storing markers.
var myPopups; // For storing popups

var resetMap = function() {
  _.forEach(myMarkers, function(o) {
    map.removeLayer(o);
  });
  myMarkers = [];
};

var generateinfo = function (data) {
  var price, subway, square, rooms, total;
  total = 'RMB ' + data.totalPrice/100 + ' M.';
  price = 'RMB ' + data.price + ' per sqm, ';
  square = data.square + ' square meters, ';
  if (data.subway > 0) {subway = 'Subway Nearby.'} else {subway = 'No subway nearby.'};
  rooms = data.livingRoom;
  line = square + rooms + ' living room(s).' + '<br>' + price + 'for a total price of ' + total +'<br>'+ subway;
  return line;
};

var makeMarkers = function (list){
  var markerlist=[];
  _.each(list, function(o){
        var marker = L.circleMarker([o.lat, o.lng], {radius: 9});
        marker['popcontent'] = generateinfo(o);
        markerlist.push(marker);
    });
    return markerlist;
};

var plotMarkers = function (list){
  _.each(list, function(marker){
    marker.addTo(map);
    marker.bindPopup(marker['popcontent']).openPopup();
  });
};

var changetext = function (pagenumber) {
  $('#text-label1').text(bodytext[pagenumber]);
  $('#text-label2').text(bodytext2[pagenumber]);
  $('#mainheading').text(titletext[pagenumber]);

  if (pagenumber==0){$('#previousbutton').hide();}
  else if (pagenumber==4) {$('#nextbutton').hide();}
  else {
    $('#nextbutton').show();
    $('#previousbutton').show();
  };
};

var makePage = function() {

  resetMap(); // Clears previous map.
  changetext(pagenumber); // Changes text.
  pageData = filterdata[pagenumber](allData); // Filter data applicable for this page.
  myMarkers = makeMarkers(pageData); // Generate markers.
  plotMarkers(myMarkers); // Plot those markers.
  map.setView([centers[pagenumber].x, centers[pagenumber].y], centers[pagenumber].zoom); // Change map zoom and center.

};
