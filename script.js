var timeDisplay = $('#currentDay');
var saveButton = document.querySelector('.saveBtn');


function currentDay(){

    var today=  moment().format('dddd, MMMM Do YYYY');
     timeDisplay.text(today);
 }
 setInterval(currentDay, 1000);


saveButton.addEventListener("click", savedActivity);

function savedActivity (){
    var activityValue = document.querySelector('.activity').value;
    localStorage.setItem("activityValue", activityValue );
}