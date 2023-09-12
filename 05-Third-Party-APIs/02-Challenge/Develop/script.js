// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the HTML.
$(function () {
  // Function to update the time block's class (past, present, or future)
  function updateTimeBlockStatus() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }
// Function to display the current date in the header
function displayCurrentDate() {
  var currentDay = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDay);
}

// Call the initial functions
displayCurrentDate();
updateTimeBlockStatus();
loadSavedEvents();

// Event listener for the save buttons
$('.saveBtn').on('click', function () {
  var blockId = $(this).parent().attr('id');
  var eventText = $(this).siblings('.description').val();

  localStorage.setItem(blockId, eventText);
});
});
