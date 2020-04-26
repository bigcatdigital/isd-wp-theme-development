<?php
	function get_header($t) {
		global $title;
		$title = $t;
		include 'php-includes/html-head.php';
	}
	function get_site_header($t = 'Welcome to ISD') {
		global $title;
		$title = $t;
		include 'php-includes/site-header.php';	
	}
	function get_inner_site_header($innert = 'Inner Page', $innersubt = '', $nav_title = 'Inner section navigation', $nav_links = array('Section link#1' => 'javascript:void(0)', 'Section link#2' => 'javascript:void(0)', 'Section link#3' => 'javascript:void(0)', 'Section link#4' => 'javascript:void(0)'), $bcs = array('Homepage' => 'homepage.php', 'Level #1' => 'javascript:void(0)', 'Level #2' => 'javascript:void(0)')) {
		global $innertitle;
		$innertitle = $innert;
		global $innersubtitle;
		$innersubtitle = $innersubt;
		global $breadcrumbs;
		$breadcrumbs = $bcs;
		
		global $inner_nav_title;
		global $inner_nav_links;
		$inner_nav_title = $nav_title;
		$inner_nav_links = $nav_links;
		
		include 'php-includes/inner-site-header.php';	
	}
	function get_inner_section_nav($sect_nav_title = 'Inner section navigation', $sect_nav_links = array('Section link#1' => 'javascript:void(0)', 'Section link#2' => 'javascript:void(0)', 'Section link#3' => 'javascript:void(0)', 'Section link#4' => 'javascript:void(0)')) {
		global $inner_sect_nav_title;
		global $inner_sect_nav_links;
		$inner_sect_nav_title = $sect_nav_title;
		$inner_sect_nav_links = $sect_nav_links;
		include 'php-includes/inner-section-nav.php';	
	}
	function get_floating_section_nav($nav_title = 'Inner section navigation', $nav_links = array('Content link#1' => '#', 'Content link#2' => '#', 'Content link#3' => '#', 'Content link#4' => '#')) {
		global $floating_nav_title;
		global $floating_nav_links;
		$floating_nav_title = $sect_nav_title;
		$floating_nav_links = $sect_nav_links;
		include 'php-includes/floating-section-nav.php';	
	}
	function get_global_CTA() {
		include 'php-includes/global-cta.php';
	}
	function get_footer() {
		include 'php-includes/footer.php';
	}
?>