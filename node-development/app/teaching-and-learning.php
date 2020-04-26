<?php
	include 'php-includes/global-functions.php';
	get_header('Welcome [Landing page#2]');
?>
<body> 
	<?php get_inner_site_header(); ?>
	<section class="bc-content-component">   
		<header class="bc-content-component__header">
			<div class="bc-content-component__content__text-content">
				<h1>Overview</h1>
			</div>
		</header><!-- // .bc-content-component__header -->
		<article class="bc-content-component__content">
			<div class="bc-content-component__content__text-content"> 
				<p class="bc-content-component__intro">One of the fundamental goals of an education at ISD is to encourage a love of learning. Welcoming and lively learning environments are characterised by collaborative and purposeful activity.</p> 
				<p>Small class sizes are guided by international experienced teachers who work to facilitate holistic and innovative forms of engagement which promote learning that is process, rather than topic driven.</p>  
				<p>Ultimately, ISD students are equipped with the knowledge and skills needed to become autonomous lifelong learners.</p>
				<p>All teaching and learning is guided by the International Baccalaureate Primary Years Programme (IB PYP). An IB education is based on a continuum which focuses on the total and unique growth of the developing learner encompassing social, physical, emotional and cultural needs in addition to academic development.  Therefore education at ISD is inquiry driven and student centred.  It is focused on promoting global contexts and life skills.</p>
				<div class="bc-expandible-block"> 
					<div class="bc-expandible-block__intro"> 
						<h2 class="bc-expandible-block__intro__heading is-red-text">1. Inquiry</h2>
						<div class="bc-expandible-block__intro__text">
							<p class="bc-expandible-block__intro__intro">The search for meaning is fundamental to what it is to be human. Curiosity, asking questions and making sense of the world activates thinking on many levels.</p> 
							<p> Inquiry is all about meaning making and demands many skills of a learner, specifically higher-order thinking which includes wondering, planning, analysing, creating and reflecting.</p>
						</div>
						<div class="bc-expandible-block__intro__media">
							<picture>
								<img src="media/multicultural-kids.jpg" alt="Happy kids">
							</picture>			
						</div>
					</div><!-- // .bc-expandible-block__intro -->

					<div class="bc-expandible-block__body">
						<div class="bc-expandible-block__body__text">
							<p>At the International School of Dublin (ISD) we strive for our students to be active inquirers, learners who are engaged in educational material and experiences. </p>
							<p>Throughout the curriculum, students are guided by the inquiry cycle.  The nature of a cycle is flexible and never ending, a process of which one may move forward, backward and in all directions.  The cycle provides opportunities for students to navigate their learning in a personally significant manner.</p>
							<figure class="bc-expandible-block__image">
								<img src="media/isd-inqury-cycle.jpg" alt="Happy kids" class="" /> 
								<figcaption>The ISD inquiry cycle</figcaption>	
							</figure>
							<p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
						</div>
					</div><!-- // .bc-expandible-block__body -->
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
				</div><!-- // .bc-expandible-bock -->
				</div><!-- // .bc-content-component__content__text-content -->
			</article><!-- // .bc-content-component__content -->
	</section><!-- // .bc-inner-page-content -->
	<?php  
		get_inner_section_nav();
		get_global_CTA();
		get_footer();
	?>
	<script src="scripts/app-concat.min.js"></script>  
</body>
</html> 