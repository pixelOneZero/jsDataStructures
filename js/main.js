'use strict';

var eleResultsFilter = document.querySelector("[data-results-type=filter]");
var eleResultsMap = document.querySelector("[data-results-type=map]");
var eleResultsReduce = document.querySelector("[data-results-type=reduce]");

/* begin: filter example */
var advertisers = ["time warner","target","target","kohl's","target","nordstrom","cvs","nordstrom","sephora","walgreen's"];
var uniqueAdvertisers = advertisers.filter(function(elem, i, array){
	return advertisers.indexOf(elem) === i;
});
formatResults(uniqueAdvertisers, eleResultsFilter);

/* begin: map example */
var kilometers = [10, 30, 92, 53, 31, 79, 41, 49, 51, 91];
var miles = kilometers.map(function(elem, i) {
	return elem * 0.621371;
});
formatResults(miles, eleResultsMap);

/* begin: reduce example */
var topSellers = [{
	'title': 'The Mythical Man Month',
	'units': 3791
},
{
	'title': 'The Mythical Man Month',
	'units': 2703
},
{
	'title': 'Eloquent JavaScript',
	'units': 2889
},
{
	'title': 'JavaScript: The Good Parts',
	'units': 3016
},
{
	'title': 'Secrets of the JavaScript Ninja',
	'units': 4082
}];

var totalUnits = topSellers.reduce(function(previousValue, element) {
	return previousValue + element.units;
}, 0);
eleResultsReduce.innerHTML = totalUnits;


function formatResults(results, element) {
	for (var i=0; i < results.length; i++) {
		element.innerHTML += results[i];
		if (i < results.length-1) {
			element.innerHTML += ', ';
		}
	}
}