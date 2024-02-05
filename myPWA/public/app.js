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

// allows javascript to wait a set amount of time in ms before executing the next line of code (for debug at the moment)
function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
	  end = new Date().getTime();
   }
 } 

// changes page (code taken from https://stackoverflow.com/questions/24903148/navigate-between-html-files)
function onButtonClick1 () {
    // similar behavior as an HTTP redirect
    window.location.replace("pages/calendar.html");
}
// changes page (code taken from https://stackoverflow.com/questions/24903148/navigate-between-html-files)
function onButtonClick2 () {
  // similar behavior as an HTTP redirect
  window.location.replace("pages/diary.html");
}
// changes page (code taken from https://stackoverflow.com/questions/24903148/navigate-between-html-files)
function onButtonClick3 () {
  // similar behavior as an HTTP redirect
  window.location.replace("pages/tips.html");
}