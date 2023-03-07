/*  
	Mobile nav bar
	모바일 화면의 사이즈가 되면 메뉴가 변견됩니다.

    Scroll to top
    아래로 스크롤을 하면 위로 스크롤을 할 수 있는 버튼을 보여줍니다.
*/
jQuery(function($) {
	$(document).ready(function() {  
		const wrap = $('#gnb>.menu>.full-menu');
		const cont = $('.sub-menu-wrap');
		const pwrap = $('.profile-menu');
		const pcont = $('.sub-profile-menu-wrap');
	  
		cont.hide();
		pcont.hide();

		wrap.mouseover(function(){
		  	cont.show();
		});

		wrap.mouseout(function(){
		  	cont.hide();
		});

		wrap.bind('focus focusin',function(event){
		  	cont.show();
		});

		pwrap.click(function() {
			if(pcont.css("display") == "none"){
				pcont.show();
			} else {
				pcont.hide();
			}
		});
	});

	$('.navbar-mobileBtn').on('click', function() {
		$('.sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('body').css({
			overflow: "hidden"
		});
	});

	$('.dismiss, .overlay').on('click', function() {
		$('.sidebar').removeClass('active');
		$('.overlay').removeClass('active');
		$('body').css({
			overflow: "auto"
		});
	});

	$('.sidebar ul li a:not(:only-child)').click(function(e) {
		$(this).siblings('.nav-dropdown').toggle();
		$('.nav-dropdown').not($(this).siblings()).hide();
		e.stopPropagation();
	});

	$('.btn-customized-3, #scrollToTop').on('click', function() {
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});