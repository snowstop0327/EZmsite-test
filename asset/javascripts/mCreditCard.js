//側欄 js
var navigationDOM ;
function openNavigation(){
	navigationDOM = document.getElementById("navigation");
	navigationDOM.className = "nav open";
	navigationDOM.onclick = closeNavigation;
	lockScroll();
}

function closeNavigation(event){
 if(event.clientX > 240){
	navigationDOM.className = "nav";
	unlockScroll();
	}
}

function lockScroll(){
	document.body.className = "nav-open";
}

function unlockScroll(){
	document.body.className = "";
}

//tab js
$(document).ready(function() { 

	(function ($) { 
		$('.card-tabs-content ul.card-tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.card-tabs-content ul.card-tabs li a').click(function (g) { 
			var tab = $(this).closest('.card-tabs-content'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.card-tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.card-tabs-detail').find('div.card-tabs-item').not('div.card-tabs-item:eq(' + index + ')').slideUp();
			tab.find('.card-tabs-detail').find('div.card-tabs-item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery);

});

var jPopSet = 0;
var scr_top = $(window).scrollTop();
var card_position = $('.ads-first');
var card_ads_content = $('.ads-first .card-tabs-content');

$(window).scroll(function(){
  var scr_top = $(window).scrollTop();
  if(jPopSet==0){
    if(scr_top>40){
    	card_position.css({
    		'position': 'fixed',
    		'top': '0px',
    		'left': '0px',
    		'width': '100%',
    		'z-index': '99999'
    	});
    	card_ads_content.css({'display':'none'});
    }
    else if(scr_top<=40){
    	card_position.css({
    		'position': 'relative',
    		'top': '0px',
    		'left': '0px',
    		'width': '100%',
    		'z-index': '99999'
    	});
    	card_ads_content.css({'display':'block'});
    }
  }
});