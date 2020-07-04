//header navigation
$(function() {
  var w = $(window).width();
  var x = 767;
  if (x <= w) {
    $(".globalNav > li").hover(
      //第1階層のメニューにhoverしたときの処理
      function() {
        $(this)
          .find(".secondary_nav")//hoverした要素の子孫要素から取得
          .stop(true)
          .slideDown(500);
      },
      //第1階層のメニューからhoverが外れたときの処理
      function() {
        $(this)
          .find(".secondary_nav")//hoverした要素の子孫要素から取得
          .slideUp(500);
      }
    );
  }
});

//SP ハンバーガーメニュークリック時の処理
$(function() {
  var activeClass = "is_active";
  $('.icon-hamburger').click(
    function(){
      //activeクラスを付与し、CSSでハンバーガーアイコン画像の切り替え
      $(this).toggleClass(activeClass);
      $('.ly_header').toggleClass(activeClass);
      //第一階層メニューがスライド
      $('.globalNav').slideToggle(500);
  });
  
  $('.globalNav > li > a').on('click', function(event) {
    event.preventDefault();
    $(this).next('.secondary_nav').slideToggle(250);
    $(this).children('.icon_down').toggleClass("opened");
  });
  
});

//function demo1_2(triggerSelector) {
//  // 引数で指定したトリガーをクリックしたとき、クリックしたトリガーの次の要素を展開
//  $(triggerSelector).on('click', function(event) {
//    $trigger = $(triggerSelector);
//    event.preventDefault();
//
//    $(this).toggleClass(activeClass);
//    $(this).next().slideToggle(250);
//  });
//};
//
//// 引数でトリガーを指定
//demo1_2('#demo1 .trigger');
//demo1_2('#demo2 .trigger');


//modal

$(function() {
  var scrollPos;//topからのスクロール位置
  $('.js_modal_btn').click(function() {
    scrollPos = $(window).scrollTop();//topからのスクロール位置を格納
    $('.mod_modal_wrapper').fadeIn();//モーダルをフェードイン
    $('body').addClass('fixed').css({ top: -scrollPos });//背景固定
    return false;//<a>を無効化
  });
  $('.mod_modal_overlay, .js_modal__close').click(function() {
    $('.mod_modal_wrapper').fadeOut();//モーダルをフェードアウト
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $(window).scrollTop(scrollPos);//元の位置までスクロール
    return false;//<a>を無効化
  });
});


//accordion

$(function(){
  $('.accordion_header').click(function() {
    $(this).next('.accordion_body').slideToggle();
    $(this).toggleClass("is_open");
  });
});