  //console.log("i am one");
  //alert(" i ma one");

let btn=document.querySelector("#stringinstru");
 btn.addEventListener("click", function () {
     window.open("stringinstru.html");
 });


 let botn=document.querySelector("#purc");
 botn.addEventListener("click", function () {
     window.open("purcinstru.html");
 });


 let bottn=document.querySelector("#wind");
 bottn.addEventListener("click", function () {
     window.open("windinstru.html");
 });


 (document).ready(function(){

  $('.header').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // $(window).on('load scroll',function(){

  //   $('.header').removeClass('fa-times');
  //   $('.navbar').removeClass('nav-toggle');

  //   if($(window).scrollTop() > 30){
  //     $('header').addClass('header-active');
  //   }else{
  //     $('header').removeClass('header-active');
  //   }

  //   $('section').each(function(){
  //     var id = $(this).attr('id');
  //     var height = $(this).height();
  //     var offset = $(this).offset().top - 200;
  //     var top = $(window).scrollTop();
  //     if(top >= offset && top < offset + height){
  //       $('.navbar ul li a').removeClass('active');
  //       $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
  //     }
  //   });

  //});


});


//  let a=document.querySelector(".but")
//  a.addEventListener("click", function(){
//     prompt("Enter your name",
//     "Shyam" );
  


//  });    
//  const askout=document.getElementById('askout')
//  askout.addEventListener('click',alert("booked"))