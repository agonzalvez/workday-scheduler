var timeDisplay = $('#currentDay');
var saveButton = document.querySelector('.saveBtn');



// Current day and date using moment.js
var today = moment().format('dddd, MMMM Do YYYY');
timeDisplay.text(today);



saveButton.addEventListener("click", savedActivity);

// Local storage
function savedActivity() {
    var activityValue = document.querySelector('.activity').value;
    localStorage.setItem("activityValue", activityValue);
}

// function getActivity(){
//     var activityValue = document.querySelector('.activity').value;
//     document.getElementsByClassName(".activity").innerHTML = localStorage.getItem(activityValue);
// }

// getActivity();