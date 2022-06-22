

let ulNav = document.querySelector('.ulNav');
let li = document.querySelectorAll('li a');

li.forEach(el => {
	el.addEventListener('click', function(){
		ulNav.querySelector('.active').classList.remove('active');
		el.classList.add('active');
	});
});

$(document).ready(function (){

	// using jq in shop

	$(".shop-relative").on({
		mouseover: function () {
			$(".plan-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".planFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".service-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".serviceFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".shop-wrap").css({"opacity": "1", "transition": ".4s","visibility": "visible"});
			$(".shopFixedHover").css({"border-bottom": "1px solid #046cb5", "transition": ".5s"});
			
		},
		
	});


	$(".shop-wrap").on({
		click: function () {
			$(".shop-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".shopFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
		},
		mouseleave: function () {
			$(".shop-wrap").css({"opacity": "0", "transition": ".4s","visibility": "hidden"});
			$(".shopFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
		},
		
	});



	// using jq in plan and offers

	$(".plan-relative").on({
		mouseover: function () {
			$(".shop-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".shopFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".service-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".serviceFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".plan-wrap").css({"opacity": "1", "transition": ".4s","visibility": "visible"});
			$(".planFixedHover").css({"border-bottom": "1px solid #046cb5", "transition": ".5s"});
			
		},
		
	});


	$(".plan-wrap").on({
		click: function () {
			$(".plan-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".planFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
		},
		mouseleave: function () {
			$(".plan-wrap").css({"opacity": "0", "transition": ".4s","visibility": "hidden"});
			$(".planFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
		},
		
	});


	// Using jq in services area

	$(".service-relative").on({
		mouseover: function () {
			$(".plan-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".planFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".shop-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".shopFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".service-wrap").css({"opacity": "1", "transition": ".4s","visibility": "visible"});
			$(".serviceFixedHover").css({"border-bottom": "1px solid #046cb5", "transition": ".5s"});
			
		},
		
	});


	$(".service-wrap").on({
		click: function () {
			$(".service-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".serviceFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
		},
		mouseleave: function () {
			$(".service-wrap").css({"opacity": "0", "transition": ".4s","visibility": "hidden"});
			$(".serviceFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
		},
		
	});


	// using jq in rechargeHover (recharge)

	$(".rechargeHover").on({
		mouseover: function () {
			$(".plan-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".planFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".shop-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".shopFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".serviceFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			
		},
		
	});


	$(".rechargeHover").on({
		click: function () {
			$(".service-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
		},
		mouseleave: function () {
			$(".service-wrap").css({"opacity": "0", "transition": ".4s","visibility": "hidden"});
		},
		
	});

	// using jq in flexiplan (flexiplanHover) area

	$(".flexiplanHover").on({
		mouseover: function () {
			$(".plan-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".planFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".shop-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
			$(".shopFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".serviceFixedHover").css({"border-bottom": "transparent", "transition": ".5s"});
			$(".service-wrap").css({"opacity": "0", "transition": ".4s","visibility": "hidden"});
		},
		
	});


	$(".flexiplanHover").on({
		click: function () {
			$(".service-wrap").css({"opacity": "0", "transition": ".4s", "visibility": "hidden"});
		},
		mouseleave: function () {
			$(".service-wrap").css({"opacity": "0", "transition": ".4s","visibility": "hidden"});
		},
		
	});



	// glider js area

	new Glide (".glide", {
		type: "carousel",
		startAt: 0,
		perView: 7,
		// focusAt: "center",
		hoverpause: true,
		autoplay: 2500,
		perTouch: 4,
		dragThreshold: 130,
		animationDuration: 1500,
		animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
		breakpoints: {
		1200: {
			perView: 3,
		},
		768: {
			perView: 2,
		},
		},
		// arrows: {
		// 	prev: '.glider-prev',
		// 	next: '.glider-next'
		// }
	}).mount();

	// glider for unlock the world area

	new Glide (".glide1", {
		type: "carousel",
		startAt: 0,
		perView: 4,
		// focusAt: "center",
		hoverpause: true,
		autoplay: 2500,
		perTouch: 7,
		dragThreshold: 130,
		animationDuration: 1500,
		animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
		breakpoints: {
		1200: {
			perView: 3,
		},
		768: {
			perView: 2,
		},
		},
		// arrows: {
		// 	prev: '.glider-prev',
		// 	next: '.glider-next'
		// }
	}).mount();


	// my swiper area

	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
		el: ".swiper-pagination",
		clickable: true,
		},
		navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		},
	});


	// for hambergur menu

	$(".for-hamburger-menu").click(function() {
		$('.hambergur-menu-area').css({"left":"0"});
		$(".hambergur-step-three").css({"left":"0", "transition":".5s"});
	})

	$(".for-cross-icon-hambergur").click(function() {
		$('.hambergur-menu-area').css({"left":"-400px"});
		$(".hambergur-step-three").css({"left":"-400px"});
	})


	// for shop

	$('.for-onmouseover-li-shop').on({
		click: function () {
			$('.for-onmouseover-li-shop ul').show(500);
			$('.for-onmouseover-li-shop i').removeClass("fa-angle-right").addClass("fa-angle-down");
			$(body).hide(500);
			$('.hambergur-menu-area').hide(500);
		},
		mouseleave: function () {
			$('.for-onmouseover-li-shop ul').hide(500);
			$('.for-onmouseover-li-shop i').removeClass("fa-angle-down").addClass("fa-angle-right");
		}

	})


	// for plan and service

	// hidden plan is only for demo or memory

	/*

	$('.for-onmouseover-li-plan').on({
		mouseover: function () {
			$('.for-onmouseover-li-plan ul').css({"visibility":"visible","height": "initial","transition":".4s", });
			$('.for-onmouseover-li-plan i').removeClass("fa-angle-right").addClass("fa-angle-down");
		},
		mouseout: function () {
			$('.for-onmouseover-li-plan ul').css({"visibility":"hidden","height": "0px","transition":"0s"});
			$('.for-onmouseover-li-plan i').removeClass("fa-angle-down").addClass("fa-angle-right");
		}

	})

	*/


	$('.for-onmouseover-li-plan').on({
		click: function () {
			$('.for-onmouseover-li-plan ul').show(500);
			$('.for-onmouseover-li-plan i').removeClass("fa-angle-right").addClass("fa-angle-down");
			$(body).hide(500);
			$('.hambergur-menu-area').hide(500);
		},
		mouseleave: function () {
			$('.for-onmouseover-li-plan ul').hide(500);
			$('.for-onmouseover-li-plan i').removeClass("fa-angle-down").addClass("fa-angle-right");
		}

	})


	// for service 


	$('.for-onmouseover-li-service').on({
		click: function () {
			$('.for-onmouseover-li-service ul').show(500);
			$('.for-onmouseover-li-service i').removeClass("fa-angle-right").addClass("fa-angle-down");
			$(body).hide(500);
			$('.hambergur-menu-area').hide(500);
		},
		mouseleave: function () {
			$('.for-onmouseover-li-service ul').hide(500);
			$('.for-onmouseover-li-service i').removeClass("fa-angle-down").addClass("fa-angle-right");
		}

	})

	

	




});

// preloader area

var loader = document.getElementById('preloader-body');

	function myload() {
	
	setTimeout(function() {
		loader.style.display = "none";
	}, 1500);
		
} 