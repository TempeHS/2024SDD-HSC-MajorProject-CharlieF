var taskPriority = 0;

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
  if (document.getElementById("dropdownChoice1").onClick) {
    taskPriority = 1;
  } else if (document.getElementById("dropdownChoice2").onClick) {
    taskPriority = 2;
  } else if (document.getElementById("dropdownChoice3").onClick) {
    taskPriority = 3;
  }
}

var intervalId = window.setInterval(function(){
	console.log("dropdown output = " + taskPriority);
  }, 500);

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

let result = ""; 
fetch('./frontEndData.json') 
  .then(function (response) { 
    return response.json(); 
  }) 
  .then(function (data) { 
    appendData(data); 
  }) 
  .catch(function (err) { 
    console.log('error: ' + err); 
  }); 
  function appendData(data) { 
    data.forEach(({ taskID, taskName, taskDateInt } = rows) => { 
      result += ` 
       <div class="card"> 
            <img class="card-image" src="https://windsorpreschool.com/teachers/generic-profile-image-7" alt=""/> 
            <h1 class="card-name">${taskName}</h1> 
            <p class="card-about">${taskDateInt}</p> 
            <a class="card-link" ${taskID}</a> 
        </div> 
       `; 
    }); 
    document.querySelector(".container").innerHTML = result; 
  } 
   
  if ("serviceWorker" in navigator) { 
    window.addEventListener("load", function () { 
      navigator.serviceWorker 
        .register("/serviceWorker.js") 
        .then((res) => console.log("service worker registered")) 
        .catch((err) => console.log("service worker not registered", err)); 
    }); 
  } 