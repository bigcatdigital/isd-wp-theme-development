<?php
 echo	"<nav class=\"feature-page-navigation feature-page-navigation--floating\">"; 
 echo	"	<div class=\"feature-page-navigation__navs\">";
 echo	"		<a href=\"javascript:void(0)\" class=\"feature-page-navigation__to-top\">";
 echo	"			Scroll to top";
 echo	"			<?xml version=\"1.0\" encoding=\"utf-8\"?>";
 echo	"			<svg version=\"1.1\" class=\"bc-svg-icon bc-svg-icon--arrow-up\"id=\"bc-arrow-up\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"";
 echo	"				 viewBox=\"0 0 100 100\" >";
 echo	"				<polygon points=\"47.4,11 25.7,32.8 22,29 50,1 78,29 74.3,32.8 52.6,11 52.6,99 47.4,99 \"/>";
 echo	"			</svg>";
 echo	"		</a>";
 echo	"		<div class=\"feature-page-navigation__toggle-nav\">";
 echo	"			<a href=\"javascript:void(0)\" class=\"feature-page-navigation__toggle-nav__link bc-navigation-toggle\">";
 echo	"				<?php echo '<?xml version=\"1.0\" encoding=\"utf-8\"?>' ?>";
 echo	"				<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->";
 echo	"				<svg version=\"1.1\" class=\"bc-menu-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
 echo	"					 viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">";
 echo	"					<g id=\"bc-menu-icon__icon\">";
 echo	"						<line class=\"bc-menu-icon__icon__line bc-menu-icon__icon__line--top\" fill=\"none\" stroke=\"#000000\" stroke-width=\"6\" stroke-miterlimit=\"10\" x1=\"1\" y1=\"25\" x2=\"99\" y2=\"25\"/> ";
 echo	"						<line class=\"bc-menu-icon__icon__line bc-menu-icon__icon__line--middle\" fill=\"none\" stroke=\"#000000\" stroke-width=\"6\" stroke-miterlimit=\"10\" x1=\"1\" y1=\"50\" x2=\"99\" y2=\"50\"/>";
 echo	"						<line class=\"bc-menu-icon__icon__line bc-menu-icon__icon__line--bottom\" fill=\"none\" stroke=\"#000000\" stroke-width=\"6\" stroke-miterlimit=\"10\" x1=\"1\" y1=\"77.5\" x2=\"99\" y2=\"77.5\"/>";
 echo	"					</g>";
 echo	"				</svg>";
 echo	"			</a> ";
 echo	"			<div class=\"feature-page-navigation__wrapper\">";
 echo	"				<h2 class=\"feature-page-navigation__heading\">$floating_nav_title</h2>";
 echo	"				<ul class=\"feature-page-navigation__list\">";
foreach ($floating_nav_links as $link_text => $link) {
 echo	"					<li class=\"feature-page-navigation__item\"><a href=\"$link\">$link_text</a></li>";
}
 echo	"				</ul>";
 echo	"			</div>";
 echo	"		</div><!-- // .feature-page-navigation__toggle-nav -->";
 echo	"	</div>";
 echo	"</nav><!-- // .feature-page-navigation--floating -->";
?>