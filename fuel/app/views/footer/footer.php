<footer>
	<div class="map">
		<iframe width="100%" height="235px" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=<?= $map_address ?>&key=<?= $map_key ?>"></iframe>
	</div>
	<div class="nav">
		<ul>
			<?= HTML::anchor('#the_difference', '<li>The Difference</li>'); ?>
			<?= HTML::anchor('#multi_lingual', '<li>Multi-Lingual</li>'); ?>
			<?= HTML::anchor('#why_choose_us', '<li>Why Choose Us?</li>'); ?>
			<?= HTML::anchor('#practice_areas', '<li>Practice Areas</li>'); ?>
			<?= HTML::anchor('#our_process', '<li>Our Process</li>'); ?>
			<?= HTML::anchor('#the_retainer', '<li>The Retainer</li>'); ?>
			<?= HTML::anchor('#about_us', '<li>About Us</li>'); ?>
			<?= HTML::anchor('http://www.appuix.com', '<li>Web Design by'. Asset::img('appuix/logo.png') .'</li>'); ?>
		</ul>
	</div>
</footer>