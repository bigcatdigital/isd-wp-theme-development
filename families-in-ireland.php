<?php
	include 'php-includes/global-functions.php';
	get_header('Welcome [Families in Ireland]');
?>
<body class="bc-feature-page"> 
	<?php 
	 echo '<?xml version="1.0" encoding="utf-8"?>'
	?>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 0 0" class="bc-svg-defs" xml:space="preserve">
				<defs>
					<linearGradient id="isd-rainbow-grad" class="bc-svg-defs__rainbow-grad" gradientUnits="userSpaceOnUse" x1="0" y1="25.5" x2="1440" y2="25.5">
						<stop offset="0" 		class="isd-rainbow-grad__stop1"style="stop-color:#05D1D1"/>
						<stop offset="0.25" class="isd-rainbow-grad__stop2"style="stop-color:#6881DB"/>
						<stop offset="0.5" 	class="isd-rainbow-grad__stop3"style="stop-color:#D02CE5"/>
						<stop offset="0.75" class="isd-rainbow-grad__stop3"style="stop-color:#F2EF11"/>
						<stop offset="1" 		class="isd-rainbow-grad__stop5"style="stop-color:#3B857E"/>
					</linearGradient>	
					<linearGradient id="linear-gradient" class="bc-svg-defs__linear-gradient" viewBox="0 0 100 100" gradientTransform="rotate(135)">
						<stop offset="0%" stop-opacity="1"  class="bc-svg-defs__linear-gradient__col-stop1"/> 
						<stop offset="72%" stop-opacity="1" class="bc-svg-defs__linear-gradient__col-stop2"/>
					</linearGradient>
					<linearGradient id="linear-gradient--shade" class="bc-svg-defs__linear-gradient--shade" viewBox="0 0 100 100" gradientTransform="rotate(135)">
						<stop offset="0%" stop-opacity="1"  class="bc-svg-defs__linear-gradient__col-stop1"/> 
						<stop offset="72%" stop-opacity="1" class="bc-svg-defs__linear-gradient__col-stop2"/>
					</linearGradient>
					<linearGradient id="linear-gradient--orange" class="bc-svg-defs__linear-gradient--orange" viewBox="0 0 100 100" gradientTransform="rotate(135)">
						<stop offset="0%" stop-opacity="1"  class="bc-svg-defs__linear-gradient__col-stop1"/> 
						<stop offset="72%" stop-opacity="1" class="bc-svg-defs__linear-gradient__col-stop2"/>
					</linearGradient>
				</defs>
			</svg>
	<?php get_site_header(); ?>
	<section class="bc-hero bc-hero--inpage has-waves has-mid-green-grad"> 
		<div class="bc-hero__content">
			<div class="bc-hero__body">
				<div class="bc-hero__body__text__IB bc-content-label bc-fade-in-up--is-not-visible">
					<svg class="bc-svg-icon"> 
						<use xlink:href="media/svg/icons/bc-svgs.svg#family-simple-icon"></use>  
					</svg>
					For Families in Ireland
				</div><!-- // .bc-content-label -->
				<div class="bc-hero__body__text bc-fade-in-up--is-not-visible">
					<h1 class="bc-hero__heading">A progressive learning alternative</h1>
					<p class="bc-hero__tagline">International education for families in Ireland</p>
					<!--<p class="">Find out why the International Baccalaureate is the multi-denominational, co-educational and inclusive gold standard for universities and graduate employers</p>
					<p>Find out why the International School of Dublin offers international  families <em>and</em> families in Ireland an alternative option for primary education.</p>-->
					<p>The International School of Dublin offers international families and families in Ireland multi-denominational, co-educational and inclusive option for primary education.</p>
					<div class="bc-hero__cta">
						<a href="javascript:void(0)" class="bc-icon-link--featured">
							Learn about the IB gold-standard education alternative
							<svg class="bc-svg-icon">
								<use xlink:href="media/svg/icons/bc-svgs.svg#arrow"></use> 	
							</svg>
						</a> 
					</div>
				</div><!-- // .bc-hero__body__text --> 
			</div><!-- // .bc-hero__body -->
			<div class="media-overlay"></div> 
			<div class="bc-hero__background-image"></div>   
		</div><!-- // .bc-hero__content -->
		<div class="wave-wrap">
			<?php
				echo '<?xml version="1.0" encoding="utf-8"?>'
			?>
			<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="Layer_1" class="wave-wrap__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 1440 50" xml:space="preserve">
				<path id="isd-rainbow-wave" class="wave-wrap__rainbow" d="M0,1v1v25.2c0,0,200.9-24.7,360-24.7S923.9,50,1080,50s360-23.5,360-23.5V2V1H0z"/>
				<path class="isd-wave"class="wave-wrap__wave" id="isd-wave" d="M0,0v1v24.7C0,25.7,200.9,1,360,1s563.9,47,720,47s360-22.5,360-22.5V1V0H0z"/>
			</svg>
		</div><!-- // .bc-wave-wrap -->
	</section><!-- // .bc-hero--inpage -->
	
	<section class="bc-feature-component bc-expandible-blocks-component"  id="learning-for-life">
		<div class="bc-feature-component__header">
			<div class="bc-feature-component__content__text-content">
				<p class="bc-content-label ib-world-school"> 
					<svg class="bc-svg-icon">
						<use xlink:href="./media/svg/icons/bc-svgs.svg#learning-icon-reverse"></use> 	
					</svg>	
					Teaching and learning
				</p>
				<h1 class="bc-feature-component__heading">Learning for Life</h1>
					<p class="bc-feature-component__intro">At ISD we offer a different option for education. ISD is <b class="has-light-blue-text">multi-denominational</b>, <b class="has-orange-text">co-educational</b> and <b class="has-mid-green-text">inclusive</b>. We have small class sizes to promote individualised education.</p>
			</div>	
		</div><!-- // .bc-feature-component__heading -->
		<div class="bc-feature-component__content">
			<article class="bc-gr-feature bc-gr-columns"> 
				<picture class="bc-gr-feature__media bc-column">
					<img src="media/multicultural-kids.jpg" alt="Happy kids">
				</picture>
				<div class="bc-gr-feature__text bc-column">
					<h2 class="bc-gr-feature__heading">Language development</h2>
					<p><b>We provide Spanish as a foreign language and we promote mother-tongue development. The school is culturally diverse with over 20 nationalities amongst students, staff and parents/guardians.</b></p> 
				</div><!-- // .bc-gr-feature__text bc-column -->
			</article><!-- // .bc-gr-columns.bc-expandible-block -->
			<article class="bc-gr-feature bc-gr-columns">
				<picture class="bc-gr-feature__media bc-column">
					<img src="media/multicultural-kids.jpg" alt="Happy kids">
				</picture>
				<div class="bc-gr-feature__text bc-column"> 
					<h2 class="bc-gr-feature__heading">The International Baccalaureate</h2>
					<p><b>ISD offers the <a href="teaching-and-learning.html">International Baccalaureate (IB)</a>, which is an inquiry based curriculum falling outside national and political agendas. It is based on a continuum which is innovative and relevant and focuses on the total growth of the developing learner.</b></p> 
					<p>Regarded as the gold-standard measurement of academic and intellectual development both by universities and graduate employers.</p>	
					<a href="teaching-and-learning.html" class="bc-icon-link">
						Find out more about the International Baccalaureate
						<svg class="bc-svg-icon">
							<use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>
						</svg>
					</a>
				</div><!-- // bc-gr-feature__text.bc-column | About the International Baccalaureate -->
			</article><!-- // .bc-gr-columns.bc-expandible-block -->
			<article class="bc-gr-feature bc-gr-columns bc-expandible-block">
				<picture class="bc-gr-feature__media bc-column">
					<img src="media/multicultural-kids.jpg" alt="Happy kids">
				</picture>
				<div class="bc-gr-feature__text bc-column"> 
					<h2 class="bc-gr-feature__heading">International-mindedness</h2>
						<p class="bc-expandible-block__intro__intro">We provide Spanish as a foreign language and we promote mother-tongue development. The school is culturally diverse with over 20 nationalities amongst students, staff and parents/guardians.</p> 
						<p>International-mindedness is at the heart of an IB and ISD education.  This includes the understanding of one’s local, regional, national as well as international context and begins with understanding of the uniqueness of oneself, one’s home and one’s nationality and culture.</p>
						
						<div class="bc-expandible-block__body">
							<div class="bc-expandible-block__body__text">
								<p>The diverse nature of our community allows the students to naturally and continually revisit what it is to be globally connected.</p>
								<h3>Global citizenship</h3>
								<p>Any Irish citizen will develop in an ever increasingly interconnected world where their home location will be influenced by global forces; and there are proven benefits for children attending international schools, whether they are local citizens or expatriates.</p>  
								<p>Allowing students to interact and have experience with global awareness and understanding in a first person context from the very start of their education sets them apart from others; this plants the seed for future worldwide networking.</p>  
								<p>It provides valuable skills for later life such as building relationships with people from a variety of cultures and backgrounds, it also equips students with the confidence to travel and work in other countries opening opportunities and experiences throughout adulthood.</p>
								<a class="bc-icon-link" href="teaching-and-learning.html">
									International School of Dublin and global-citizenship
									<svg class="bc-svg-icon">
										<use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>
									</svg>
								</a>
							</div>
						</div><!-- // .bc-expandible-block__body -->
				</div><!-- // .bc-gr-feature__text.bc-column | International-mindedness -->
				<div class="bc-expandible-block__expander">
					<a href="javascript:void(0)" class="bc-expandible-block__expander__button">
						<span class="bc-expandible-block__expander__button__text">
							<span class="inactive-text">Show more</span> 
							<span class="active-text">Show less</span>
						</span>
						<span class="bc-expandible-block__expander__button__icon">
							<svg class="bc-svg-icon">
								<use xlink:href="./media/svg/icons/bc-svgs.svg#close-x"></use> 	
							</svg>	
						</span>
					</a>
				</div><!-- // .bc-expandible-block__expander -->
			</article><!-- // .bc-expandible-block --> 
		</div> <!-- // .bc-feature-component__content -->	
	</section><!-- // .bc-expandible-blocks-component -->
	
	<?php  
		get_global_CTA();
		get_footer();
		get_floating_section_nav('On this page', array(
			'Learning for life' => '#learning-for-life', 
			'Learning for life 2 col' => '#learning-for-life-2-col',
			'Apply now' => '#global-cta') 
    ); 
	?>
	<script src="scripts/app-concat.min.js"></script>  
</body>
</html> 