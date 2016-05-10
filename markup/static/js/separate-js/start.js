$(document).ready(function(){
	$('.carousel').slick({
		autoplay: true,
		arrows: false,
		pauseOnHover: false,
		speed: 700
	});
});

(function(){
/*******************кнопки управления слайдера********************************/
	$('.controls-prev').on('click', function(event){
		event.preventDefault();
		$('.carousel').slick('slickPrev');
	});
	$('.controls-next').on('click', function(event){
		event.preventDefault();
		$('.carousel').slick('slickNext');
	});
/*******************открытие поиска******************************************/
	$('.mobile-search').on('click', function(event){
		event.preventDefault();
		if ($('body').hasClass('open-search')) {
			$('body').removeClass('open-search');
		}
		else if ($('body').hasClass('open-menu')){
			$('body').removeClass('open-menu');
			$('body').addClass('open-search');
		}
		else {
			$('body').addClass('open-search');
		}
	});
/*******************открытие мобильного меню*********************************/
	$('.mobile-menu').on('click', function(event){
		event.preventDefault();
		if ($('body').hasClass('open-menu')) {
			$('body').removeClass('open-menu');
		}
		else if ($('body').hasClass('open-search')){
			$('body').removeClass('open-search');
			$('body').addClass('open-menu');
		}
		else {
			$('body').addClass('open-menu');
		}
		
	});
/*******************открытие подменю******************************************/
	var submenu = $('.menu').find('li>ul'),
	 	li = $('.menu').find('>li');
	submenu.addClass('hide');
	li.on('click', function(){
		
		if($(this).hasClass('submenu')) {
			
			if ($(this).hasClass('opened')) {
				$(this).find('ul').slideUp();
				li.removeClass('opened');
				return;
			};

			li.removeClass('opened');
			$(this).addClass('opened');

			li.find('ul').slideUp();
			$(this).find('ul').slideDown();
		}
		else {
			li.removeClass('opened');
			li.find('ul').slideUp();
			return;
		}
	});
})();
