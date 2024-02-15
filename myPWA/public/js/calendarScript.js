let taskPriority = 0;
var taskCount = 0;
var buttonId = 0;
var buttonCount = 0;

// allows javascript to wait a set amount of time in ms before executing the next line of code (for debug at the moment)
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

  wait(1000);
  // tell user that the page has successfully loaded via the console
  console.log("calendar.html successfully loaded! (HTML PAGE LOCATION: /myPWA/public/pages/calendar.html)");

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = today.getDate();
    let mo = today.getUTCMonth() +1;
    let ye = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s + "  " + day + "/" + mo + "/" + ye;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function htmlDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownChoice1() {
  if (document.getElementById("dropdownChoice1").onclick) {
    taskPriority = 1;
    console.log("task priority is changed to " + taskPriority)
  }
}

function dropdownChoice2() {
  if (document.getElementById("dropdownChoice2").onclick) {
    taskPriority = 2;
    console.log("task priority is changed to " + taskPriority)
  }
}

function dropdownChoice3() {
  if (document.getElementById("dropdownChoice3").onclick) {
    taskPriority = 3;
    console.log("task priority is changed to " + taskPriority)
  }
}

//debug to see if dropdownChoice function was changing taskPriority
// executes/calls code or functions every x amount of seconds
/*var intervalId = window.setInterval(function(){
	console.log("dropdown output = " + taskPriority);
  console.log(buttonCount);
  }, 1000);*/

  function hideShowCreateButton() {
    var x = document.getElementById("txt2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function saveButton() {
  var taskNameInput = document.getElementById("taskNameInput").value;
  var taskNameInputString = taskNameInput;
  console.log(taskNameInputString);
  dateAndTimeOutput();
  var x = document.getElementById("txt2");
  x.style.display = "none";
  console.log("task priority is set to: " + taskPriority);
  saveButtonDataParse();
  buttonCount = buttonCount +1;
}  

function saveButtonDataParse () {
  buttonId = buttonId +1;
  var dateControl = document.querySelector('input[type="date"]');
  var timeControl = document.querySelector('input[type="time"]');
  dateControl.value = dateControl.value;
  timeControl.value = timeControl.value;
  dateTimeOutput = timeControl.value + "-" + dateControl.value;

  // create a new div element
  const newDiv = document.createElement("div");
  const newButton = document.createElement('button');

  // and give it some content
  var taskNameInput = document.getElementById("taskNameInput").value;
  var taskNameInputString = taskNameInput;
  //newButton.textContent = "Task Name: " + taskNameInputString + " Date And Time: " + dateTimeOutput + " Task Priority: " + taskPriority;
  newButton.textContent = taskNameInputString;

  // add the text node to the newly created div
  document.body.appendChild(newButton);
  newButton.classList.add("dropbtn");
  newButton.id = "button" + buttonId;

  // add the newly created element and its content into the DOM
  let currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, newButton, currentDiv);
  newButton.addEventListener('click', () => {
    buttonTaskInfo();
  });
}

function dateAndTimeOutput() {
  var dateControl = document.querySelector('input[type="date"]');
  var timeControl = document.querySelector('input[type="time"]');
  dateControl.value = dateControl.value;
  timeControl.value = timeControl.value;
  dateTimeOutput = timeControl.value + "-" + dateControl.value;
  console.log(dateTimeOutput); // prints "2017-06-01" -- change to return later on to create function that grabs this data and puts it into the SQL Database
  alert("Task/Event has been created, and set to notify you at: " + dateTimeOutput);
}

function buttonTaskInfo() {
  var taskNameInput = document.getElementById("taskNameInput").value;
  var taskNameInputString = taskNameInput;
  var dateControl = document.querySelector('input[type="date"]');
  var timeControl = document.querySelector('input[type="time"]');
  dateControl.value = dateControl.value;
  timeControl.value = timeControl.value;
  dateTimeOutput = timeControl.value + "-" + dateControl.value;
  alert("Task Name: " + taskNameInputString + " Date And Time: " + dateTimeOutput + " Task Priority: " + taskPriority);
  deleteTask();
}

function deleteTask() {
  window.confirm("Do you want to delete this task?");
  if (confirm("Task deleted!")) {
    var elem = document.getElementById("button" + buttonId);
    elem.parentNode.removeChild(elem);
    buttonCount = buttonCount -1;
    buttonId = buttonId -1;
  } else {
    alert("Task deletion cancelled!");
  }
}