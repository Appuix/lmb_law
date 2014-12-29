<?= isset($contact_us) ? $contact_us : null ?>
<div id="page">
	<div class="header">
		<div class="logo_with_text">
		</div>
		<div class="slogan">
			<h2><?= $content->header->slogan_h2 ?></h2>
			<h1><?= $content->header->slogan_h1 ?></h1>
		</div>
		<div class="cta">
			<button class="cta_btn the_difference">What makes us different?</button>
		</div>
		<div class="down_arrow">
		</div>
	</div>
	<div id="content">
		<div id="the_difference" class="<?= $content->the_difference->background ?>">
			<h3 class="marker"></h3>
			<h3><?= $content->the_difference->title ?></h3>
			<div>
				<div class="text_list">
					<?php foreach ($content->the_difference->list_left as $difference): ?>
						<div class="text_box">
							<h6><?= $difference->number ?></h6>
							<h4><?= $difference->title ?></h4>
							<p><?= $difference->text ?></p>
						</div>
					<?php endforeach ?>
				</div>
				<div class="text_list">
					<?php foreach ($content->the_difference->list_right as $difference): ?>
						<div class="text_box">
							<h6><?= $difference->number ?></h6>
							<h4><?= $difference->title ?></h4>
							<p><?= $difference->text ?></p>
						</div>
					<?php endforeach ?>
				</div>
			</div>
			<div class="content_cta">
				<h3><?= $content->contact->cta->title ?></h3>
				<h6>CALL: 407.792.2958</h6><h6>or</h6><button class="blue_cta_btn contact_us"><?= $content->contact->cta->button ?></button>
			</div>
		</div>
		<div id="multi_lingual" class="<?= $content->multi_lingual->background ?>">
			<h3 class="marker"></h3>
			<h3><?= $content->multi_lingual->title ?></h3>
			<h4><?= $content->multi_lingual->text ?></h4>
		</div>
		<div id="why_choose_us" class="<?= $content->why_choose_us->background ?>">
			<h3 class="marker"></h3>
			<h3><?= $content->why_choose_us->title ?></h3>
			<p><?= $content->why_choose_us->text ?></p>
			<div class="content_cta">
				<h3><?= $content->contact->cta->title ?></h3>
				<h6>CALL: 407.792.2958</h6><h6>or</h6><button class="blue_cta_btn contact_us"><?= $content->contact->cta->button ?></button>
			</div>
		</div>
		<div id="practice_areas" class="<?= $content->practice_areas->background ?>">
			<h3 class="marker"></h3>
			<h3><?= $content->practice_areas->title ?></h3>
			<div class="list">
				<?php foreach ($content->practice_areas->list as $practice): ?>
					<div class="box_container">
						<div class="box">
							<div class="outer_box <?= $practice->class ?>">
								<div class="inner_box front">
									<h4><?= $practice->number ?></h4>
									<h5><?= $practice->title ?></h5>
								</div>
								<div class="inner_box back">
									<span class='close_button'>X</span>
									<?php if($practice->class == "contracts"): ?>
										<h4><?= $practice->title ?></h4>
								    	<?= Form::open('') ?>
								    		<p>First Name:</p>
								    		<input type="text" placeholder="First Name">
								    		<p>Last Name:</p>
								    		<input type="text" placeholder="Last Name">
								    		<p>Message:</p>
								    		<textarea placeholder="Tell me about it"></textarea>
								    	<?= Form::close() ?>
									<?php else:?>
										<h4><?= $practice->title ?></h4>
										<p><?= $practice->content ?></p>
										<div class="btn">
											<button class="cta_btn">Contact Us Now</button>
										</div>
									<?php endif;?>
								</div>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<div id="light_box_window" class="practice_areas"></div>
		</div>
		<div id="our_process" class="<?= $content->our_process->background ?>">
			<h3 class="marker"></h3>
			<h3><?= $content->our_process->title ?></h3>
			<div>
				<?php foreach ($content->our_process->list as $process) : ?>
					<div class="step">
						<h4><?= $process->number ?></h4>
						<h4><?= $process->title ?></h4>
						<p><?= $process->text ?></p>
					</div>
				<?php endforeach ?>
			</div>
		</div>
		<div id="the_retainer" class="<?= $content->about_us->background ?>">
			<h3 class="marker"></h3>
			<h3><?= $content->the_retainer->title ?></h3>
			<div>
				<p><?= $content->the_retainer->text ?></p>
			</div>
		</div>
		<div id="about_us" class="<?= $content->about_us->background ?>">
			<h3 class="marker"></h3>
			<h3><?= $content->about_us->title ?></h3>
			<div>
				<div class="laila_archer">
					<div class="img">
						<?= Asset::img("global/".$content->about_us->img) ?>
					</div>
					<div class="info">
						<?php foreach ($content->about_us->data as $data): ?>
							<h6><?= $data ?></h6>
						<?php endforeach; ?>
						<h6 class="email contact_us">Email: <?= $content->about_us->email ?></h6>
					</div>
				</div>
				<div class="text">
					<p><?= $content->about_us->text ?></p>
				</div>
			</div>
			<div class="content_cta">
				<h3><?= $content->contact->cta->title ?></h3>
				<h6>CALL: 407.792.2958</h6><h6>or</h6><button class="blue_cta_btn contact_us"><?= $content->contact->cta->button ?></button>
			</div>
		</div>
		<div id="disclaimer">
			<div>
				<p><span class="title"><?= $content->disclaimer->title ?>:</span> <?= $content->disclaimer->text ?> <?= Html::anchor('disclaimer', 'Read full disclaimer'); ?></p>
			</div>
		</div>
	</div>
</div>