// Pseudocode
// Current Day - I will use Moment.js (or looking into modern alternatives) to have the current date display
// Time Blocks - The time blocks need to present the 9-5 work week. Let's create them via bootstrap rows and columns - we will want to use col-12 here with many different rows
// Using jQuery and moment.js we will color-coordinate the timeblocks with the current time
// add an input box to the largest columns, expand the input field to be the entirety of the column
// Use jQuery with blur, onChange, and focus to add the ability to update tasks within the planner and have them save 
// Use Iconic for icons & Google Fonts for the fonts.

var tasks = [];

// store the object properties in my array to localStorage under the key of localStorageTasks
var saveTask = function () {
    localStorage.setItem("localStorageTasks", JSON.stringify(tasks));
}

// put the items in localStorage into my array
var loadTask = function() {
    tasks = JSON.parse(localStorage.getItem("localStorageTasks"));
    
    // iterate through each element, checking if the objData matches. If so, add the text in objTask to that element. 
    tasks.forEach((element, index) => {
        console.log(element.objData);
        $(element.objData).text(element.objTask);
    })
};

// grab the current hour, compare that to i to determine the outcome of the conditional. As i iterates, it is sync'd with the hour id of the element with which it is coloring. 
var colorTimeBlock = function () {
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


// Using Moment, get the date within a variable. Select the currentDay id to add the current date to the second to the element. Run the colorTimeBlock function to have the coloring of each element be sychronized with the current time. Then, using ready(), once the document has loaded, run getTime() and set an interval on it every second. 
var getTime = function () {
    var date = moment(new Date());
    $("#currentDay").html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));

    colorTimeBlock();
    return date;
};

$(document).ready(function () {
    getTime();
    setInterval(getTime, 1000);
});

// Once the saveBtn is clicked, grab the id of saveBtn to be able to reference which timeblock. Using the data attribute to mirror the id in <textarea>, get the values from within textarea into the variable task. Store time, task, and data into an object. Check to see if there are any duplicates by comparing the objTime. If duplicates exist, remove the duplicate value. Push object properties into the array, then save them into localStorage. 
$(".container").on("click", ".saveBtn", function () {
    var time = $(this)
        .attr("id");

    var data = $(this).attr("data")
    var task = $(data) //$("#17txt")
        .val()
        .trim();

    var taskObj = {
        objTime: time,
        objTask: task,
        objData: data
    }

    tasks.forEach((arrObj, index) => {
        if (arrObj.objTime === time) {
            tasks.splice(index, 1)
        }
    });
    tasks.push(taskObj);
    console.log(tasks);

    saveTask();
});

loadTask();



