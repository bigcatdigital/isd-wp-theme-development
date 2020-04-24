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
	function get_inner_site_header($innert = 'Inner Page', $innersubt = '') {
		global $innertitle;
		$innertitle = $innert;
		global $innersubtitle;
		$innersubtitle = $innersubt;
		include 'php-includes/inner-site-header.php';	
	}
	function get_footer() {
		include 'php-includes/footer.php';
	}
?>