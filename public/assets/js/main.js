Main = {

	toggle_nav: function(e){
		if($('header .slide_nav').css('right') == '0px'){
			$('header .slide_nav').animate({
				'right': '-178px'
			}, 250);
			$('#content > div > h3::before').animate({
				'margin-left': '-178px'
			}, 250);
			$('body').animate({
				'margin-left': '0'
			}, 250);
			$('#light_box_window.default').animate({
				opacity: 0
			}, 250).hide();
		}else{
			$('header .slide_nav').animate({
				'right': '0'
			}, 250);
			$('#content > div > h3::before').animate({
				'margin-left': '0'
			}, 250);
			$('body').animate({
				'margin-left': '-178px'
			}, 250);
			$('#light_box_window.default').show().animate({
				opacity: 1
			}, 250);
		}
	},

	close_practice_area: function(e){
		var self = $(this);
		self.parent().parent().parent().css({
			'width': '248px',
			'height': 'auto',
			'margin': '0',
			'position': 'initial',
		}).removeClass('flipped');
	
		self.parent().parent().css({
			'transform': 'rotateY(0deg)',
			'box-shadow': 'none',
			'position': 'initial',
			'min-width': '248px',
			'z-index': 0,
			'width': '248px',
			'height': '148px',
		});

		$('#light_box_window.practice_areas').animate({
			opacity: 0,
		}, 250).hide();
	},

	show_practice_area: function(e){
		var self = $(this),
			height = self.find('.inner_box.back h4').height() + self.find('.inner_box.back p').height() + 50 + "px",
			left = Number($('#practice_areas .list').css('margin-left').slice(0,-2)) + 10 + "px";

		self.find('.close_button').click(Main.close_practice_area);

		if(!self.hasClass("flipped")){
			$('#light_box_window.practice_areas').show().animate({
				opacity: 1,
			}, 250);

			self.css({
				'width': '94%',
				'height': 'auto',
				'margin': '0 auto',
				'position': 'absolute',
				'left': left,
			}).addClass('flipped');
		
			self.find('.outer_box').css({
				'transform': 'rotateY(180deg)',
				'box-shadow': '-5px 5px 5px #aaa',
				'position': 'absolute',
				'z-index': 99995,
				'min-width': '300px',
				'max-width': '960px',
				'width': '97%',
				'height': height,
			});
		}
	},

	close_light_box: function(e){
		$('#light_box_window.default #light_box').css({
			'transform': 'rotateY(270deg)',
			'webkitTransform': 'rotateY(270deg)',
		});

		$('#light_box_window.default').animate({
			opacity: 0
		}, 750, function(){
			$('#light_box_window.default').hide()
		});
	},

	during_resize: function(e){
		var left = Number($('#practice_areas .list').css('margin-left').slice(0,-2)) + 10 + "px";

		$('#practice_areas .box.flipped').css({
			'left': left,
		})
	},

	init: function(){
		$('header .burger_button').click(this.toggle_nav);
		$('#practice_areas .box').click(this.show_practice_area);
		$('#practice_areas .box .inner_box.back').click(function(){return false});
		$('#light_box_window.contracts #light_box .close_button').click(this.close_contracts_form);
		window.onresize = function(){
			Main.during_resize();
		};
	}
	
}

$(function() {
	Main.init();
});