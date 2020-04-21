(function () {
 	//Test menu icon
	const $menuIconWrap = document.querySelector('.menu-icon-wrap');
	const $menuIcon = document.querySelector('.menu-icon-wrap .bc-menu-icon');
	
	const $activelineFirst = $menuIcon.querySelector('.bc-menu-icon__lines__active-line--first');
	const $activelineSecond = $menuIcon.querySelector('.bc-menu-icon__lines__active-line--second');
	const $menulineTop = $menuIcon.querySelector('.bc-menu-icon__lines__line--top');
	const $menulineMiddle = $menuIcon.querySelector('.bc-menu-icon__lines__line--middle');
	const $menulineBottom = $menuIcon.querySelector('.bc-menu-icon__lines__line--bottom');
	const duration = 0.3;
	const menuLineTopStart = {
		attr: {
			x1: 1, 
			y1: 25,
			x2: 99, 
			y2: 25
		},
		duration: duration
	};
	const menuLineTopActive = {
		attr: {
			x1: -99, 
			y1: 25,
			x2: -1, 
			y2: 25
		},
		duration: duration
	};
	const menuLineMiddleStart = {
		attr: {
			x1: 1, 
			y1: 50,
			x2: 99, 
			y2: 50
		},
		duration: duration
	};
	const menuLineMiddleActive = {
		attr: {
			x1: 101, 
			y1: 50,
			x2: 199, 
			y2: 50
		},
		duration: duration
	};
	const menuLineBottomStart = {
		attr: {
			x1: 1, 
			y1: 75,
			x2: 99, 
			y2: 75
		},
		duration: duration
	};
	const menuLineBottomActive = {
		attr: {
			x1: -99, 
			y1: 75,
			x2: -1, 
			y2: 75
		},
		duration: duration
	};
	
	const activeLineFirstStartPos = {
		attr: {
			x1: -70,
			y1: -70,
			x2: 0,
			y2: 0
		},
		duration: duration
	};
	
	const activeLineFirstActivePos = {
		attr: {
			x1: 15,
			y1: 15,
			x2: 85,
			y2: 85
		},
		duration: duration
	}
	const activeLineSecondStartPos = {
		attr: {
			x1: 100,
			y1: 0,
			x2: 170,
			y2: -70
		},
		duration: duration
	}
	const activeLineSecondActivePos = {
		attr: {
			x1: 15,
			y1: 85,
			x2: 85,
			y2: 15	
		},
		duration: duration
	}
	const defaultTl = gsap.timeline();
	const activeTl = gsap.timeline();
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
		