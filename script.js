var timeDisplay = $('#currentDay');
var saveButton = document.querySelector('.saveBtn');


var today= moment();
$(timeDisplay).text(today.format("MMM Do, YYYY"));