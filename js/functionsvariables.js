// Global variables
var pagenumber = 0; // start with 0;
var Url = "https://raw.githubusercontent.com/alex0easy/cpln692-midterms/master/data/sample.json";
var allData; // For storing all data;
var pageData; // For storing data to be made into markers;
var myMarkers; // For storing markers.
var myPopups; // For storing popups

// Global functions

var resetMap = function() {
  _.forEach(myMarkers, function(o) {
    map.removeLayer(o);
  });
  myMarkers = [];
  $('#infotext').show();
};

var generateinfo = function(data) {
  var info = {
    totalsize: data.square,
    livingroom: data.livingRoom,
    unitprice: data.price + " RMB",
    gross: data.totalPrice/100 + " Million RMB",
    subway: data.subway
  };
  return info;
};

var makeMarkers = function(list) {
  var markerlist = [];
  _.each(list, function(o) {
    var marker = L.circleMarker([o.lat, o.lng], {
      radius: 9,
      color: o.color
    });
    marker['information'] = generateinfo(o);
    markerlist.push(marker);
  });
  return markerlist;
};

var getSubway = function (o) {
  if (o.subway ==1){return "Yes"} else {return "No"};
};

var displaytable = function(obj) {
  $('#infotext').hide();
  $('#infotable').show();

  var subwayinfo = getSubway(obj);

  $('#totalsize').text(obj.totalsize);
  $('#nooflivingroom').text(obj.livingroom);
  $('#unitprice').text(obj.unitprice);
  $('#ntotalprice').text(obj.gross);
  $('#nsubwaynearby').text(subwayinfo);
};

var plotMarkers = function(list) {
  _.each(list, function(marker) {
    marker.addTo(map).on('click', function(e) {
      displaytable(this.information);
    });
  });
};


var changetext = function(pagenumber) {
  $('#text-label1').text(bodytext[pagenumber]);
  $('#text-label2').text(bodytext2[pagenumber]);
  $('#mainheading').text(titletext[pagenumber]);

  if (pagenumber == 0) {
    $('#previousbutton').hide();
    $('#inputs').hide();

  } else if (pagenumber == 4) {
    $('#nextbutton').hide();
    $('#inputs').show();
  } else {
    $('#nextbutton').show();
    $('#previousbutton').show();
    $('#inputs').hide();
    $('#numberofresults').text(0);
  };
};

var makePage = function() {
  if (pagenumber < 4) { // if not last page
    resetMap(); // Clears previous map.
    changetext(pagenumber); // Changes text.
    pageData = filterdata[pagenumber](allData); // Filter data applicable for this page.
    myMarkers = makeMarkers(pageData); // Generate markers.
    plotMarkers(myMarkers); // Plot those markers.
    map.setView([centers[pagenumber].x, centers[pagenumber].y], centers[pagenumber].zoom); // Change map zoom and center.
    $('#infotable').hide();
  } else {
    resetMap();
    changetext(pagenumber);
    $('#infotable').hide();
  }
};

var specialMakePage = function() { // just for last page
  resetMap();
  pageData = filterdata[4](allData);
  myMarkers = makeMarkers(pageData); // Generate markers.
  plotMarkers(myMarkers); // Plot those markers.
  map.setView([centers[pagenumber].x, centers[pagenumber].y], centers[pagenumber].zoom); // Change map zoom and center.
  $('#numberofresults').text(pageData.length);
  $('#infotable').hide();
}
