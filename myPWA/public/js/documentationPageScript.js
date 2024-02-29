//*********************************************************************************
// written by:																   
// ▄████▄   ██░ ██  ▄▄▄       ██▀███   ██▓     ██▓▓█████ 						   
// ▒██▀ ▀█  ▓██░ ██▒▒████▄    ▓██ ▒ ██▒▓██▒    ▓██▒▓█   ▀						    
// ▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██ ░▄█ ▒▒██░    ▒██▒▒███  						    
// ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▒██▀▀█▄  ▒██░    ░██░▒▓█  ▄						    
// ▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒░██▓ ▒██▒░██████▒░██░░▒████▒						   
// ░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒▓ ░▒▓░░ ▒░▓  ░░▓  ░░ ▒░ ░						   	
//   ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░  ░▒ ░ ▒░░ ░ ▒  ░ ▒ ░ ░ ░  ░						   
// ░         ░  ░░ ░  ░   ▒     ░░   ░   ░ ░    ▒ ░   ░   						   
// ░ ░       ░  ░  ░      ░  ░   ░         ░  ░ ░     ░  ░						   
// ░                                                      						   
//*********************************************************************************

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
    var x = document.getElementById("docsText");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
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

  // closes the documentation selector
  function closeDocSelector() {
    var x = document.getElementById("docsText")
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
      document.getElementById("h2-1").innerHTML = "The Text Diary Page is a page that utilises exporting and importing text files which can be used as a diary, the reason why I chose to use text files is to avoid using temporary storage to store diary contents for only until the webpage is refreshed.";
      document.getElementById("h2-2").innerHTML = "How this page works is by firstly clicking 'Create Text File' and write your whatever you want in there, after you are done you can set a file name in the text box and click 'Save'. When you want to edit a diary text file, you click 'Edit Text File' and drag 'n' drop your text file into the text box and then start editing the text file. Once you are done, type in either the same filename or a new file name and click 'Save'.";
      console.log("Documentation dropdown choice " + docDropdwnSel + " has been set.");
    } else if (docDropdwnSel == 3) {
      document.getElementById("h1").innerHTML = "Tips Page";
      document.getElementById("h2-1").innerHTML = "The tips page is a page that provides the user with 5 time management tips to help the user manage their time with text instructions.";
      document.getElementById("h2-2").innerHTML = "How this webpage works is by simply clicking the 'Study Tips' dropdown and selecting one of the 5 study tips to read. Once a choice is made, there will be a good amount of information about how to manage you time that will appear that the user can read. The user can click 'Close' to hide the text or to choose another bit of text.";
      console.log("Documentation dropdown choice " + docDropdwnSel + " has been set.");
    } else if (docDropdwnSel == 4) {
      document.getElementById("h1").innerHTML = "Development";
      document.getElementById("h2-1").innerHTML = "Developing this WebApp has created many challenges that had taught to overcome them in different ways. Starting the initial develeopment, I opted to ditch using an SQLite database as backend to front end would be difficult to implement for a project like this, I had just chose to modify HTML elements and data in Javascript as it was much easier for me to work with.";
      document.getElementById("h2-2").innerHTML = "After I had created the first few pages I started to work on making the scripts. Making the calendar was frustrating and at sometimes difficult but once I had solved those issues I had noticed the calendar page somehow broke again which took me quite a bit so fix again but after I had fixed it again I had implemented an audio file that plays to alert the user. Developing the other pages wasnt too difficult, the most I had to do was copy and paste the dropdown script and the hide/show elements scipt from the calendar page and applied it to the other WebPages and made minor tweaks to the code and the code was mostly finished.";
      console.log("Documentation dropdown choice " + docDropdwnSel + " has been set.");
    }
  }