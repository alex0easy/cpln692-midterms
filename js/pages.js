/*
THIS FILE IS USED TO STORE PAGE-SPECIFIC DATA
*/

// MAP PROPERTIES
var centers = [];
centers[0] = {x:39.9042, y:116.4074, zoom: 11};
centers[1] = {x:40.0780, y:116.4394, zoom: 15};
centers[2] = {x:39.9042, y:116.4074, zoom: 11};
centers[3] = {x:39.9042, y:116.4074, zoom: 11};
centers[4] = {x:39.9042, y:116.4074, zoom: 11};

// TEXT
// First paragraph
bodytext=[];

bodytext[0]="The data here is a sample of 2000 home sales in Beijing in the year 2017. Let's take a look at the biggest homes, most expensive homes, and the extent of subway lines in the city.";
bodytext[1]='Here are all of the homes that are at least 200 square meters (approx. 2150 sqft) large.';
bodytext[2]='This is third page';
bodytext[3]='This is fourth page';
bodytext[4]='This is fifth and the last page';

// second paragraph
bodytext2=[];
bodytext2[0]="First, have a look at all of the data."
bodytext2[1]="Some of them are concentrated in this area in the northeast suburbs.";
bodytext2[2]="";
bodytext2[3]="";
bodytext2[4]="";

// TITLE
titletext=[];

titletext[0]="Home Sales in Beijing, 2017";
titletext[1]='Biggest Homes by Area';
titletext[2]='Most Expensive Homes by Unit Price';
titletext[3]='Subway Extent';
titletext[4]='Filter Your Own Data';

// FUNCTION FOR FILTERING DATA FOR EACH PAGE
 var filterdata={
   0: function (list) {
     return list;
   },
   1: function (list) {
     var sample = [];
     _.each(list, function(o){
       if(o.square > 200) {sample.push(o);};
     });
     return sample;
   },
   2: function (list) {
     return list;
   },
   3: function (list) {
     return list;
   },
   4: function (list) {
     return list;
   },
};
