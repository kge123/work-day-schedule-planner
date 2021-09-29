var hour = moment().hours();
$("#currentDay").text(moment().format("LLLL"));
console.log(hour);

function saveText() {
  var planText = $(this).siblings(".description").val();
  var hourKey = $(this).parent().attr("id");

  //save info into localstorage
  localStorage.setItem(hourKey, planText);
}

$(".saveBtn").on("click", saveText);

function formatHour() {
  $(".time-block").each(function () {
    var rowHour = parseInt($(this).attr("id"));

    if (rowHour < hour) {
      $(this).addClass("past");
    } else if (rowHour === hour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

formatHour();

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
