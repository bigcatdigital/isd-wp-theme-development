<?php 
	echo "<section class=\"bc-content-component bc-section-navigation  has-shade-02\">";
	echo "	<article class=\"bc-content-component__content\">";
	echo "			<div class=\"bc-content-component__content__text-content\">";
	echo "				<nav class=\"bc-section-navigation\">";
	echo "					<h1 class=\"bc-section-navigation__heading\">$inner_sect_nav_title</h1>";
	echo "					<ul class=\"bc-section-navigation__links\">"; 
	foreach ($sect_nav_links as $link_text => $link) {
		echo "					<li class=\"bc-section-navigation__item\"><a href=\"$link\" class=\"bc-section-navigation__link bc-icon-link--featured\">";
		echo "						$link_text";
		echo "						<svg class=\"bc-svg-icon\">"; 
		echo "							<use xlink:href=\"./media/svg/icons/bc-svgs.svg#arrow\"></use>"; 	
		echo "						</svg>";
		echo "					</a></li>";
	}
	echo "					</ul>";
	echo "				</nav>";
	echo "			</div>";
	echo "	</article>";
	echo "</section>"; 
?>