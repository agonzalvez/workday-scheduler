var timeDisplay = $('#currentDay');
var saveButton = document.querySelector('.saveBtn');



// Current day and date using moment.js
var today = moment().format('dddd, MMMM Do YYYY');
timeDisplay.text(today);


saveButton.addEventListener("click", storeActivity);


function storeActivity (){
    var activityValue = document.querySelector('.activity').value;
    var description = $(this).siblings(".activity").val()
    console.log(description)
    var time = $(this).parent().attr("id")
    console.log(time)
    localStorage.setItem(time, description);
    
}

$("#09 .activity").val(localStorage.getItem("09"))
$("#10 .activity").val(localStorage.getItem("10"))
$("#11 .activity").val(localStorage.getItem("11"))
$("#12 .activity").val(localStorage.getItem("12"))
$("#13 .activity").val(localStorage.getItem("13"))
$("#14 .activity").val(localStorage.getItem("14"))
$("#15 .activity").val(localStorage.getItem("15"))
$("#16 .activity").val(localStorage.getItem("16"))
$("#17 .activity").val(localStorage.getItem("17"))


function hourBlock(){
    var now = moment().hours();
 
    $(".row").each(function(){
       var blockTime = parseInt($(this).attr("id"))
 
       if (now > blockTime){
          $(this).addClass("past")
       } else if (now === blockTime){
          $(this).removeClass("past")
          $(this).addClass("present")
       } else {
       $(this).removeClass("past")
       $(this).removeClass("present")
       $(this).addClass("future")
       }
    })
 
 }
 hourBlock();

// Local storage
// function savedActivity() {
//     var activityValue = document.querySelector('.activity').value;
//     localStorage.setItem("activityValue", activityValue);
// }

// function getActivity(){
//     var activityValue = document.querySelector('.activity').value;
//     document.getElementsByClassName(".activity").innerHTML = localStorage.getItem(activityValue);
// }

// getActivity();\

