<?php
	include 'php-includes/global-functions.php';
	get_header('Welcome [Admissions]');
?>
<body> 
	<?php get_inner_site_header('Admissions', 'Apply to ISD', 'More about admissions', array('FAQs' => 'javascript:void(0)', 'Admission fees' => 'javascript:void(0)'), array('Homepage' => 'homepage.php', 'Admissions' => 'javascript:void(0)')); ?>
	<section class="bc-content-component">
		<article class="bc-content-component__content">
			<div class="bc-content-component__content__text-content">
			<h1 class="bc-content-component__heading">ISD Admissions Overview</h1>
				<p class="bc-intro-paragraph">Admission to ISD is open year-round to students of all nationalities, faiths and backgrounds. We are committed to meeting each student’s individual needs to the best of our ability. Acceptance and placement is based on the potential of the applicant to benefit from the programme and educational services available.</p>
				<h2>The ISD Admissons Process</h2>
				<div class="bc-stepped-process">
					<h3 class="bc-stepped-process__heading is-orange-text"><span class="bc-stepped-process__number">1.</span> Express an interest</h3>
					<p class=""><b>Prospective families first express interest in ISD by completing one pre-enrolment form per child for the year of application.</b></p> 
					<h3 class="bc-stepped-process__heading is-red-text"><span class="bc-stepped-process__number">2.</span> Submit a pre-enrolment form</h3>
					<p class=""><b>Upon receipt of a pre-enrolment form, a member of the admissions team will contact the family and request the child’s school complete an application reference form.</b></p> 
					<p>This helps the school to gain a more detailed picture of your child’s academic and social progress.</p>	
					<h3 class="bc-stepped-process__heading is-primary-text"><span class="bc-stepped-process__number">3.</span> The School Tour</h3>
					<p><b>An informal student interview is conducted as part of the tour (the tour and interview might be conducted via Skype if necessary).</b></p>	
					<p><b>Please note: A pilot school morning is required for any child enrolling in Pre-Kindergarten. A trial morning is also required for any child enrolling in formal schooling for the first time.</b></p>
					<p>This is an exciting and useful experience to gain a sense of the child’s interest and comfort in our school setting.  During the trial, we use an informal assessment checklist, based on age appropriate developmental milestones, to provide information to the parents and gauge the child’s readiness to join the school.</p>
					<h3 class="bc-stepped-process__heading is-mid-green-text"><span class="bc-stepped-process__number">4.</span> Offer of a place</h3>
					<p class=""><b>The family are contacted by the admissions team to inform them if they will be offered a place in the school.  The applicant may or may not be offered a place at ISD.</b></p>
					<p>An applicant will be offered a place at ISD if:</p>
					<ul>
						<li>There are spaces available in the corresponding class</li>
						<li>If the child can successfully access the curriculum</li>
					</ul>
					<h3 class="bc-stepped-process__heading is-indigo-text"><span class="bc-stepped-process__number">5.</span> Acceptance</h3>
					<p><b>Upon acceptance families are issued an acceptance letter and are required to:</b></p>
					<ul>
						<li>Pay the registration deposit</li>
						<li>Provide copies of the child’s birth certificate, passport and immunisation records (translated to English where necessary)</li>
						<li>Provide a copy of the child’s most recent school report (translated to English where necessary)</li>
					</ul>
				</div>
				<h2>Further information</h2>
				<p>Please also see our extensive <a href="admissions-faqs.php">frequently asked questions section</a> if your question is not answered here.</p>
				<p>Alternatively you can use the admissions contact information below:</p>
				<p>
					<b>Team Lead</b>: Louise Kearn <br />
					<b>Email</b>: <a href="mailto:admin@internationalschooldublin.ie">admin@internationalschooldublin.ie</a> <br />
					<b>Phone</b>: <a href="tel:087-329-1417">087-329-1417</a><br /> 
					From an international number: (your international dialling code) +353873291417.
				</p>
				
			</div>
		</article><!-- // .bc-inner-page-content__content -->
	</section><!-- // .bc-inner-page-content -->
	<section class="bc-content-component  has-high-chroma">	
		<header class="bc-content-component__content">
			<h1 class="">Transition Support</h1>	
		</header>
		<article class="bc-content-component__content ">
			<div class="bc-2-columns">
				<div class="bc-column">
					<p class="bc-intro-paragraph">At ISD we pride ourselves on our strong sense of community. From your initial expression of interest in ISD, we provide you with support. We adapt our communication to suit your needs and where possible, try to provide support through mother tongues.</p>
					<p>As a new family, you will receive a comprehensive Dublin Information Pack with resources on a wide range of information. A Welcome Back to School event begins the academic year and settling in parent-teacher conferences take place within one month of the school’s commencement.</p>	
						<p>Communication is key at ISD. The School App keeps you updated of student work in real time. We maintain an open door policy and welcome the opportunity to meet with you at any stage should you require assistance.</p>		
				</div>
				<div class="bc-column">
					<figure><img alt="A happy family" src="media/irish-family.jpg"></figure>
				</div>
			</div>
		</article>
	</section>
	<?php  
		get_inner_section_nav('More about admissions', array('FAQs' => 'javascript:void(0)', 'Admission fees' => 'javascript:void(0)'));
	?>
	
	<?php
		get_global_CTA();
	?>
	<script src="scripts/app-concat.min.js"></script>  
</body>
</html> 