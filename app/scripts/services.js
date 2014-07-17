'use strict';

angular.module('gridStuffApp')
.factory('modal', function($modal) {
	return {
		open: function(template, title, controller, items) {
			return function() {
				var modalInstance = $modal.open({
          templateUrl: template,
          controller: controller,
          title: title
        });
			};
		}
	};
});