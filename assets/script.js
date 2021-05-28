var timeDisplay = $('#currentDay');
var saveButton = document.querySelectorAll('.saveBtn');
var activityValue = document.querySelector('.activity');
console.log(saveButton)


// Current day and date using moment.js
var today = moment().format('dddd, MMMM Do YYYY');
timeDisplay.text(today);

for (i = 0; i < saveButton.length; i++){
   saveButton[i].addEventListener("click", storeActivity);
}


function storeActivity (){

    var description = $(this).siblings(".activity").val()
    console.log(description)
    var time = $(this).parent().attr("class")
    console.log(typeof time)
    localStorage.setItem(time.split(' ')[1], description);
    
}

$("#09 + .activity").val(localStorage.getItem("9am"))
$("#10 + .activity").val(localStorage.getItem("10am"))
$("#11 + .activity").val(localStorage.getItem("11am"))
$("#12.activity").val(localStorage.getItem("12pm"))
$("#13.activity").val(localStorage.getItem("13pm"))
$("#14.activity").val(localStorage.getItem("14pm"))
$("#15.activity").val(localStorage.getItem("15pm"))
$("#16.activity").val(localStorage.getItem("16pm"))
$("#17.activity").val(localStorage.getItem("17pm"))



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

