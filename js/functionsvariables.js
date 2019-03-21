// Global variables
var pagenumber = 0; // start with 0;
var Url = "https://raw.githubusercontent.com/alex0easy/cpln692-midterms/master/data/sample.geojson";
var allData; // For storing all data;
var pageData; // For storing data to be made into markers;
var myMarkers; // For storing markers.

var resetMap = function() {
  _.forEach(myMarkers, function(o) {
    map.removeLayer(o);
  });
  myMarkers = [];
};

/*
var generateinfo = function (data) {
  var price, subway, square, rooms, total;
  total = 'RMB ' + data.totalPrice/100 + 'Mil. ';
  price = data.price + ' per sqm, ';
  square = data.square + ' square meters,';
  if (data.subway == 1) {subway = 'Subway Nearby.'} else {subway = 'No subway nearby'};
  rooms = data.livingRoom;
  line = square + rooms + 'living room(s), ' + price + 'for a total price of ' + total + subway;
  return line;
};

var makeMarkers = function (ll){
  var listofmarkers=[];

  return listofmarkers;
};
*/
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
  resetMap();
  changetext(pagenumber);

  pageData = filterdata[pagenumber](allData);
  //myMarkers = makeMarkers(pageData);
  console.log(pagenumber);

};
