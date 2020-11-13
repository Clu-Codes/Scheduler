// Pseudocode
// Current Day - I will use Moment.js (or looking into modern alternatives) to have the current date display
// Time Blocks - The time blocks need to present the 9-5 work week. Let's create them via bootstrap rows and columns - we will want to use col-12 here with many different rows
// Using jQuery and moment.js we will color-coordinate the timeblocks with the current time
// Use jQuery with blur, onChange, and focus to add the ability to update tasks within the planner and have them save 
// Use Iconic for icons & Google Fonts for the fonts.

var currentTime = new Date();
console.log(currentTime.getHours());

var getTime = function() {
    var date = moment(new Date());
    $("#currentDay").html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));

    return date;
};
console.log(getTime().hour());
$(document).ready(function() {
    getTime();
    setInterval(getTime, 1000);
});

$(".col-10").each(function() {
    if ($(".col-1").data("time") === currentTime.getHours()) {
        $(this).css("backgroundColor", "#ff6961");
    }
    else if ($(".col-1").data("time") < currentTime.getHours()) {
        $(this).css("backgroundColor", "#d3d3d3");
    }
    else $(this).css("backgroundColor", "#77dd77");
});



