<div id="contact_us">
	<div class="header">
		<?php if(uri::segment(1) != 'contact_us'): ?>
			<h6 class="back_link">Back</h6>
		<?php endif; ?>
		<div class="logo_with_text">
		</div>
	</div>
	<div class="form_header">
		<h3>Contact Us</h3>
		<h2>We’d Be Honored To Be Your Personal Attorney.</h2>
		<h1>Call us at: 407.792.2958 or Send us a Message.</h1>
	</div>
	<?php if(isset($flash)): ?>
		<div class="flash">
			<div class="symbol">
				<?= Asset::img("global/{$type}.png"); ?>
				<h6><?= $type ?>!</h6>
			</div>
			<div class="message">
				<h6><?= html_entity_decode($flash) ?></h6><br>
				<h6>Thank you,<br><span class="italic">Laila Archer</span></h6>
			</div>
		</div>
		<div class="close_link_container">
			<?= Html::anchor('/', '<h6 class="close_link">Close This</h6>') ?>
		</div>
	<?php else: ?>
		<div class="form">
			<?= Form::open('send_message'); ?>
				<div class="form_input">
					<h4>First Name</h4>
					<input type="text" name="first_name">
				</div>
				<div class="form_input">
					<h4>Last Name</h4>
					<input type="text" name="last_name">
				</div>
				<div class="form_input">
					<h4>Email</h4>
					<input type="email" name="email">
				</div>
				<div class="form_input">
					<h4>Phone Number</h4>
					<input type="phone" name="phone[]" autocomplete="off"
					><input type="phone" name="phone[]" autocomplete="off"
					><input type="phone" name="phone[]" autocomplete="off">
				</div>
				<div class="form_textarea">
					<h4>Message</h4>
					<textarea name="message" maxlength="1000"></textarea>
				</div>
				<div class="form_button">
					<button type="submit">Send Message</button>
				</div>
			<?= Form::close(); ?>
		</div>
	<?php endif; ?>
</div>