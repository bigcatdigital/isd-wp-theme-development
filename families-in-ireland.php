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
		<header class="bc-feature-component__header">
			<div class="bc-feature-component__content__text-content">
				<p class="bc-content-label ib-world-school"> 
					<svg class="bc-svg-icon">
						<use xlink:href="./media/svg/icons/bc-svgs.svg#learning-icon-reverse"></use> 	
					</svg>	
					Teaching and learning
				</p>
				<h1 class="bc-feature-component__heading">Learning for Life</h1>
					<p class="bc-feature-component__intro">The International School of Dublin (ISD) comprises both local and international families.  We believe that an international education is not solely for international families.</p>
					<p class="">At ISD we offer a different option for education. ISD is <b class="has-light-blue-text">multi-denominational</b>, <b class="has-orange-text">co-educational</b> and <b class="has-mid-green-text">inclusive</b>. We have small class sizes to promote individualised education.</p>
			</div>	
		</header><!-- // .bc-feature-component__heading -->
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
					<p>It is regarded as the gold-standard measurement of academic and intellectual development both by universities and graduate employers.</p>	
					<a href="teaching-and-learning.html" class="bc-icon-link">
						Read more about the International Baccalaureate
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
						<p class="bc-expandible-block__intro__intro">International-mindedness is at the heart of an IB and ISD education.  This includes the understanding of one’s local, regional, national as well as international context and begins with understanding of the uniqueness of oneself, one’s home and one’s nationality and culture.</p> 
						<p>The diverse nature of our community allows the students to naturally and continually revisit what it is to be globally connected.</p>
						
						<div class="bc-expandible-block__body">
							<div class="bc-expandible-block__body__text">
								<p>The diverse nature of our community allows the students to naturally and continually revisit what it is to be globally connected.</p>
								<h3>Global citizenship</h3>
								<p>Any Irish citizen will develop in an ever increasingly interconnected world where their home location will be influenced by global forces; and there are proven benefits for children attending international schools, whether they are local citizens or expatriates.</p>  
								<p>Allowing students to interact and have experience with global awareness and understanding in a first person context from the very start of their education sets them apart from others; this plants the seed for future worldwide networking.</p>  
								<h3>International Network</h3>
								<p>It provides valuable skills for later life such as building relationships with people from a variety of cultures and backgrounds, it also equips students with the confidence to travel and work in other countries opening opportunities and experiences throughout adulthood.</p>
								<p>Students thus engage with both local and global issues as they have gained valuable personal connections, knowledge and understanding.  They benefit from understanding the value of the interconnected nature of the world and work to make a difference in the lives of everyone.</p>
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
			<article class="bc-gr-feature bc-gr-columns bc-expandible-block">
				<picture class="bc-gr-feature__media bc-column">
					<img src="media/multicultural-kids.jpg" alt="Happy kids">
				</picture>
				<div class="bc-gr-feature__text bc-column"> 
					<h2 class="bc-gr-feature__heading">Transition to Secondary School</h2>
						<p class="bc-expandible-block__intro__intro">The transition from primary to post-primary/secondary education represents a significant milestone.  It is a period filled with change not only for the student but for the entire family.</p> 
						<p>One of the key functions of primary education is to prepare children to engage effectively with further learning, throughout life. </p>
						<div class="bc-expandible-block__body">
							<div class="bc-expandible-block__body__text">
								<p><b>TBC</b></p>
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
	<section class="bc-feature-component bc-expandible-blocks-component has-waves has-shade-01">
		<div class="bc-feature-component__wrap">
		<header class="bc-feature-component__header">
			<div class="bc-feature-component__content__text-content">
				<p class="bc-content-label ib-world-school"> 
					<svg class="bc-svg-icon">
						<use xlink:href="./media/svg/icons/bc-svgs.svg#pupil-experience"></use> 	
					</svg>	
					Student Experience
				</p>
				<h1 class="bc-feature-component__heading">Testimonials</h1>
				<p class="bc-feature-component__intro">Hear other parents and students describe their experience at ISD</p>
					
			</div>	
		</header><!-- // .bc-feature-component__heading -->
		<div class="bc-feature-component__content">
			<div class="bc-feature-component__content__text-content">
				<article class="bc-1-columns bc-expandible-block">
					<div class="bc-column"> 
						<div class="bc-featured-quote is-testimonial ">
							<h2 class="bc-featured-quote__heading">Reponsible, caring individuals in the real world</h2> 
							<div class="bc-featured-quote__icon">
								<svg class="bc-svg-icon">
									<use xlink:href="./media/svg/icons/bc-svgs.svg#quotes"></use> 
								</svg>	
							</div>
							<div class="bc-featured-quote__body">
								<p class="bc-expandible-block__intro">I have never been a fan of private education, being a firm believer is exposing my kids to the real world and developing them as responsible, caring individuals.</p>
								<p>When we traveled as a family, to Denmark and to India, however, we found that the IB system of education offered in the fee-paying international schools available to us were at an incredible standard and suited the needs of our children perfectly.</p>
							</div>	
						</div><!-- // .bc-featured-quote -->
						<div class="bc-expandible-block__body">
							<div class="bc-expandible-block__body__text">
								<div class="bc-featured-quote is-testimonial">
									<div class="bc-featured-quote__body">
										<p>The IB system is a holistic education system that encompasses all facets of learning and works to develop each individual child based upon their IEP and learning style.</p>
										<p>It is not unusual to visit an IB classroom in which there are several children standing, others sitting on the floor and there may even be children wearing headphones to concentrate more closely on the lesson at hand.  All children will be learning about the same subject matter, but they have the freedom to learn in the way best suited to them.</p>
										<p>If a child has a specific talent and interest in an area, they will have the opportunity to explore it in an IB School. School concerts are often full of wonderful performances by classical pianists and talented vocalists. On returning to Ireland, therefore, it was imperative that we continued in the same vein, working with a school that understood our children’s needs and how best to address them.</p>			
										<p>We were delighted when we found ISD.  Cristen and the team were so welcoming and my children settled in immediately.</p>
										<p>We were part of a big family in the school, where each of the children knew each other and had the opportunity to interact with other classes during the day.</p>
										<p>We saw great development in both the children, academically, emotionally and artistically.  My daughter made a very competent presentation at her Grade 6 graduation, in which she used her passion for photography to communicate a message about a charity she worked with.</p>
										<p>I saw my children learn skills that I was encouraged to develop only when I completed my Leaving Cert and went to University!  I would highly recommend ISD as a safe, caring environment in which you will see your children thrive and develop in all areas.</p>
									</div>	
									<p class="bc-featured-quote__attribution">Fiona O&apos;Brien - Irish - Mother of two students at ISD</p>
								</div><!-- // .bc-featured-quote -->
								
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
			</div>
		</div>
		</div>
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
	</section><!-- // Testimonials -->
	
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