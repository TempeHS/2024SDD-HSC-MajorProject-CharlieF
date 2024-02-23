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
  console.log("tips.html successfully loaded! (HTML PAGE LOCATION: /myPWA/public/pages/tips.html)");

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