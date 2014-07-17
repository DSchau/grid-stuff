'use strict';
angular.module('gridStuffApp')
.filter('getSize', function() {
	var sizes = {
	  0: 'Small',
	  1: 'Medium',
	  2: 'Large',
	  3: 'X-Large',
	  4: 'XX-Large'
	};

	return function(input) {
		return sizes[input] || 'Undefined';
	};
})
.filter('emToPx', function() {
	return function(input) {
		if ( /.+em$/.test(input) ) {
			var numString = parseInt(input.replace(/em$/, ''), 10);
			return input + ' (' + (numString * 16) + 'px)';
		}
		return input;
	};
});