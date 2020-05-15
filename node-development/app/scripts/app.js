(function bcScriptsWrap() {
	/* The scripts object */
	const $bc = (function bigCatScripts() {
		/* Utility functions */
		/* 
			Tests is a selector is a String or DOM Node, retunrs the selected Node if it can
			Returns false otherwise
			*/
		function _getDOMNode(selector) {
			let $el = null;
			if (typeof selector === 'string') {
				if (document.querySelector(selector) === null) {
					return false;
				}
				$el = document.querySelector(selector);
				return $el ;
			} else if (selector instanceof Node) {
				$el = selector;
				return $el;
			} else {
				return false;
			}
		}//_getOMNode() 
		/* 
			Tests will a string selector will return a DOM Node, retunrs an array of Nodes if it can
			Returns false otherwise
			*/
		function _getAllDOMNodes(selector) {
			let $els = null;
			if (typeof selector === 'string') {
				if (document.querySelectorAll(selector) === null) {
					return false;
				}
				$els = document.querySelectorAll(selector);
				return $els ;
			} else {
				return false;
			}
		}//_getAllDOMNodes()
		/* API functions */
		/** 
			Get the offsets for an element relative to the viewport
			*/
		function getOffset($el = document) {
			const elRect = $el.getBoundingClientRect();
			const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: elRect.top + scrollTop, left: elRect.left + scrollLeft };
		}
		/**
			Add and remove classes
			el:  					DOM element: class toggle target 
			className: 		String: active class to toggle
			callback: 		Callback function, get the el and the className on success
			*/
		function toggleClass(el, classname, callback) {
			if ((el !== undefined && el instanceof Node) && (classname !== undefined && typeof classname === 'string')) {
				el.classList.toggle(classname);
				if (typeof callback == 'function') {
					callback(el, classname);
				}
			} else {
				throw new Error('Function classToggle requires: a HTML Node and a class name of type String');
			}
		}//toggleClass()
		/**
			Select siblings - select the direct next siblings of an element filtered by a classname
			Returns an array of HTMLElements if there is no callback
			el:  					DOM element: find this element's siblings filtered by an optional class 
			className: 		String: Class to filter the list of siblings
			callback: 		Gets the array of matching siblings
			*/
		function selectSiblings(el, classname, callback) {
			if ((el !== undefined && el instanceof Node) && (classname !== undefined && typeof classname === 'string')) {
				let allSiblings = Array.from(el.parentNode.childNodes);
				let matchingSiblings = allSiblings.filter((sibling) => {
					if (classname){
						return (sibling.tagName !== undefined && sibling.classList.contains(classname)) ? sibling : false;		
					} else {
						return (sibling.tagName !== undefined) ? sibling : false;	
					}
				});
				if (callback !== undefined && typeof callback == 'function') {
					callback(matchingSiblings);
				} else {
					return matchingSiblings; 
				}
			} else {
				throw new Error('Function selectSiblings requires: a HTML Node and a class name of type String');
			}
		}//selectSiblings()
		/* Check if an element is within the viewport on scroll */
		function isScrollVisible($el, threshold = '50%'){
			console.log(threshold);
		}//isScrollVisible
		/* 
			Remove width and height from iframes
			@arg iframeParents, String selector for the iframe parent or an array of String selector parents
		*/
		function makeResponsiveiFrames(iframeParents) {
			iframeParents = Array.from(document.querySelectorAll(iframeParents));
			if (iframeParents.length > 0) {
				for (let parent in iframeParents) {
					let iframes = Array.from(iframeParents[parent].getElementsByTagName(`iframe`));
					for (let iframe in iframes) {
						iframes[iframe].removeAttribute('width');	
						iframes[iframe].removeAttribute('height'); 	
					}
					iframeParents[parent].classList.remove('is-not-loaded');
				}	
					
			}
			return;
		}//makeResponsiveiFrames
	
		/* Slides an element up or down by transitioning the height */
		/* 
				On click some element, call this
				Show/hide the target element based on the presence or not of the active class
				Add or remove the active class
		*/
		function showHide(el, activeClass) {
			//let startTime = Date.now();
			function _lerpShowHide($el, currentHeight, targetHeight) {
				if (Math.round(targetHeight) > Math.round(currentHeight)) {
					//Show
					currentHeight += (targetHeight - currentHeight) * 0.25;
					requestAnimationFrame(() => {
						$el.style.height = currentHeight + 'px';
						_lerpShowHide($el, currentHeight, targetHeight);
					});
				} else if (Math.round(currentHeight) > Math.round(targetHeight)) {
					//Hide
					if (currentHeight < 2) {
						requestAnimationFrame(() => {
							$el.style.height = 0 + 'px';
						});	
						
						return ;
					}
					currentHeight -= (currentHeight - targetHeight) * 0.25;
					$el.style.height = currentHeight + 'px';
					requestAnimationFrame(() => {
						$el.style.height = currentHeight + 'px';
						_lerpShowHide($el, currentHeight, targetHeight);
					});
				} else {
					
					return ;
				}
			}//_lerpShowHide()
			let $el = null;
			try {
				$el = _getDOMNode(el);	
				
			} catch (err) {
				return console.log(err);
			}
			if ($el.classList.contains(activeClass)) {
				const elHeight = $el.scrollHeight;
				const elTransitions = $el.style.transition;
				$el.style.transition = '';
				requestAnimationFrame(() => {
					$el.style.height = elHeight + 'px';
					$el.style.transition = elTransitions;
					_lerpShowHide($el, elHeight, 0); 
					$el.classList.remove(activeClass);
				});
			} else {
				//show
				const elHeight = $el.scrollHeight;
				requestAnimationFrame(() => {
					_lerpShowHide($el, $el.clientHeight, elHeight) ;
					$el.style.height = null;
					$el.classList.add(activeClass);
					$el.addEventListener('transitionend', () => {
						$el.removeEventListener('transitionend', arguments.callee);
					});
				});
			}
		}//showHide()
		/* 
			Wrapper functions for gsap https://greensock.com/
		*/
		const $gsap = gsap;
		function gsapScrollTo(targetScrollOptions, $el, cb) {
			$el = $el || window;
			$gsap.registerPlugin(ScrollToPlugin); 
			const scrollOptions =  Object.assign({
				scrollTo: {x: 0, y: 0}, 
				duration: 1, 
				ease: 'power1.in'
			}, targetScrollOptions);
			const scrollToTween = $gsap.to($el, scrollOptions).pause();
			if (typeof cb === 'function') {
				scrollToTween.eventCallback('onComplete', cb);
				scrollToTween.play();
			} else {
				scrollToTween.play();	
			}
			
		}
		function gsapFadeIn($el, targetFadeInOpts, cb) {
			if ($el) {
				const fadeInOptions = Object.assign({
					duration: 0.82,
					opacity: 1,
					y: 0
				}, targetFadeInOpts);
				$gsap.to($el, fadeInOptions);
			} else {
				return new Error(`gsapFadeIn requries a target DOMNode`);
			}
			if (typeof cb === 'function') {
				cb($el);
			}
		}
		function gsapShowHide($el, GSAPOptions, cb) {
			if ($el) {
				const opts = Object.assign({
					duration: 0.482,
					ease: 'power1.out'	
				}, GSAPOptions);
				opts.height = ($el.scrollHeight < opts.height) ? opts.height : '0px';
				$gsap.to($el, opts).eventCallback('onComplete', cb, [$el]);
				
			} else {
				return new Error(`gsapFadeIn requries a target DOMNode`);
			}
		}
		function gsapShow($el, height, GSAPOptions, cb) {
			if ($el) {
				const opts = Object.assign({
					duration: 0.482,
					ease: 'power1.out'	
				}, GSAPOptions);
				
				opts.height = height;
				$gsap.to($el, opts).eventCallback('onComplete', cb, [$el]);
				
			} else {
				return new Error(`gsapShow requries a target DOMNode`);
			}
		}
		function gsapHide($el, GSAPOptions, cb) {
			if ($el) {
				const opts = Object.assign({
					duration: 0.482,
					ease: 'power1.out'	
				}, GSAPOptions);
				opts.height = 0;
				$gsap.to($el, opts).eventCallback('onComplete', cb, [$el]);
			} else {
				return new Error(`gsapHide requries a target DOMNode`);
			}
		}
		/* 
			Interface 
		*/
		return {
			toggleClass: toggleClass,
			selectSiblings: selectSiblings,
			responsiveiFrames: makeResponsiveiFrames,
			getElOffset: getOffset,
			showHide: showHide,
			isScrollVisible: isScrollVisible,
			gsap: $gsap,
			gsapFns: {
				scrollTo: gsapScrollTo,
				fadeIn: gsapFadeIn,
				showHide: gsapShowHide,
				show: gsapShow,
				hide: gsapHide
			},
			utils: {
				getDomNode: _getDOMNode,
				getDomNodes: _getAllDOMNodes,
			}
		};
	})();	//bigCatScripts()()
	
	/*** Project scripts ***/
	window.onload = () => {
		
		/* Making iFrames responsive */
		$bc.responsiveiFrames('.bc-responsive-embed'); 
		
		/* All feature content components - used through */
		const $pageFeatures = (document.querySelectorAll('.bc-hero, .bc-feature-component').length > 0) ? document.querySelectorAll('.bc-hero, .bc-feature-component') : null;
		/*
			** Navigation components **
		*/
		/** Make nav icons **/
		function navTogglersFactory($navigationToggler, opts, cb) {
			//The SVG icon
			const $menuIcon = $navigationToggler.querySelector('.bc-menu-icon');
			//Default state horizontal lines
			const $defaultIconTop = $menuIcon.querySelector('.bc-menu-icon__lines__line--top');
			const $defaultIconMiddle = $menuIcon.querySelector('.bc-menu-icon__lines__line--middle');
			const $defaultIconBottom = $menuIcon.querySelector('.bc-menu-icon__lines__line--bottom');
			
			//Active state diagonal lines
			const $activeIconFirst = $menuIcon.querySelector('.bc-menu-icon__lines__active-line--first');
			const $activeIconSecond = $menuIcon.querySelector('.bc-menu-icon__lines__active-line--second');
			
			//Animation options
			const options = {
				duration: 0.28,
				easing: 'power1.out',
				defaultStroke: '#fff',
				activeStroke: '#303030'
			};
			Object.assign(options, opts);
			
			//Default & active coordinates
			
			const defaultIconTopStart = { 
				attr: {
					x1: 1, 
					y1: 25,
					x2: 99, 
					y2: 25
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconTopActive = {
				attr: {
					x1: -99, 
					y1: 25,
					x2: -1, 
					y2: 25
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconMiddleStart = {
				attr: {
					x1: 1, 
					y1: 50,
					x2: 99, 
					y2: 50
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconMiddleActive = {
				attr: {
					x1: 101, 
					y1: 50,
					x2: 199, 
					y2: 50
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconBottomStart = {
				attr: {
					x1: 1, 
					y1: 75,
					x2: 99, 
					y2: 75
				},
				duration: options.duration,
				ease: options.easing
			};
			const defaultIconBottomActive = {
				attr: {
					x1: -99, 
					y1: 75,
					x2: -1, 
					y2: 75
				},
				duration: options.duration,
				ease: options.easing
			};

			const activeIconFirstStart = {
				attr: {
					x1: -70,
					y1: -70,
					x2: 0,
					y2: 0
				},
				stroke: options.defaultStroke,
				duration: options.duration,
				ease: options.easing 
			};

			const activeIconFirstActive = {
				attr: {
					x1: 15,
					y1: 15,
					x2: 85,
					y2: 85
				},
				stroke: options.activeStroke,
				duration: options.duration,
				ease: options.easing 
				
			};
			const activeIconSecondStart = {
				attr: {
					x1: 100,
					y1: 0,
					x2: 170,
					y2: -70
				},
				stroke: options.defaultStroke,
				duration: options.duration,
				ease: options.easing
			};
			const activeIconSecondActive = {
				attr: {
					x1: 15,
					y1: 85,
					x2: 85,
					y2: 15
				},
				stroke: options.activeStroke,
				duration: options.duration,
				ease: options.easing
			};
			
			//Default and active timelines
			const defaultTl = $bc.gsap.timeline();
			const activeTl = $bc.gsap.timeline();
			
			$navigationToggler.addEventListener('click', function navIconClickHandler (evt) {
				const $this = evt.currentTarget;
				evt.preventDefault();
				if ($this.classList.contains('is-animating')) {
					return;
				}
				$this.classList.add('is-animating');
				if ($this.classList.contains('is-active')) {
					activeTl.seek(0);
					activeTl.to($activeIconFirst, activeIconFirstStart);
					activeTl.to($activeIconSecond, activeIconSecondStart, '<');
					activeTl.to($defaultIconTop, defaultIconTopStart, '>');
					activeTl.to($defaultIconMiddle, defaultIconMiddleStart, '<');
					activeTl.to($defaultIconBottom, defaultIconBottomStart, '<').eventCallback('onComplete', () => {
						$this.classList.remove('is-active');	
						$this.classList.remove('is-animating');
					});
				} else {
					defaultTl.seek(0);
					defaultTl.to($defaultIconTop, defaultIconTopActive, 0);
					defaultTl.to($defaultIconMiddle, defaultIconMiddleActive, 0);
					defaultTl.to($defaultIconBottom, defaultIconBottomActive, 0);
					defaultTl.to($activeIconFirst, activeIconFirstActive, '>');
					defaultTl.to($activeIconSecond, activeIconSecondActive, '<').eventCallback('onComplete', () => {
						$this.classList.add('is-active');	
						$this.classList.remove('is-animating');
					});
				}	
				if (typeof cb === 'function') {
					cb($this);
				}
			});
			return $navigationToggler;
		}//navTogglersFactory
		
		/** Main navigation **/
		const $mainNavIcon = document.querySelector('.bc-main-navigation-toggle .menu-icon-wrap');
		navTogglersFactory($mainNavIcon, {activeStroke: '#017CC0', duration: 0.16}, ($mainNavIcon) => {
			const $siteHeader = $mainNavIcon.closest('.bc-site-header');
			requestAnimationFrame(() => {
				$siteHeader.classList.toggle('has-active-navigation');	
			//	$this.dispatchEvent(iconClick);
			});
		});
		
		/** Landing page navigation **/ 
		let $landingPageToggle = (document.querySelector('.site-quicklinks__toggle')) ? document.querySelector('.site-quicklinks__toggle') : null;
		const $landingPageNavList = (document.querySelector('.site-quicklinks__list')) ? document.querySelector('.site-quicklinks__list') : null;
		let $landingPageNav = null;
		if ($landingPageToggle) {
			$landingPageNav = $landingPageNavList.closest('.site-quicklinks');
			
			navTogglersFactory($landingPageToggle, {activeStroke: '#fff', duration: 0.16}, () => {
				
				const duration = 0.4;
				const ease = 'ease.out';
				const $thisWrapper =  $landingPageNav.querySelector('.site-quicklinks__wrapper');
				const $thisContainer = $landingPageNav.closest('.site-quicklinks');
				if ($thisWrapper.classList.contains('is-active')) { 	
					$thisContainer.classList.toggle('is-active'); 
					$bc.gsap.to($thisWrapper, {height: 0, duration: duration, ease: ease}).eventCallback('onComplete', () => {
						$thisWrapper.classList.toggle('is-active'); 
					});
				} else {
					$thisContainer.classList.toggle('is-active'); 
					$bc.gsap.to($thisWrapper, {height: $thisWrapper.scrollHeight, duration: duration, ease: ease}).eventCallback('onComplete', () => {
						$thisWrapper.classList.toggle('is-active');
					});
				}
			});
			//set up links
			const $landingPageNavLinks = (document.querySelectorAll('.site-quicklinks__item > a').length > 0) ? document.querySelectorAll('.feature-page-navigation__item a') : null;
			if ($landingPageNavLinks) {
				for (let $landingPageNavLink of $landingPageNavLinks) {
					$landingPageNavLink.addEventListener('click', (evt) => {
						/* If it is not a site quicklink */
						if ($landingPageNavLink.classList.contains('.is-site-quicklink') === false) {
							evt.preventDefault();
							let linkTarget = document.querySelector($landingPageNavLink.getAttribute('href'));
							$bc.gsapFns.scrollTo({scrollTo: {y: linkTarget.offsetTop}, duration: 0.360});
						}
					});
				}
			}
		}//if landing page nav
		/** Floating widget **/ 
		const $floatingWidget = (document.querySelector('.bc-floating-widget')) ? document.querySelector('.bc-floating-widget') : null;
		
		if ($floatingWidget) {	
			const dur = 0.4; 
			const easing = 'back(0.5)';
			const scrollThreshold = $floatingWidget.scrollHeight;
			if (window.scrollY >= scrollThreshold && $floatingWidget.classList.contains('is-visible') === false) {
				if ($floatingWidget.classList.contains('is-visible')) {	
					$bc.gsap.to($floatingWidget, {bottom: '-100%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
						$floatingWidget.classList.remove('is-visible');
					});
				} else {
					$bc.gsap.to($floatingWidget, {bottom: '3%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
						$floatingWidget.classList.add('is-visible');
					});
				}
			}
			window.onscroll = () => {
				if (window.scrollY >= scrollThreshold && $floatingWidget.classList.contains('is-visible') === false) {
					if ($floatingWidget.classList.contains('is-visible')) {	
						$bc.gsap.to($floatingWidget, {bottom: '-100%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
							$floatingWidget.classList.remove('is-visible');
						});
					} else {
						$bc.gsap.to($floatingWidget, {bottom: '3%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
							$floatingWidget.classList.add('is-visible');
						});
					}
				} else if (window.scrollY < scrollThreshold && $floatingWidget.classList.contains('is-visible')) {
					if ($floatingWidget.classList.contains('is-visible')) {	
						$bc.gsap.to($floatingWidget, {bottom: '-100%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
							$floatingWidget.classList.remove('is-visible');
						});
					} else {
						$bc.gsap.to($floatingWidget, {bottom: '3%', duration: dur, ease: easing}).eventCallback('onComplete', () => {
							$floatingWidget.classList.add('is-visible');
						});
					}
				}
			};
			/* Floating page nav */
			const $floatingNav = document.querySelector('.feature-page-navigation--floating'); 
			if ($floatingNav) {
				const $floatingNavToggle = $floatingNav.querySelector('.feature-page-navigation__toggle__link'); 
				
				navTogglersFactory($floatingNavToggle, {duration: 0.2, defaultStroke: '#fff', activeStroke: '#fff'}, ($floatingNavToggle) => {
					const $floatingNavWrapper = $floatingNavToggle.parentElement.nextElementSibling;
					if ($floatingNavWrapper.classList.contains('is-active')) {
						$bc.gsap.to($floatingNavWrapper, {opacity: 0, duration: 0.328, display: 'none'}).eventCallback('onComplete', () => {
							$floatingNavWrapper.classList.toggle('is-active');
						});	
					} else {
						$bc.gsap.to($floatingNavWrapper, {opacity: 1,  duration: 0.328, display: 'block'}).eventCallback('onComplete', () => {
							$floatingNavWrapper.classList.toggle('is-active');
						});	
					}
				}); 		
			}
			const $toTop = $floatingWidget.querySelector('.bc-to-page-top');
			$toTop.addEventListener('click', (evt) => {
				evt.stopPropagation();
				$bc.gsapFns.scrollTo({scrollTo: {y: 0}, duration: 0.360});
			});
		}// end if $floatingWidget
		
		/* Feature page navigation links */
		function featurePageNavClick($link) {
			
			const $linkTarget = document.getElementById($link.getAttribute('href').slice(1));
			
			$bc.gsapFns.scrollTo({scrollTo: {y: $bc.getElOffset($linkTarget).top}, duration: 0.360});
		}
		const $featurePageNav = (document.querySelector('.feature-page-navigation')) ? document.querySelector('.feature-page-navigation') : null; 
		if ($featurePageNav) {
			const featurePageNavLinks = Array.from($featurePageNav.querySelectorAll('.feature-page-navigation__link'));
			for (let $navLink of featurePageNavLinks) {
				$navLink.addEventListener('click', (evt) => {
					evt.preventDefault();
					featurePageNavClick($navLink);													
				});
			}
		}
		
		/* Section subnavigation component */
		const $headerSubNav = (document.querySelector('.bc-header-sub-nav')) ? document.querySelector('.bc-header-sub-nav') : null;
		if ($headerSubNav) {
			const $headerSubNavToggle = $headerSubNav.querySelector('.bc-header-sub-nav__toggle__icon');
			const $headerSubNavToggleIcon = $headerSubNavToggle.querySelector('.bc-header-sub-nav__toggle__icon .bc-svg-icon');
			const $headerSubNavBody = $headerSubNav.querySelector('.bc-header-sub-nav__list');
			$headerSubNavToggle.addEventListener('click', (evt) => {
				evt.preventDefault();
				const navBodyHeight = $headerSubNavBody.scrollHeight;
				if ($headerSubNavToggle.classList.contains('is-active')) {
					$bc.gsap.to($headerSubNavBody, {height: 0, duration: 0.328}).eventCallback('onComplete', () => {
						$headerSubNavBody.classList.toggle('is-active');
						$headerSubNavBody.removeAttribute('style');
						$headerSubNavToggle.classList.toggle('is-active');
					});
					$bc.gsap.to($headerSubNavToggleIcon, {rotate: '45deg', duration: 0.4});	
				} else {
					$bc.gsap.to($headerSubNavBody, {height: navBodyHeight+'px',  duration: 0.328}).eventCallback('onComplete', () => {
						$headerSubNavBody.classList.toggle('is-active');
						$headerSubNavToggle.classList.toggle('is-active');
					});	
					$bc.gsap.to($headerSubNavToggleIcon, {rotate: '90deg', duration: 0.4});
				}
			});
			
		}// Section subnavigation component
		
		/** 
			*	Animate elements as they become visible
			*	.bc-fade-in-up--is-not-visible has not been seen
			*	.bc-fade-in-up--is-visible has been seen
		**/
		/* 
			* 					-- If !(IntersectionObserver in window) -- 
		*/
		// Custom event - fired when an element becomes visible in the viewport
		const bcIsVisibleEvt = document.createEvent('Event');
		bcIsVisibleEvt.initEvent('bc-is-visible', true, true);
		const animatableElements = document.querySelectorAll('.bc-feature-component, .bc-hero .bc-fade-in-up--is-not-visible');
		for (const $el of animatableElements) {
			//bc-is-visible handler
			$el.addEventListener('bc-is-visible', () => {
				console.log('bc-is-visible');
				//Fade in up
				/*$bc.gsapFns.fadeIn($el, {duration: 1, y: 20}, ($el) => {
					$el.classList.remove('bc-fade-in-up--is-not-visible');
					$el.classList.add('bc-fade-in-up--is-visible');
				});*/
			});
		}
		document.addEventListener('scroll', () => {
			for (const $el of animatableElements) {
				//Test visibility using $bc.isScrollVisible()
				if ($el.classList.contains('bc-fade-in-up--is-not-visible') ) {
					$el.dispatchEvent(bcIsVisibleEvt);	
				}
			}
		});
		//* If (IntersectionObserver in window) */
		/*const featuresObserverOptions = {
			threshold: [0.1, 0.2, 0.25, 0.3, 0.5, 0.9]
		};*/
		const bcFeaturesFadeInOptions = {
			rootMargin: '0% 0% 0% 0%',
			threshold: [0, 0.20, 0.382, 0.5, 0.75, 0.95]
		};
		const bcHeroesFadeInOptions = {
			rootMargin: '0% 0% 0% 0%',
			threshold: [0.15, 0.20, 0.382, 0.5, 0.75, 0.95]
		};
		
		/* Observer for Features */
		const bcFeaturesFadeInObserver = new IntersectionObserver((entries, observer) => {
			const targets = entries.filter(entry => {
				if (entry.isIntersecting) {
					observer.unobserve(entry.target);
					return entry;
				} 
			}).map(entry => {
				return entry.target;
			}); 
			
			if (targets.length > 0 ) {
				$bc.gsap.to(targets, {y: 0, opacity: 1, duration: 1.125, ease: 'power4.out', stagger: 0.2}).eventCallback('onComplete', () => {
					console.log('This is complete');
				});	
			}
		}, bcFeaturesFadeInOptions);
		//Observe all fadable elements in feature components
		const bcFadeInFeatures = document.querySelectorAll('.bc-feature-component .bc-fade-in-up--is-not-visible');
		if (bcFadeInFeatures.length > 0) {
			for (let fadeInFeature of bcFadeInFeatures) {
				bcFeaturesFadeInObserver.observe(fadeInFeature);	
			}
		}
		/* Observer for Heroes */
		const bcHeroesFadeInObserver = new IntersectionObserver((entries, observer) => {
			for (let entry of entries) {
				if (entry.intersectionRatio >= 0.5) {
					const $target = entry.target; 
					const $thisHero = $target.closest('.bc-hero');
					const $animatables = Array.from($target.querySelectorAll('.bc-fade-in-up--is-not-visible'));
					let yTarget = -0;
					
					if (window.innerWidth >= 768 && window.innerHeight >= 600) {
						yTarget =  ($thisHero.classList.contains('bc-hero--inpage')) ? -0 : -30;
					}
					if (window.innerWidth >= 1600) {
						yTarget =  ($thisHero.classList.contains('bc-hero--inpage')) ? -80 : -110;
					}
					$bc.gsap.to($animatables, {y: yTarget, opacity: 1, duration: 1.125, ease: 'power4.out', stagger: 0.3});
					observer.unobserve($target);
				}
			}
		}, bcHeroesFadeInOptions);
		const bcHeroesFadeInFeatures = document.querySelectorAll('.bc-hero .bc-hero__body'); 
		
		if (bcHeroesFadeInFeatures.length > 0) {			
			for (let fadeInFeature of bcHeroesFadeInFeatures) {
				bcHeroesFadeInObserver.observe(fadeInFeature);	
			}
		}
		
		/** Feature components, Heroes scroll to next content onclick **/
		if ($pageFeatures) {
			//For each node in the list 
			$pageFeatures.forEach(($this) =>{
				
				//Project specific - if this is a hero component and it has the site quick nav embedded or if it is not full VH in it then skip it
				if ($this.classList.contains('has-quick-nav') || $this.classList.contains('is-full-vh') === false) {
					return;
				} 
				if ($this.nextElementSibling) {
					const $nextSibling = $this.nextElementSibling;
					//Skip this if the next element is the CTA feature
					if ($nextSibling.classList.contains('.bc-cta-feature')) {
						return;
					}
					const linkText = ($nextSibling.getAttribute('aria-label')) ? 'Next: '+$nextSibling.getAttribute('aria-label') : 'Next content' ;	
					const $thisCTA = $this.querySelector('.bc-hero__cta, .bc-feature-component__cta');
					if ($thisCTA  && $thisCTA.querySelector('.bc-feature-component__next')) {
						const $nextLinkText = $thisCTA.querySelector('.bc-feature-component__next__text');
						//const $nextLinkIcon = $thisCTA.querySelector('.bc-feature-component__next__icon svg');
						$nextLinkText.innerHTML = '';
						$nextLinkText.append(document.createTextNode(linkText));
						$nextLinkText.addEventListener('click', (evt) => {
							evt.preventDefault(); 
							$bc.gsapFns.scrollTo({scrollTo: {y: $nextSibling.offsetTop}, duration: 0.360});
						});
					}
				} else {
					return;
				}
			});
		}
		/* 
			** Flickty sliders 
		*/
		if (document.querySelector('.bc-flickty-slider')) {
			const $sliderElement = document.querySelector('.bc-flickty-slider');
			const $sliderNext = document.querySelector('.bc-flickty-slider__next');
			const $sliderPrev = document.querySelector('.bc-flickty-slider__prev');
			const $slider = new Flickity($sliderElement, {
				cellSelector: '.bc-flickty-slider__slide',
				prevNextButtons: false,
				pageDots: false
			});
			if ($slider.selectedIndex === 0) {
				$sliderPrev.classList.add('is-inactive');	
				$sliderNext.classList.remove('is-inactive');	
			} else if ($slider.selectedIndex === $slider.cells.length -1) {
				$sliderPrev.classList.remove('is-inactive');
				$sliderNext.classList.add('is-inactive');	
			} else {
				$sliderPrev.classList.remove('is-inactive');	
				$sliderNext.classList.remove('is-inactive');	
			}
			if ($sliderElement.querySelectorAll('.bc-flickty-slider__slide--video').length > 0) {
				const $videoSlide = $sliderElement.querySelectorAll('.bc-flickty-slider__slide--video')[0];
				const $videoSlideWrap = $sliderElement.querySelectorAll('.bc-flickty-slider__video-wrap')[0];
				$bc.responsiveiFrames('.bc-flickty-slider .bc-flickty-slider__slide--video');
				
				//	const $videoSlideContent = $videoSlide.querySelector('.bc-flickty-slider__slide__content'); 
				//const $videoSlidePlay = $videoSlide.querySelector('.bc-flickty-slider__slide--video__play'); 
				const $videoSlideHeading = $videoSlide.querySelector('.bc-flickty-slider__slide__heading');
				const $videoSlideSubHeading = $videoSlide.querySelector('.bc-flickty-slider__slide__sub-heading');
				const $videoSlideLeader = $videoSlide.querySelector('.bc-flickty-slider__slide__leader');
				const $videoSlideLink = $videoSlide.querySelector('.bc-flickty-slider__slide__link'); 
				const videoSliderElements = [$videoSlideHeading, $videoSlideSubHeading, $videoSlideLink, $videoSlideLeader];
				
				$videoSlideHeading.style.top = $videoSlideHeading.offsetTop + 'px'; 
				
				const videoTl = $bc.gsap.timeline().pause();
				videoTl.to(videoSliderElements, {y: 50, opacity: 0, transformOrigin: 'left bottom'});
				videoTl.set($videoSlideWrap, {display: 'block', opacity: 0, y: -50});
				//videoTl.set([$videoSlidePlay, $videoSlideHeading, $videoSlideSubHeading], {display: 'none'});
				videoTl.set([$videoSlideLink, $videoSlideLeader], {y: -20});
				videoTl.to($videoSlideWrap, {opacity: 1, y: 0});
				videoTl.to([$videoSlideLink, $videoSlideLeader], {opacity: 1, y: 0});
				//videoTl.to($, {height: 0});
				
				/*$videoSlidePlay.addEventListener('click', (evt) => {
					evt.preventDefault();
					const $this = evt.currentTarget;
					videoTl.play();
					
					$this.removeEventListener('click', arguments.callee);
				});*/
			}
			$sliderNext.addEventListener('click', (evt) => { 
				evt.preventDefault();
				$slider.next();
				if ($slider.selectedIndex === 0) {
					$sliderPrev.classList.add('is-inactive');
					$sliderNext.classList.remove('is-inactive');
				} else if ($slider.selectedIndex === $slider.cells.length -1) {
					$sliderPrev.classList.remove('is-inactive');
					$sliderNext.classList.add('is-inactive');	
				} else {
					$sliderPrev.classList.remove('is-inactive');	
					$sliderNext.classList.remove('is-inactive');	
				}
			});
			$sliderPrev.addEventListener('click', (evt) => {
				evt.preventDefault();
				$slider.previous(); 
				if ($slider.selectedIndex === 0) {
					$sliderPrev.classList.add('is-inactive');
					$sliderNext.classList.remove('is-inactive');
				} else if ($slider.selectedIndex === $slider.cells.length -1) {
					$sliderPrev.classList.remove('is-inactive');
					$sliderNext.classList.add('is-inactive');	
				} else {
					$sliderPrev.classList.remove('is-inactive');	
					$sliderNext.classList.remove('is-inactive');	
				}
			});
		}// end if .bc-flickty-slider
		/* Expandible blocks */
		if (document.querySelectorAll('.bc-expandible-block__expander__button').length > 0) {
			const $expandButtons = document.querySelectorAll('.bc-expandible-block__expander__button');
			for (let $btn of $expandButtons) {
				const $expandableBlock = $btn.closest('.bc-expandible-block');
				const blockOffsets = $bc.getElOffset($expandableBlock);
				const $expandableBody = $expandableBlock.querySelector('.bc-expandible-block__body'); 
				$btn.addEventListener('click', () => {
					if ($btn.classList.contains('is-active')) {
						hideAccordionBody($expandableBody, () => {
							$btn.classList.toggle('is-active');	
						});
						
					} else {
						showAccordionBody($expandableBody, () => {
							$btn.classList.toggle('is-active');	
							$bc.gsapFns.scrollTo({scrollTo: {y: blockOffsets.top}, duration: 0.2});
						});
						
					}
				});
			}
		}/* End Expandible blocks */
		/** Accordion components **/ 
		function showAccordionBody(accordionBody, cb) {
			if (accordionBody.classList.contains('is-active') === false) {
				$bc.gsap.to(accordionBody, {height: accordionBody.scrollHeight + 'px'}).eventCallback('onComplete', () => {
					accordionBody.classList.toggle('is-active');
					if (typeof cb === 'function') {
						cb();
					}
				});
			} else {
				return;
			}
		}
		function hideAccordionBody(accordionBody, cb) {
			if (accordionBody.classList.contains('is-active')) {
				$bc.gsap.to(accordionBody, {height: 0 + 'px'}).eventCallback('onComplete', () => {
					accordionBody.classList.toggle('is-active');
					if (typeof cb === 'function') {
						cb();
					}
				});	
			} else {
				return;
			}
		}
		if (document.querySelectorAll('.bc-accordion').length > 0) {
			const accordions = document.querySelectorAll('.bc-accordion');
			for (let $accordion of accordions) {
				const accordionTriggers = $accordion.querySelectorAll('.bc-accordion__block-trigger');
				for (let $accordionTrigger of accordionTriggers) {
					$accordionTrigger.addEventListener('click', (evt) => {
						evt.preventDefault();
						const $accordionTriggerIcon = $accordionTrigger.querySelector('.bc-accordion__block-trigger__icon > .bc-svg-icon');
						const $accordionBody = $accordionTrigger.closest('.bc-accordion__block-heading').nextElementSibling;
						const $accordionCloseLink = $accordionBody.querySelector('.bc-accordion__close > a');
						const $accordionHeading = $accordionBody.previousElementSibling;
						const headingOffsets = $bc.getElOffset($accordionHeading);
						if ($accordionTrigger.classList.contains('is-active') === false) {
							showAccordionBody($accordionBody);
							$bc.gsap.to($accordionTriggerIcon, {rotate: '90deg', duration: 0.1}).eventCallback('onComplete', () => {
								$accordionTrigger.classList.toggle('is-active');
							});
							
							$bc.gsapFns.scrollTo({scrollTo: {y: headingOffsets.top}, duration: 0.2});
						} else {
							hideAccordionBody($accordionBody);
							$bc.gsap.to($accordionTriggerIcon, {rotate: '45deg', duration: 0.1}).eventCallback('onComplete', () => {
								$accordionTrigger.classList.toggle('is-active');
							});
							$bc.gsapFns.scrollTo({scrollTo: {y: headingOffsets.top}, duration: 0.2}); 
						}
						
						$accordionCloseLink.addEventListener('click', function closeLinkClickHander(evt) { 
							evt.preventDefault();
							hideAccordionBody($accordionBody);
							$bc.gsap.to($accordionTriggerIcon, {rotate: '45deg', duration: 0.1}).eventCallback('onComplete', () => {
								$accordionTrigger.classList.toggle('is-active');
							});
						});
					});	
				}
				
			}
		}// Accordion components
		
		const wavyComponents = (document.querySelectorAll('.has-waves')) ? document.querySelectorAll('.has-waves') : null;
		if (wavyComponents) {
			wavyComponents.forEach(($el) => {
				
				const $waves = $el.querySelector('.wave-wrap');
				const $nextEl  = $el.nextElementSibling;
				let $nextElWrap  = null;
				let paddingTop = Number.parseInt(window.getComputedStyle($nextEl).getPropertyValue('padding-top'));
				
				$nextEl.style.marginTop = '-' + $waves.clientHeight + 'px';
				
				if ($nextEl.classList.contains('has-waves')) {
					$nextElWrap  = $nextEl.querySelector('.bc-feature-component__wrap');	
					paddingTop = Number.parseInt(window.getComputedStyle($nextElWrap).getPropertyValue('padding-top'));
					console.log(paddingTop);
					$nextElWrap.style.paddingTop = paddingTop + $waves.clientHeight + 'px';
					$nextEl.style.zIndex = '4';
				} else {
					$nextEl.style.paddingTop = ($nextEl.classList.contains('bc-breadcrumbs')) ? paddingTop * 3.5 + 'px' : paddingTop + $waves.clientHeight + 'px';
				}
			});
		}
	};/*** // window.onload Project scripts ***/
	
})();// bcScriptsWrap()