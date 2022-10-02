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

     // handle btn add some courses in registration
     $("#btn-right").on("click", function (e) {
          e.preventDefault();
          var courses = $(".courses-all li.selected");
          if ($(courses).length == 0) {
               alert("Không có môn học nào được chọn");
               e.preventDefault();
          } else {
               $(courses).removeClass("selected");
               for (let course of courses) {
                    $(".courses-register").append(course);
                    $(".courses-all").remove(course);
               }
          }
     });

     // handle btn add all courses in registration
     $("#btn-right-right").on("click", function (e) {
          e.preventDefault();
          var courses = $(".courses-all li");
          if ($(courses).length == 0) {
               alert("Không có môn học nào được chọn");
          } else {
               $(courses).removeClass("selected");
               for (let course of courses) {
                    $(".courses-register").append(course);
                    $(".courses-all").remove(course);
               }
          }
     });

     // handle btn cancel any registrated courses
     $("#btn-left").on("click", function (e) {
          var courses = $(".courses-register li.selected");
          if ($(courses).length == 0) {
               e.preventDefault();
               alert("Không có môn học nào được chọn");
          } else {
               $(courses).removeClass("selected");
               for (let course of courses) {
                    $(".courses-all").append(course);
                    $(".courses-register").remove(course);
               }
          }
     });

     // handle btn cancel all  registrated courses
     $("#btn-left-left").on("click", function (e) {
          e.preventDefault();
          var courses = $(".courses-register li ");
          if ($(courses).length == 0) {
               alert("Không có môn học nào được chọn");
          } else {
               $(courses).removeClass("selected");
               for (let course of courses) {
                    $(".courses-all").append(course);
                    $(".courses-register").remove(course);
               }
          }
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

     // button reset
     $(".btn-reset").on("click", function (e) {
          $("#id").val("");
          $("#name").val("");
          $("#address").val("");
          $("#phone").val("");
          $("#birthdate").val("");
          $("#email").val("");
          var courses = $(".courses-register li ");
          if ($(courses).length != 0) {
               $(".courses-all").append($(courses).clone());
               $(courses).remove();
               e.preventDefault();
          }
          $("li").on("click", function () {
               if ($(this).hasClass("selected"))
                    $(this).removeClass("selected");
               else $(this).addClass("selected");
          });
     });

     // button submit
     $(".btn-submit").on("click", function (e) {
          
          e.preventDefault();
          let id = $("#id").val();
          let name = $("#name").val();
          let sex = $("#sex").val();
          let birthdate = $("#birthdate").val();
          let courses_register = $(".courses-register li");
          if (courses_register.length <= 0) alert("Chưa đăng ký chọn môn học");
          if (validation() && courses_register.length > 0) {
               let notify = `Bạn ${name} đã thành công đăng kí môn: \n`;
               let courses = document.querySelectorAll(".courses-register li");
               for (let course of courses) {
                    notify += course.innerText + "\n";
               }
               alert(notify);
               
               $(".register__table tbody").append(`
          <tr>
          <td>${id}</td>
          <td>${name}</td>
          <td>${sex}</td>
          <td>${birthdate}</td>
          </tr>`);
          }
     });
});
