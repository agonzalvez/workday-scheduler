var timeDisplay = $('#currentDay');
var saveButton = document.querySelector('.saveBtn');


currentDay = setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A, dddd'));
}, 1000);
  
