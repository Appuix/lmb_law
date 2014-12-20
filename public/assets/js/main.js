Main = {

	toggle_nav: function(e){
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

	show_practice_area: function(e){
		var self = $(this),
			content = "";

		if(self.hasClass('business_disputes')){
			content = "<span class='close_button'>X</span>"+
			"<h2>Business Disputes</h2>"+
			"<p>"+
			self.attr('data-index')+
			"</p>";
		}else if(self.hasClass('comercial_litigation')){
			content = "<span class='close_button'>X</span>"+
			"<h2>Comercial Litigation</h2>"+
			"<p>"+
			self.attr('data-index')+
			"</p>";
		}else if(self.hasClass('condominium_and_homeowners')){
			content = "<span class='close_button'>X</span>"+
			"<h2>Condominium & Homeowners</h2>"+
			"<p>"+
			self.attr('data-index')+
			"</p>";
		}else if(self.hasClass('foreclosure')){
			content = "<span class='close_button'>X</span>"+
			"<h2>Foreclosure</h2>"+
			"<p>"+
			self.attr('data-index')+
			"</p>";
		}else if(self.hasClass('labor_law')){
			content = "<span class='close_button'>X</span>"+
			"<h2>Labor Law</h2>"+
			"<p>"+
			self.attr('data-index')+
			"</p>";
		}else if(self.hasClass('products_liability')){
			content = "<span class='close_button'>X</span>"+
			"<h2>Products Liability</h2>"+
			"<p>"+
			self.attr('data-index')+
			"</p>";
		}else{
			content = "<span class='close_button'>X</span>"+
			"<h2>Error</h2>"+
			"<p>"+
			"There seems to be a problem, please try again later."+
			"</p>";
		}

		$('#light_box_window.default #light_box').html(content);
		$('#light_box_window.default #light_box .close_button').click(Main.close_light_box);
		$('#light_box_window.default').show().animate({
			opacity: 1
		}, 750);
	
		$('#light_box_window.default #light_box').css({
			'transform': 'rotateY(360deg)',
			'webkitTransform': 'rotateY(360deg)',
		});
	},

	show_contracts_form: function(e){
		var self = $(this);

		if(self.hasClass('contracts')){
			$('#light_box_window.contracts').show().animate({
				opacity: 1
			}, 750);

			$('#light_box_window.contracts #light_box').css({
				'transform': 'rotateY(360deg)',
				'webkitTransform': 'rotateY(360deg)',
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
			$('#light_box_window.default').hide().css({
				opacity: 1
			});
		});
	},

	close_contracts_form: function(e){
		$('#light_box_window.contracts #light_box').css({
			'transform': 'rotateY(270deg)',
			'webkitTransform': 'rotateY(270deg)',
		});

		$('#light_box_window.contracts').animate({
			opacity: 0
		}, 750, function(){
			$('#light_box_window.contracts').hide().css({
				opacity: 1
			});
		});
	},

	init: function(){
		$('header .burger_button').click(this.toggle_nav);
		$('#practice_areas .outer_box:not(.contracts)').click(this.show_practice_area);
		$('#practice_areas .outer_box.contracts').click(this.show_contracts_form);
		$('#light_box_window.contracts #light_box .close_button').click(this.close_contracts_form);
	}
	
}

$(function() {
	Main.init();
});