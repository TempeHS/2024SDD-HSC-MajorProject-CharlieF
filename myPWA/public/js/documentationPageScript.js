var docDropdwnSel = 0;

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
  console.log("documentation.html successfully loaded! (HTML PAGE LOCATION: /myPWA/public/pages/documentaion.html)");

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
      docDropdwnSel = 1;   
      console.log("User selected study tip: " + docDropdwnSel);
      hideShowCreateButton();
      docTextUpdate();
    }
  }
  
  function dropdownChoice2() {
    if (document.getElementById("dropdownChoice2").onclick) {
      docDropdwnSel = 2;
      console.log("User selected study tip: " + docDropdwnSel);
      hideShowCreateButton();
      docTextUpdate();
    }
  }
  
  function dropdownChoice3() {
    if (document.getElementById("dropdownChoice3").onclick) {
      docDropdwnSel = 3;
      console.log("User selected study tip: " + docDropdwnSel);
      hideShowCreateButton();
      docTextUpdate();
    }
  }
  function dropdownChoice4() {
    if (document.getElementById("dropdownChoice4").onclick) {
      docDropdwnSel = 4;   
      console.log("User selected study tip: " + docDropdwnSel);
      hideShowCreateButton();
      docTextUpdate();
    }
  }
  

  function hideShowCreateButton() {
    var x = document.getElementById("docsText");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // closes the 
  function closeDocSelector() {
    var x = document.getElementById("docsText");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // change h1, h2-1 and h2-2 headers to text created from chatGPT (chatGPT output is located in: ..\.workingdocuments\chatGPT time management tips text.txt)
  function docTextUpdate() {
    if (docDropdwnSel == 1) {
      document.getElementById("h1").innerHTML = "Calendar Page";
      document.getElementById("h2-1").innerHTML = "The calendar page is essentially a page that allows you to set a task reminder and be notified when a set time and date comes.";
      document.getElementById("h2-2").innerHTML = "This page took the most amount of time to develop because of all the minor issues that appeared multiple times. This page works by the user clicking 'Create Task/Event', choosing a date and time, and naming the task. After these choices are made, the code will check the time set on the task value every second to see if it matches the clock. When the time on the task matches the clock the WebApp will notify the user with a page alert and delete the due task after the user clicks 'OK' on the alert.";
      console.log("Documentation dropdown choice " + docDropdwnSel + " has been set.");      
    } else if (docDropdwnSel == 2) {
      document.getElementById("h1").innerHTML = "Diary Page";
      document.getElementById("h2-1").innerHTML = "";
      document.getElementById("h2-2").innerHTML = "";
      console.log("Documentation dropdown choice " + docDropdwnSel + " has been set.");
    } else if (docDropdwnSel == 3) {
      document.getElementById("h1").innerHTML = "Tips Page";
      document.getElementById("h2-1").innerHTML = "";
      document.getElementById("h2-2").innerHTML = "";
      console.log("Documentation dropdown choice " + docDropdwnSel + " has been set.");
    } else if (docDropdwnSel == 4) {
      document.getElementById("h1").innerHTML = "Development";
      document.getElementById("h2-1").innerHTML = "";
      document.getElementById("h2-2").innerHTML = "";
      console.log("Documentation dropdown choice " + docDropdwnSel + " has been set.");
    }
  }