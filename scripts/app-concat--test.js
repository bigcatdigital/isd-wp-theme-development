(function () {
 	//Test menu icon
	const $menuIconWrap = document.querySelector('.menu-icon-wrap');
	const $menuIcon = document.querySelector('.menu-icon-wrap .bc-menu-icon');
	
	const $activelineFirst = $menuIcon.querySelector('.bc-menu-icon__lines__active-line--first');
	const $activelineSecond = $menuIcon.querySelector('.bc-menu-icon__lines__active-line--second');
	const $menulineTop = $menuIcon.querySelector('.bc-menu-icon__lines__line--top');
	const $menulineMiddle = $menuIcon.querySelector('.bc-menu-icon__lines__line--middle');
	const $menulineBottom = $menuIcon.querySelector('.bc-menu-icon__lines__line--bottom');
	
	const defaultTl = gsap.timeline().pause();
	const activeTl = gsap.timeline().pause();
	$menuIconWrap.addEventListener('click', (evt) => {
		console.log('click');
		
		evt.preventDefault();
		let $this = evt.currentTarget;
		console.log($this.classList);
		if ($this.classList.contains('is-active')) {
			console.log('active');
			activeTl.to($activelineFirst, activeLineFirstStartPos);
			activeTl.to($activelineSecond, activeLineSecondStartPos, '<');
			activeTl.to($menulineTop, menuLineTopStart, '>');
			activeTl.to($menulineMiddle, menuLineMiddleStart, '<');
			activeTl.to($menulineBottom, menuLineBottomStart, '<').eventCallback('onComplete', () => {
				$this.classList.remove('is-active');	
			});
			
		} else {
			console.log('default');
			defaultTl.seek(0);
			defaultTl.to($menulineTop, menuLineTopActive, 0);
			defaultTl.to($menulineMiddle, menuLineMiddleActive, 0);
			defaultTl.to($menulineBottom, menuLineBottomActive, 0);
			defaultTl.to($activelineFirst, activeLineFirstActivePos, '>');
			defaultTl.to($activelineSecond, activeLineSecondActivePos, '<').eventCallback('onComplete', () => {
				$this.classList.add('is-active');	
			});
		}	
	});
	
	
 }) ();
		