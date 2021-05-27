var timeDisplay = $('#currentDay');
var saveButton = document.querySelector('.saveBtn');


// Current day and date using moment.js
var today = moment().format('dddd, MMMM Do YYYY');
timeDisplay.text(today);



saveButton.addEventListener("click", savedActivity);

function savedActivity() {
    var activityValue = document.querySelector('.activity').value;
    localStorage.setItem("activityValue", activityValue);
}
