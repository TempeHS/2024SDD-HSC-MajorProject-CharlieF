var taskPriority = 0;
var taskCount = 0;

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

function dropdownChoice() {
  if (document.getElementById("dropdownChoice1").onclick) {
    taskPriority = 1;   
  } else if (document.getElementById("dropdownChoice2").onclick) {
    taskPriority = 2;
  } else if (document.getElementById("dropdownChoice3").onclick) {
    taskPriority = 3;
  }
}

// debug to see if dropdownChoice function was changing taskPriority
/*var intervalId = window.setInterval(function(){
	console.log("dropdown output = " + taskPriority);
  }, 500);*/

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
}  

function saveButtonDataParse () {
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
  newButton.textContent = "Task Name: " + taskNameInputString + " Date And Time: " + dateTimeOutput + " Task Priority: " + taskPriority;

  // add the text node to the newly created div
  document.body.appendChild(newButton);
  document.body.class("dropbtn");

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, newButton, currentDiv);
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