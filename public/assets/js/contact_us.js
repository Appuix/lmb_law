Contact = {
	update_phone: function(e){
		var first = $($('input[type="phone"]')[0]),
			second = $($('input[type="phone"]')[1]),
			third = $($('input[type="phone"]')[2]),
			one = first.val().length,
			two = second.val().length,
			three = third.val().length;

		if(e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 27 || e.keyCode == 13 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)){
			return true ;
		}else {
			if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 )){
				return false;
			}
		}

		if(window.getSelection().toString() == ''){
			if(one == 3 && first.is(':focus') && e.keyCode != 8 && e.keyCode != 9){
				return false;
			}

			if(two == 3 && second.is(':focus') && e.keyCode != 8 && e.keyCode != 9){
				return false;
			}

			if(three == 4 && third.is(':focus') && e.keyCode != 8 && e.keyCode != 9){
				return false;
			}
		}
	},

	check_phone: function(e){
		var first = $($('input[type="phone"]')[0]),
			second = $($('input[type="phone"]')[1]),
			third = $($('input[type="phone"]')[2]),
			one = first.val().length,
			two = second.val().length,
			three = third.val().length;

		if(one == 3 && 
			e.keyCode != 8 && 
			e.keyCode != 9 && 
			e.keyCode != 37 && 
			e.keyCode != 39 &&
			first.is(':focus')){
			second.focus();
		}else if(one == 3 && 
			two == 3 && 
			e.keyCode != 8 && 
			e.keyCode != 9 && 
			e.keyCode != 37 && 
			e.keyCode != 39 &&
			second.is(':focus')){
			third.focus();
		}else if(one == 3 && 
			two == 3 && 
			three == 4 && 
			e.keyCode != 8 && 
			e.keyCode != 9 && 
			e.keyCode != 37 && 
			e.keyCode != 39 &&
			third.is(':focus')){
			if($('textarea').length > 0){
				$('textarea').focus();
			}
		}
	},

	init: function() {
		$('input[type="phone"]').keydown(this.update_phone);
		$('input[type="phone"]').keyup(this.check_phone);
	}
}

$(document).ready(function(){
	Contact.init()
})