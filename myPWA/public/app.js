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

function onButtonClick1 () {

}

function onButtonClick2 () {

}

function onButtonClick3 () {

}

const calenderPageButton = document.querySelector('calendarPageButton');
calendar.addEventListener('click', onButtonClick1);