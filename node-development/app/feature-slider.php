<?php
	include 'php-includes/global-functions.php';
	get_header('Welcome [Feature Slider]');
?>
<body> 
	<?php get_site_header(); ?>
	<section class="bc-flickty-slider is-full-width"> 
		<a href="javascript:void(0)" class="bc-flickty-slider__prev is-inactive">
			<svg version="1.1" class="bc-svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<use xlink:href="./media/svg/icons/bc-svgs.svg#carat"></use>  
			</svg>
		</a>
		<a href="javascript:void(0)" class="bc-flickty-slider__next">
			<svg version="1.1" class="bc-svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<use xlink:href="./media/svg/icons/bc-svgs.svg#carat"></use>  
			</svg>
		</a>
		
		<article class="bc-flickty-slider__slide"> 
			<div class="bc-flickty-slider__slide__overlay"></div> 
			<img src="media/irish-family--portrait.jpg" alt="A family" class="bc-flickty-slider__slide__image"> 
			<img src="media/irish-family.jpg" alt="A family" class="bc-flickty-slider__slide__image bc-flickty-slider__slide__image--landscape">
			
			<div class="bc-flickty-slider__slide__content">
				<h1 class="bc-flickty-slider__slide__heading">A progressive learning alternative</h1> 
				<h3  class="bc-flickty-slider__slide__sub-heading">Parent/pupil name</h3>
				<p  class="bc-flickty-slider__slide__leader">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
				<p class="bc-icon-link bc-flickty-slider__slide__link">
					Read all about it 
					<svg version="1.1" class="bc-svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						 <use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>  
					</svg>
				</p>
			</div>
		</article>
		<article class="bc-flickty-slider__slide"> 
			<div class="bc-flickty-slider__slide__overlay"></div> 
			<img src="media/irish-family--portrait.jpg" alt="A family" class="bc-flickty-slider__slide__image"> 
			<img src="media/irish-family.jpg" alt="A family" class="bc-flickty-slider__slide__image bc-flickty-slider__slide__image--landscape">
			
			<div class="bc-flickty-slider__slide__content">
				<h1 class="bc-flickty-slider__slide__heading">A progressive learning alternative #2</h1> 
				<h3  class="bc-flickty-slider__slide__sub-heading">Parent/pupil name</h3>
				<p  class="bc-flickty-slider__slide__leader">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
				<p class="bc-icon-link bc-flickty-slider__slide__link">
					Read all about it 
					<svg version="1.1" class="bc-svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						 <use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>  
					</svg>
				</p>
			</div>
		</article>
		<article class="bc-flickty-slider__slide bc-flickty-slider__slide--video is-loaded"> 
			<div class="bc-flickty-slider__slide__content">
				<div class="bc-flickty-slider__video-wrap" data-video-id="FOhS6viEg4w">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/FOhS6viEg4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>		
				</div>
				<h1 class="bc-flickty-slider__slide__heading">A progressive learning alternative #2</h1> 
				
				
				<h3  class="bc-flickty-slider__slide__sub-heading">
					Parent/pupil name
				</h3>
				<p  class="bc-flickty-slider__slide__leader">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
				<p class="bc-icon-link bc-flickty-slider__slide__link">
					Read all about it 
					<svg version="1.1" class="bc-svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						 <use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>  
					</svg>
				</p>
			</div>
			
		</article>
	</section><!-- // .bc-flickty-slider -->
	<?php
		get_global_CTA();
	?>
	<script src="scripts/app-concat.js"></script> 
</body>
</html> 