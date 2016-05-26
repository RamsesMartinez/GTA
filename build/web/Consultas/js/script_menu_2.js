$(function() {
 
 $('#navigation_2 a').stop().animate({'marginLeft':'85px'},1000);
 
 $('#navigation_2 > li').hover(
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'2px'},200);
  },
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'85px'},200);
  }
 );
});
