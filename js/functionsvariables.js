
// Global variables
var pagenumber = 0; // start with 0;
var Url = "https://raw.githubusercontent.com/alex0easy/cpln692-midterms/master/data/sample.geojson";
var allData; // For storing all data;
var pageData; // For storing data to be displayed;
var myMarkers; // For storing markers.

// Global functions

var changebutton = function (pagenumber) {
  if (pagenumber==0){$('#previousbutton').hide();}
  else if (pagenumber==4) {$('#nextbutton').hide();}
  else {
    $('#nextbutton').show();
    $('#previousbutton').show();
  };
};

var changetext = function(pagenumber){
  $('#text-label1').text(bodytext[pagenumber]);
  $('#mainheading').text(titletext[pagenumber]);
};

var getAndParseData = function() {
  var d = $.ajax(Url).done(function(d) {
    allData = JSON.parse(d);
  });
};

var resetMap = function() {
  _.forEach(myMarkers, function(o) {
    map.removeLayer(o);
  });
  myMarkers = null;
};

var makeMarkers = function (ll){
  var listofmarkers=[];
  _.each(ll, function(o) {listofmarkers.push(L.marker())});
  return listofmarkers;
}

var plotMarkers = function(list) {
  _.each(list, function(o){o.addTo(map);});
};
