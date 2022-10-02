$(document).ready(function ($) {
     $(".accordion__header").next().slideToggle("slow"); //Close all news

     // move mouse the news
     $(".side").sortable({
          axis: "y",
          handle: "h3",
          stop: function (event, ui) {
               ui.item.children("h3").triggerHandler("focusout");
          },
     });

     // handle click news side
     $(".accordion__header").on("click", function () {
          $(this).next().slideToggle(200);
          $(this).children("i").toggleClass("arrow_minimize arrow_maximize");
          $(this).toggleClass("side__active");
     });

     // handle click course
     $("li").on("click", function () {
          if ($(this).hasClass("selected")) $(this).removeClass("selected");
          else $(this).addClass("selected");
     });
     
     // handle move course by mouse
     $(".courses-all").sortable({
          connectWith: ".courses-register",
     });
     $(".courses-register").sortable({
          connectWith: ".courses-all",
     });

     
     $(".btn-submit").on("click", function (e) {
          e.preventDefault();
          validation()
     })
});
