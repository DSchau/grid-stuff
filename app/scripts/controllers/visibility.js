'use strict';

 angular.module('gridStuffApp')
 .controller('VisibilityCtrl', function ($scope, modal) {
 	$scope.sizes = [
	 	{
	 		size: 'Small',
	 		show: 'show-for-small-only',
	 		hide: 'hide-for-small-only'
	 	},
	 	{
	 		size: 'Medium',
	 		show: 'show-for-medium-only',
	 		hide: 'hide-for-medium-only'
	 	},
	 	{
	 		size: 'Large',
	 		show: 'show-for-large-only',
	 		hide: 'hide-for-large-only'
	 	},
	 	{
	 		size: 'XLarge',
	 		show: 'show-for-xlarge-only',
	 		hide: 'hide-for-xlarge-only'
	 	},
	 	{
	 		size: 'XxLarge',
	 		show: 'show-for-xxlarge-only',
	 		hide: 'hide-for-xxlarge-only'
	 	},
 	];
 });