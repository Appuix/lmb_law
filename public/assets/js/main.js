Main = {

	toggle_nav: function(){
		if($('header .slide_nav').css('right') == '0px'){
			$('header .slide_nav').animate({
				'right': '-178px'
			}, 250);
		}else{
			$('header .slide_nav').animate({
				'right': '0'
			}, 250);
		}
	},

	init: function(){
		$('header .burger_button').click(this.toggle_nav);
	}
	
}

$(function() {
	Main.init();
});