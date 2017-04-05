var constants = {};
var s;

$(function(argument) {
	var constantIds = ["showphone", "title", "takephoto", "moreinfo", "disabledinfo"];

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
		forceHeight: false,
		smoothScrolling: false,
		smoothScrollingDuration: 200,
		easing: {
			linear: function(p){
				p *= 2;
				if (p < 1) return Math.pow( 2, 10 * (p - 1) )/2;
				p--;
				return ( -Math.pow( 2, -10 * p) + 2 )/2;
			}
		}
	});
});

Math.easeInOutExpo = function (t) {
	return Math.pow( 2, 10 * (t - 1) );
};