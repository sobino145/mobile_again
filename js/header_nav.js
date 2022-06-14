$(document).ready(function(){

	$(".gnb_list").css({"right":"-85%"});/* 처음위치 */

  /* 메뉴버튼 */
  $(".menu_toggle_btn").click(function(){
    $(".gnb_list").stop().animate({"right":0})
  });

  /* 닫기버튼 */
  $(".gnb .close").click(function(){
    $(".gnb_list").stop().animate({"right":"-85%"})
  });

});