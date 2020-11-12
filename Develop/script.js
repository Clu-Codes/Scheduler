// Pseudocode
// Current Day - I will use Moment.js (or looking into modern alternatives) to have the current date display
// Time Blocks - The time blocks need to present the 9-5 work week. Let's create them via bootstrap rows and columns - we will want to use col-12 here with many different rows
// Using jQuery and moment.js we will color-coordinate the timeblocks with the current time
// Use jQuery with blur, onChange, and focus to add the ability to update tasks within the planner and have them save 
// Use Iconic for icons & Google Fonts for the fonts.

var getTime = function() {
    var date = moment(new Date());
    $("#currentDay").html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};
$(document).ready(function() {
    getTime();
    setInterval(getTime, 1000);
});