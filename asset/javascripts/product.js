// 打開優惠
$('.discount-link').click(function(event) {
  /* Act on the event */
  $(this).parent().find('.discount-content').slideToggle().css('display', 'inline-block');
  $(this).toggleClass('open');
});

// 打開搜尋
$('#search-box').click(function(event) {
  /* Act on the event */
  $('#search-modal').addClass('open');
  $('.section').css('position', 'fixed');
});
$('.back-btn').click(function(event) {
  /* Act on the event */
  $('#search-modal').removeClass('open');
  $('.section').css('position', 'static');
});
//Modal-shop-select
$('.icon-filter').click(function(event) {
  /* Act on the event */
  $('#modalshop').addClass('open');
  // $('.section').css('position', 'fixed');
});
$('.modal-content').find('.close').click(function(event) {
  /* Act on the event */
  $('#modalshop').removeClass('open');
  // $('.section').css('position', 'static');
});
//price-filter
$('#price-filter').click(function(event) {
  /* Act on the event */
  $(this).toggleClass('icon-sort-amount-desc');
});
//menu OPEN
$('.nav-toggle').click(function(event) {
  /* Act on the event */
  $('nav').addClass('open');
  $('.overlay-bg').addClass('open');
});
$('.close-bg').click(function(event) {
  /* Act on the event */
  $('nav').removeClass('open');
  $('.overlay-bg').removeClass('open');
});


//Goto Top JS
jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 200,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.go-top');
    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible'): $back_to_top.removeClass('is-visible fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
});

//sticky header
$(function() {
  var $window = $(window),
      $stickyheader = $('.product-content'),
      // 取得header的預設位置
      headerOffsetTop = $stickyheader.offset().top;

  // 監控視窗捲動事件
  // (每次視窗觸發捲動事件時執行處理)
  $window.on('scroll', function() {
      // 檢查視窗捲動程度、
      // 若超過header的預設位置則附加類別、
      // 反之則刪除

      if ($window.scrollTop() > headerOffsetTop) {
          $('.product-content').addClass('sticky')
          // $stickyheader.find('.main-content').addClass('sticky');
          $('.product-list').css('margin-top', '160px');

      } else {
          $('.product-content').removeClass('sticky');
          // $stickyheader.find('.main-content').removeClass('sticky');
          $('.product-list').css('margin-top', '0');
      }

  });
    
});