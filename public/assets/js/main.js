Main = {

	toggle_nav: function(e){
		if($('header .slide_nav').css('right') == '0px'){
			$('header .slide_nav').animate({
				'right': '-250px'
			}, 250);
			if($(window).width() <= 950){
				$('header').animate({
					'right': '0'
				}, 250);
			}else{
				$('header').animate({
					'right': '-72px'
				}, 250);
			}
			$('#content > div > h3::before').animate({
				'margin-left': '-250px'
			}, 250);
			$('#page .header').animate({
				'margin-right': '0'
			}, 250);
			$('#page').animate({
				'margin': '0'
			}, 250);
			$('#light_box_window.default').animate({
				opacity: 0
			}, 250).hide();
		}else{
			$('header .slide_nav').animate({
				'right': '0'
			}, 250);
			$('header').animate({
				'right': '0'
			}, 250);
			$('#content > div > h3::before').animate({
				'margin-left': '0'
			}, 250);
			$('#page .header').animate({
				'margin-right': '-250px'
			}, 250);
			$('#page').animate({
				'margin': '0 250px 0 -250px'
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
			'z-index': 0,
			'left': 'auto',
		}).removeClass('flipped');
	
		self.parent().parent().css({
			'transform': 'rotateY(0deg)',
			'position': 'initial',
			'min-width': '248px',
			'width': '248px',
			'height': '148px',
		});

		self.parent().css({
			'backface-visibility': 'hidden',
		});

		$('#light_box_window.practice_areas').animate({
			opacity: 0,
		}, 250).hide();
	},

	show_practice_area: function(e){
		var self = $(this),
			height = self.find('.inner_box.back h4').height() + self.find('.inner_box.back p').height() + self.find('.inner_box.back button').height() + "px",
			left = Number($('#practice_areas .list').css('margin-left').slice(0,-2)) + 10 + "px";

		self.find('.close_button').click(Main.close_practice_area);

		if(!self.hasClass("flipped")){
			$('#light_box_window.practice_areas').show().animate({
				opacity: 1,
			}, 250, function(){
				self.find('.outer_box .inner_box.back').css({
					'backface-visibility': 'visible',
				});

				height = self.find('.inner_box.back h4').height() + self.find('.inner_box.back p').height() + self.find('.inner_box.back button').height() + 200 + "px";

				self.find('.outer_box').css({
					'height': height,
				});
			});

			self.css({
				'width': '94%',
				'height': 'auto',
				'margin': '0 auto',
				'position': 'absolute',
				'left': left,
				'z-index': 99995,
			}).addClass('flipped');
		
			self.find('.outer_box').css({
				'transform': 'rotateY(180deg)',
				'position': 'absolute',
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
		if($('#practice_areas .list').length){
			var left = Number($('#practice_areas .list').css('margin-left').slice(0,-2)) + 10 + "px";

			$('#practice_areas .box.flipped').css({
				'left': left,
			})
		}

		if($('header .slide_nav').css('right') == '0px'){
			$('header').animate({
				'right': '0'
			}, 250);
		}
	},

	scroll_to_difference: function(e){
		$('body').animate({
			scrollTop: $('#our_commitment')[0].offsetTop,
		}, 500);
	},

	slide_contact_us: function(e){
		if($('#contact_us').css('top') == '0px'){
			$('#contact_us').animate({
				left: '-100%',
			}, 1000, function(){
				$('#contact_us').css({
					top: '-100%',
					left: 0,
					height: 0,
				});
				$('html, body').css('overflow', 'auto');
			});
		}else{
			$('#contact_us').animate({
				top: 0,
				height: '100%',
			}, 1500, function(){
				$('html, body').css('overflow', 'hidden');
			});
		}
	},

	nav_contact_us: function(){
		Main.toggle_nav();
		Main.slide_contact_us();
	},

	contact_us_from_practice_area: function(){
		Main.slide_contact_us();
	},

	init: function(){
		$('header .burger_button').click(this.toggle_nav);
		$('header nav a').click(this.toggle_nav);
		$('#practice_areas .box').click(this.show_practice_area);
		$('#practice_areas .box .inner_box.back').click(function(){return false});
		$('#practice_areas .box .inner_box .cta_btn').click(this.contact_us_from_practice_area);
		$('#light_box_window.contracts #light_box .close_button').click(this.close_contracts_form);
		$('.cta_btn.the_difference').click(this.scroll_to_difference);
		$('.blue_cta_btn.contact_us, .email.contact_us').click(this.slide_contact_us);
		$('nav .contact_us').click(this.nav_contact_us);
		$('#contact_us .back_link').click(this.slide_contact_us);
		window.onresize = function(){
			Main.during_resize();
		};
	}
	
}

$(function() {
	Main.init();
});