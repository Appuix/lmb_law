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
			if($('textarea[name="message"]').length > 0){
				$('textarea[name="message"]').focus();
			}
		}
	},

	validate_first_name: function(e){
		if($('input[name="first_name"]').val() != ""){
			return true;
			$('input[name="first_name"]').css({
				border: '3px solid #ffffff'
			})
		}else{
			$('input[name="first_name"]').css({
				border: '3px solid #000000'
			})
			return false;
		}
	},

	validate_last_name: function(e){
		if($('input[name="last_name"]').val() != ""){
			return true;
			$('input[name="last_name"]').css({
				border: '3px solid #ffffff'
			})
		}else{
			$('input[name="last_name"]').css({
				border: '3px solid #000000'
			})
			return false;
		}
	},

	validate_email: function(e){
		if($('input[name="email"]').val() != ""){
			return true;
			$('input[name="email"]').css({
				border: '3px solid #ffffff'
			})
		}else{
			$('input[name="email"]').css({
				border: '3px solid #000000'
			})
			return false;
		}
	},

	validate_phone: function(e){
		var first_valid = false,
			second_valid = false,
			third_valid = false;

		if($($('input[name="phone[]"]')[0]).val().length == 3){
			first_valid = true;
			$($('input[name="phone[]"]')[0]).css({
				border: '3px solid #ffffff'
			})
		}else{
			$($('input[name="phone[]"]')[0]).css({
				border: '3px solid #000000'
			})
		}

		if($($('input[name="phone[]"]')[1]).val().length == 3){
			second_valid = true;
			$($('input[name="phone[]"]')[1]).css({
				border: '3px solid #ffffff'
			})
		}else{
			$($('input[name="phone[]"]')[1]).css({
				border: '3px solid #000000'
			})
		}

		if($($('input[name="phone[]"]')[2]).val().length == 4){
			third_valid = true;
			$($('input[name="phone[]"]')[2]).css({
				border: '3px solid #ffffff'
			})
		}else{
			$($('input[name="phone[]"]')[2]).css({
				border: '3px solid #000000'
			})
		}

		if(first_valid && second_valid && third_valid){
			return true;
		}else{
			return false;
		}
	},

	validate_message: function(e){
		if($('textarea[name="message"]').val() != ""){
			return true;
			$('textarea[name="message"]').css({
				border: '3px solid #ffffff'
			})
		}else{
			$('textarea[name="message"]').css({
				border: '3px solid #000000'
			})
			return false;
		}
	},

	validate_on_submit: function(e){
		var valid_first_name = Contact.validate_first_name(),
			valid_last_name = Contact.validate_last_name(),
			valid_email = Contact.validate_email(),
			valid_number = Contact.validate_phone(),
			valid_message = Contact.validate_message();

		if(valid_first_name && valid_last_name && valid_email && valid_number && valid_message){
			return true;
		}else{
			$('input, textarea').keyup(Contact.validate_on_key_up);
			return false;
		}

	},

	validate_on_key_up: function(e){
		Contact.validate_first_name();
		Contact.validate_last_name();
		Contact.validate_email();
		Contact.validate_phone();
		Contact.validate_message();
	},

	init: function() {
		$('input[type="phone"]').keydown(this.update_phone);
		$('input[type="phone"]').keyup(this.check_phone);

		$('#contact_us button[type="submit"]').click(this.validate_on_submit);
	}
}

$(document).ready(function(){
	Contact.init()
})