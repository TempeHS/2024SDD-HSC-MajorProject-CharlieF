var studyTip = 0;

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
      studyTip = 1;   
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
    }
  }
  
  function dropdownChoice2() {
    if (document.getElementById("dropdownChoice2").onclick) {
      studyTip = 2;
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
    }
  }
  
  function dropdownChoice3() {
    if (document.getElementById("dropdownChoice3").onclick) {
      studyTip = 3;
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
    }
  }
  function dropdownChoice4() {
    if (document.getElementById("dropdownChoice4").onclick) {
      studyTip = 4;   
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
    }
  }
  
  function dropdownChoice5() {
    if (document.getElementById("dropdownChoice5").onclick) {
      studyTip = 5;
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
    }
  }

  function hideShowCreateButton() {
    var x = document.getElementById("studyTipsText");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function closeTipSelector() {
    var x = document.getElementById("studyTipsText");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function studyTipTextBoxUpdate() {
    if (studyTip == 1) {
      var textArea = document.getElementById("textBox").innerHTML;
      textArea = "Prioritize tasks: Start each day by listing tasks in order of importance. Focus on completing high-priority tasks first to ensure that crucial objectives are met.\nNot all tasks are created equal. Some have a more significant impact on your goals or deadlines than others. By prioritizing tasks, you ensure that you're tackling the most important things first. One popular method for prioritization is the Eisenhower Matrix, which categorizes tasks into four quadrants based on their urgency and importance. This helps you identify what needs immediate attention versus what can be delegated or deferred.";
    }
  }