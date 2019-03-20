

var map = L.map('map', {
  center: [39.9042, 116.4074],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


// Actual mapping

$(document).ready(function() {
  changebutton(pagenumber);
  changetext(pagenumber);

  getAndParseData();
  resetMap();


  $('#nextbutton').click(function(){
    pagenumber ++;
    changebutton(pagenumber);
    changetext(pagenumber);

    resetMap();
    console.log(allData);
    //myMarkers = ;
    //myMarkers = makeMarkers(allData);
    //plotMarkers(allData);
  });

  $('#previousbutton').click(function(){
    pagenumber --;
    changebutton(pagenumber);
    changetext(pagenumber);

    resetMap();

  });
});


/*
ACTUALLY RUNNING
*/
