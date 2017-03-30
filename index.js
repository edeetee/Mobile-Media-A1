var constants = {};
var s;

$(function(argument) {
	var constantIds = ["showphone", "title", "takephoto"];

	$background = $("#right-background");

	for (var i = 0; i < constantIds.length; i++) {
		var id = constantIds[i];
		var $item = $("#" + id);
		constants[id] = (function($item){
			return function() { 
				return $item.offset().top + $item.outerHeight()/2 - $background.height()/2;
			};
		})($item);
	}

	s = skrollr.init({
		constants: constants,
		forceHeight: false
	});
});