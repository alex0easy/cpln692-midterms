/*
THIS FILE IS USED TO STORE PAGE-SPECIFIC DATA
*/

// TEXT
bodytext=[];

bodytext[0]="The data here is a sample of 2000 home sales in Beijing in the year 2017. Let's take a look at the biggest homes, most expensive homes, and the extent of subway lines in the city.";
bodytext[1]='This is second page';
bodytext[2]='This is third page';
bodytext[3]='This is fourth page';
bodytext[4]='This is fifth and the last page';

// Next paragraph as Needed.
bodytext2=[];
bodytext2[0]="First, have a look at all of the data."
bodytext2[1]="";
bodytext2[2]="";
bodytext2[3]="";
bodytext2[4]="";

// TITLE
titletext=[];

titletext[0]="Home Sales in Beijing, 2017";
titletext[1]='Biggest Homes by SquareMeters';
titletext[2]='Most Expensive Homes by Unit Price';
titletext[3]='Subway Extent';
titletext[4]='Filter Your Own Data';

// FUNCTION FOR FILTERING DATA FOR EACH PAGE
 var filterdata={
   0: function (list) {return list;},
   1: function (list) {return list;},
   2: function (list) {return list;},
   3: function (list) {return list;},
   4: function (list) {return list;},
};
