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
	<section id="bc-hero-in-page" class="bc-hero bc-hero--inpage has-waves has-mid-green-grad is-full-vh"> 
		<div class="bc-hero__background-image"></div>   
		<div class="bc-hero__content">
			<div class="bc-hero__body">
				<div class="bc-hero__body__text bc-fade-in-up--is-not-visible">
					<p class="bc-content-label">
						<svg class="bc-svg-icon"> 
							<use xlink:href="./media/svg/icons/bc-svgs.svg#family-simple-icon"></use>  
						</svg>
						Families in Ireland
					</p>
					<h1 class="bc-hero__heading">Families in Ireland</h1>
					<p class="bc-hero__tagline">International Education in the heart of Dublin</p>
					<p class="">The International School of Dublin (ISD) is comprised of both local and international families. We believe that an international education is not solely for international families.</p>
				</div> 
			</div>
		</div><!-- // .bc-hero__content --> 
		<div class="media-overlay"></div> 
		<div class="wave-wrap">
			<?php echo '<?xml version="1.0" encoding="utf-8"?>' ?>
			<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="Layer_1" class="wave-wrap__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 1440 50" xml:space="preserve">
				<path id="isd-rainbow-wave" class="wave-wrap__rainbow" d="M0,1v1v25.2c0,0,200.9-24.7,360-24.7S923.9,50,1080,50s360-23.5,360-23.5V2V1H0z"/>
				<path class="isd-wave"class="wave-wrap__wave" id="isd-wave" d="M0,0v1v24.7C0,25.7,200.9,1,360,1s563.9,47,720,47s360-22.5,360-22.5V1V0H0z"/>
			</svg>
		</div><!-- // .bc-wave-wrap -->
	</section><!-- // .bc-hero--inpage -->
	<section id="bc-one-col-feature" class="bc-one-col-feature has-shade-01-gradient bc-feature-component" aria-label="Welcome to ISD"> 
		<article class="bc-feature-component__content"> 
			<h1 class="bc-feature-component__heading">Need a heading</h1>
			<p class="bc-feature-component__intro">At ISD we offer a different option for education. ISD is <b class="has-light-blue-text">multi-denominational</b>, <b class="has-orange-text">co-educational</b> and <b class="has-mid-green-text">inclusive</b>. We have small class sizes to promote individualised education.</p>
			<h2 class="has-red-text">Language development</h2>
			<p>We provide Spanish as a foreign language and we promote mother-tongue development. The school is culturally diverse with over 20 nationalities amongst students, staff and parents/guardians.</p>
			<p class="bc-icon-link">
				<a href="teaching-and-learning.html">Find out more about language development</a>
				<svg class="bc-svg-icon">
					<use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>
				</svg>
			</p>
			<h2 class="has-primary-text">The International Baccalaureate</h2>
			<p><b>ISD offers the <a href="teaching-and-learning.html">International Baccalaureate (IB)</a>, which is an inquiry based curriculum falling outside national and political agendas. It is based on a continuum which is innovative and relevant and focuses on the total growth of the developing learner.</b></p>  
			<p>It is regarded as the gold-standard measurement of academic and intellectual development both by universities and leading graduate employers.</p>	
			<p class="bc-icon-link">
				<a href="teaching-and-learning.html">Find out more about the benefits of the International Baccalaureate</a>
				<svg class="bc-svg-icon">
					<use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>
				</svg>
			</p>
			<h2 class="has-mid-green-text">International-mindedness</h2>
			<p>International-mindedness is at the heart of an IB and ISD education.  This includes the understanding of one’s local, regional, national as well as international context and begins with understanding of the uniqueness of oneself, one’s home and one’s nationality and culture.</p>
			<p>The diverse nature of our community allows the students to naturally and continually revisit what it is to be globally connected.</p>
			<h3>Global citizenship</h3>
			<p>Any Irish citizen will develop in an ever increasingly interconnected world where their home location will be influenced by global forces; and there are proven benefits for children attending international schools, whether they are local citizens or expatriates.</p>  
			<p>Allowing students to interact and have experience with global awareness and understanding in a first person context from the very start of their education sets them apart from others; this plants the seed for future worldwide networking.</p>  
			<p>It provides valuable skills for later life such as building relationships with people from a variety of cultures and backgrounds, it also equips students with the confidence to travel and work in other countries opening opportunities and experiences throughout adulthood.</p>
			<p class="bc-icon-link">
				<a href="teaching-and-learning.html">International School of Dublin and global-citizenship</a>
				<svg class="bc-svg-icon">
					<use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>
				</svg>
			</p>

		</article><!-- // .bc-feature-component__content -->
		<div class="bc-feature-component__cta">
			<a class="bc-button" href="about.html">
				Find out more about
				<svg class="bc-svg-icon">
					<use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use> 	
				</svg>
			</a>
			<a href="javascript:void(0)" class="bc-feature-component__next">
				<span class="bc-feature-component__next__text">Next content</span>
				<span class="bc-feature-component__next__icon">
					<svg class="bc-svg-icon">
						<use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use>
					</svg>
				</span>
			</a>
		</div><!-- // .bc-feature-component__cta -->
		<div class="bc-feature-component__grad-overlay"></div><!-- // .bc-feature-component__grad-overlay -->
	</section><!-- // .bc-one-col-feature -->
	<section id="bc-4-col-feature" class="bc-2-col-cards-feature bc-feature-component has-shade-01-gradient is-full-vh" aria-label="Learning for Life"> 
		<header class="bc-feature-component__header "> 
			<p class="bc-content-label">
				<svg class="bc-svg-icon">
					<use xlink:href="./media/svg/icons/bc-svgs.svg#about-isd"></use> 
				</svg>
				Families in Ireland
			</p>
			<h1 class="bc-feature-component__heading">Need a heading</h1>
			<p class="bc-feature-component__intro">At ISD we offer a different option for education. ISD is <b class="is-light-blue-text">multi-denominational</b>, <b class="is-orange-text">co-educational</b> and <b class="is-mid-green-text">inclusive</b>. We have small class sizes to promote individualised education.</p>
		</header>
		<article class="bc-feature-component__content">
			<div class="bc-two-col-card bc-fade-in-up--is-not-visible">
				<picture class=" bc-card__media">
					<img src="media/multicultural-kids.jpg" alt="Happy kids">
				</picture><!-- // .bc-two-col-card__media -->
				<h2 class="bc-card__heading">Language development</h2>
				<div class="bc-two-col-card__text">
					<p>We provide Spanish as a foreign language and we promote mother-tongue development.</p>
					<div class="bc-card__cta">
						<a href="javascript:void(0)" class="bc-card__link">More about language development</a>	
					</div><!-- // .bc-card__cta -->	
				</div><!-- // .bc-two-col-card__text -->
			</div><!-- // .bc-two-col-card -->
			<div class="bc-two-col-card bc-fade-in-up--is-not-visible">
				<picture class="bc-two-col-card__media bc-card__media">
					<img src="media/multicultural-kids.jpg" alt="Happy kids">
				</picture><!-- // .bc-two-col-card__media -->
				<h2 class="bc-card__heading">The International Baccalaureate</h2>
				<div class="bc-two-col-card__text">
					<p><b>ISD offers the International Baccalaureate (IB), which is an inquiry based curriculum falling outside national and political agendas.</b></p> 
					<p>It is based on a continuum which is innovative and relevant and focuses on the total growth of the developing learner.</p>
					<div class="bc-card__cta">
						<a href="teaching-and-learning.html" class="bc-card__link">Find out more about Teaching and Learning at ISD</a>	
					</div><!-- // .bc-card__cta -->
				</div><!-- // .bc-two-col-card__text -->
			</div><!-- // .bc-two-col-card -->
			<div class="bc-two-col-card bc-fade-in-up--is-not-visible">
				<picture class="bc-two-col-card__media bc-card__media">
					<img src="media/multicultural-kids.jpg" alt="Happy kids">
				</picture><!-- // .bc-two-col-card__media -->
				<h2 class="bc-card__heading">International and Global focus</h2>
				<div class="bc-two-col-card__text">
					
					<p>As our world becomes more connected global-citizenship becomes more important.</p>
					<div class="bc-card__cta">
						<a href="javascript:void(0)" class="bc-card__link">More about global citizenship</a>	
					</div><!-- // .bc-card__cta -->	
				</div><!-- // .bc-two-col-card__text -->
			</div><!-- // .bc-two-col-card -->
		</article><!-- // .bc-two-col-card -->
	</section><!-- // .bc-2-col-feature -->
	<section id="bc-cta-feature" class="bc-cta-feature bc-feature-component bc-one-col-feature has-high-chroma"> 
		<div class="bc-elipses"> 
			<svg class="bc-elipses__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 280"> 
				<title>Elipses</title>
				<!-- fill:url(#linear-gradient) -->
				<circle class="bc-elipses__elipse" /> 
				<circle class="bc-elipses__elipse" /> 
				<circle class="bc-elipses__elipse" />
				<circle class="bc-elipses__elipse" /> 
				<circle class="bc-elipses__elipse" /> 
			</svg>
		</div> 
		<article class="bc-feature-component__content">
			<p class="bc-content-label">
				<svg class="bc-svg-icon bc-svg-icon--admissions">
					<use xlink:href="./media/svg/icons/bc-svgs.svg#admissions-icon"></use> 
				</svg>
				Content label
			</p> 
			<h1 class="bc-feature-component__heading">Major Call to Action
				<svg class="bc-svg-icon isd-cta-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.2 99">
					<title>Get started with ISD</title> 
					<circle class="isd-cta-arrow__circle" cx="290.7" cy="49.5" r="48"/>
					<line class="isd-cta-arrow__line" y1="49.39" x2="265.98" y2="49.39"/>
					<path class="isd-cta-arrow__carat" d="M302,49.91,279.7,27.6l2.87-2.82L307.7,49.91,282.57,75l-2.82-2.82Z" transform="translate(0 -1.5)"/>
				</svg>
			</h1>
			<p class="bc-feature-component__intro">Make your expression of interest and we will book a School tour.</p>
			<p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
		</article>
		<div class="bc-feature-component__cta"> 
			<a href="javascript:void(0)" class="bc-button">
				Enrol now
				<svg class="bc-svg-icon">
					<use xlink:href="./media/svg/icons/bc-svgs.svg#arrow"></use> 	
				</svg>
			</a>
		</div>
	</section><!-- // .bc-cta-component -->
	<nav class="feature-page-navigation feature-page-navigation--floating"> 
		<div class="feature-page-navigation__navs">
			<a href="javascript:void(0)" class="feature-page-navigation__to-top">
				Scroll to top
				<?php echo '<?xml version="1.0" encoding="utf-8"?>' ?>
				<svg version="1.1" class="bc-svg-icon bc-svg-icon--arrow-up"id="bc-arrow-up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 100 100" >
					<polygon points="47.4,11 25.7,32.8 22,29 50,1 78,29 74.3,32.8 52.6,11 52.6,99 47.4,99 "/>
				</svg>
			</a>
			<div class="feature-page-navigation__toggle-nav">
				<a href="javascript:void(0)" class="feature-page-navigation__toggle-nav__link bc-navigation-toggle">
					<?php echo '<?xml version="1.0" encoding="utf-8"?>' ?>
					<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
					<svg version="1.1" class="bc-menu-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
						 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
						<g id="bc-menu-icon__icon">
							<line class="bc-menu-icon__icon__line bc-menu-icon__icon__line--top" fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1" y1="25" x2="99" y2="25"/> 
							<line class="bc-menu-icon__icon__line bc-menu-icon__icon__line--middle" fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1" y1="50" x2="99" y2="50"/>
							<line class="bc-menu-icon__icon__line bc-menu-icon__icon__line--bottom" fill="none" stroke="#000000" stroke-width="6" stroke-miterlimit="10" x1="1" y1="77.5" x2="99" y2="77.5"/>
						</g>
					</svg>
				</a> 
				<div class="feature-page-navigation__wrapper">
					<h2 class="feature-page-navigation__heading">On This Page</h2>
					<ul class="feature-page-navigation__list"> 
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-hero-main">Hero main</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-hero-in-page">Hero in page</a></li>
						
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-one-col-feature">One column feature</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-one-col-feature-white">One column feature - white</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-one-col-feature-svg">One column feature - with background</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-hero-slider">Hero slider</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-two-col-media-feature">Two column media feature</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-two-col-media-feature-colour">Two column media feature - colour</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-4-col-feature">Four column feature</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-4-col-feature-colour">Four column feature - colour</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-plain-text-component-grey">Plain text component - grey</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-plain-text-component-blue">Plain text component - blue</a></li>
						<li class="feature-page-navigation__item "><a class="is-site-quicklink" href="#bc-cta-feature">Call to action feature</a></li>
					</ul>
				</div>
			</div><!-- // .feature-page-navigation__toggle-nav -->
		</div>
	</nav><!-- // .feature-page-navigation--floating -->
	<script src="scripts/app-concat.js"></script> 
</body>
</html> 