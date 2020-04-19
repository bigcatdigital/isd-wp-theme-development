<?php
	function get_header($t) {
		global $title;
		$title = $t;
		include 'php-includes/html-head.php';
	}
	function get_site_header() {
		include 'php-includes/site-header.php';
	}
	function get_footer() {
		include 'php-includes/footer.php';
	}
?>