// Pseudocode
// Current Day - I will use Moment.js (or looking into modern alternatives) to have the current date display
// Time Blocks - The time blocks need to present the 9-5 work week. Let's create them via bootstrap rows and columns - we will want to use col-12 here with many different rows
// Using jQuery and moment.js we will color-coordinate the timeblocks with the current time
// add an input box to the largest columns, expand the input field to be the entirety of the column
// Use jQuery with blur, onChange, and focus to add the ability to update tasks within the planner and have them save 
// Use Iconic for icons & Google Fonts for the fonts.

tasks = {};

var colorTimeBlock = function() {
    let currentHour = moment().hour();

    for (let i = 9; i < 18; i++) {
        let timeBlock = $("#hour-" + i)
        timeBlock.removeClass("past present future")

        if (currentHour < i) {
            timeBlock.addClass("future");
        } else if (currentHour > i) {
            timeBlock.addClass("past");
        } else {
            timeBlock.addClass("present");
        }
    }
};



var getTime = function() {
    var date = moment(new Date());
    $("#currentDay").html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));

    colorTimeBlock();
    return date;
};

$(document).ready(function() {
    getTime();
    setInterval(getTime, 1000);
});

taskObj = {}

function Events(time, task) {
    this.time = time;
    this.task = task;
}


// Use event delegation via targeting container. Once something has changed within the text area
$(".container").on("click", ".saveBtn", function() {
    var time = $(".col-1")
        .closest(".hour")
        .val();
    console.log(time);    
    var task = $("textarea")
        .val()
        .trim();

console.log(task);
});



var saveTask = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}




// var colorTimeBlock = function() {
//     var checkTime = new Date().getHours() - 5;
//     console.log(checkTime);
//     for (let i = 9; i < 18; i++) {
//     // var element = $("#hour-" + [i]);
//     if (i == new Date().getHours() - 3) {
//         $("#hour-" + i).css("backgroundColor", "#ff6961");
//     } 
//     else if (i < new Date().getHours() - 3) {
//         $("#hour-" + i).css("backgroundColor", "#d3d3d3");
//     }
//     else $(".col-10").css("backgroundColor", "#77dd77");
// }
// }
// $(document).ready(function() {
//     colorTimeBlock();
// });










// var colorTimeBlock = function() {
//     for (let i = 9; i < 18; i++) {

//         $("#hour-" + i).css("background-color", "")

//         if ($("#hour-" + i) === currentTime.getHours()) {
//             $("#hour-" + i).css("background-color", "#77dd77");
//         } 
//         else if ($("#hour-" + i) < currentTime.getHours()) {
//             $("#hour-" + i).css("background-color", "#d3d3d3");
//         }
//         else $("#hour-" + i).css("background-color", "#ff6961");
//     }
// }



// $(".col-10").each(function() {
//     if ($(".col-1").data("time") === currentTime.getHours()) {
//         $(this).css("backgroundColor", "#77dd77");
//     }
//     else if ($(".col-1").data("time") < currentTime.getHours()) {
//         $(this).css("backgroundColor", "tomato");
//     }
//     else $(this).css("backgroundColor", "#ff6961");
// });



