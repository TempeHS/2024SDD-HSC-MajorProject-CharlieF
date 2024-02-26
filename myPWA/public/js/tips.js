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
      studyTipsTextUpdate();
    }
  }
  
  function dropdownChoice2() {
    if (document.getElementById("dropdownChoice2").onclick) {
      studyTip = 2;
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
      studyTipsTextUpdate();
    }
  }
  
  function dropdownChoice3() {
    if (document.getElementById("dropdownChoice3").onclick) {
      studyTip = 3;
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
      studyTipsTextUpdate();
    }
  }
  function dropdownChoice4() {
    if (document.getElementById("dropdownChoice4").onclick) {
      studyTip = 4;   
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
      studyTipsTextUpdate();
    }
  }
  
  function dropdownChoice5() {
    if (document.getElementById("dropdownChoice5").onclick) {
      studyTip = 5;
      console.log("User selected study tip: " + studyTip);
      hideShowCreateButton();
      studyTipsTextUpdate();
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

  // closes the 
  function closeTipSelector() {
    var x = document.getElementById("studyTipsText");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // change h1, h2-1 and h2-2 headers to text created from chatGPT (chatGPT output is located in: ..\.workingdocuments\chatGPT time management tips text.txt)
  function studyTipsTextUpdate() {
    if (studyTip == 1) {
      document.getElementById("h1").innerHTML = "Prioritise tasks";
      document.getElementById("h2-1").innerHTML = "Prioritize tasks: Start each day by listing tasks in order of importance. Focus on completing high-priority tasks first to ensure that crucial objectives are met.";
      document.getElementById("h2-2").innerHTML = "Not all tasks are created equal. Some have a more significant impact on your goals or deadlines than others. By prioritizing tasks, you ensure that you're tackling the most important things first. One popular method for prioritization is the Eisenhower Matrix, which categorizes tasks into four quadrants based on their urgency and importance. This helps you identify what needs immediate attention versus what can be delegated or deferred.";
      console.log("Study tip " + studyTip + " has been set.");      
    } else if (studyTip == 2) {
      document.getElementById("h1").innerHTML = "Set specific goals";
      document.getElementById("h2-1").innerHTML = "Define clear, achievable goals for the day, week, and month. Break larger goals into smaller, manageable tasks, and allocate time slots for each to maintain focus and motivation.";
      document.getElementById("h2-2").innerHTML = "Setting specific, measurable, achievable, relevant, and time-bound (SMART) goals provides clarity and direction. When you know exactly what you're working towards, it becomes easier to plan your time effectively. Break down your larger goals into smaller, actionable steps, and assign deadlines to each step. This not only makes your goals more manageable but also helps track progress along the way.";
      console.log("Study tip " + studyTip + " has been set.");
    } else if (studyTip == 3) {
      document.getElementById("h1").innerHTML = "Use time blocking";
      document.getElementById("h2-1").innerHTML = "Allocate specific blocks of time for different activities throughout the day. This helps prevent multitasking and ensures dedicated focus on one task at a time, leading to increased productivity.";
      document.getElementById("h2-2").innerHTML = "Time blocking involves allocating specific blocks of time for different activities or tasks throughout your day. Instead of bouncing between tasks haphazardly, you dedicate focused periods to specific activities. This can help you maintain concentration, increase productivity, and prevent procrastination. It's essential to be realistic when scheduling blocks of time and to allow for flexibility in case unexpected tasks arise.";
      console.log("Study tip " + studyTip + " has been set.");
    } else if (studyTip == 4) {
      document.getElementById("h1").innerHTML = "Minimize distractions";
      document.getElementById("h2-1").innerHTML = "Identify common distractions such as social media, emails, or unnecessary meetings, and take steps to minimize their impact. Consider using productivity tools or techniques like the Pomodoro Technique to stay focused and limit interruptions.";
      document.getElementById("h2-2").innerHTML = "Distractions are productivity killers. Identify common distractions in your environment, such as phone notifications, email alerts, or noisy coworkers, and take proactive steps to minimize them. This might involve turning off notifications, setting specific times for checking email or social media, or finding a quiet space to work when necessary. Additionally, consider using tools like website blockers or productivity apps to help you stay on track.";
      console.log("Study tip " + studyTip + " has been set.");
    } else if (studyTip == 5) {
      document.getElementById("h1").innerHTML = "Learning to say no";
      document.getElementById("h2-1").innerHTML = "Be selective about taking on additional commitments or tasks that don't align with your priorities or goals. Learning to say no politely but firmly can help you avoid overcommitting and maintain control over your schedule.";
      document.getElementById("h2-2").innerHTML = "Saying yes to every request or opportunity that comes your way can quickly lead to overcommitment and burnout. Learning to say no is essential for protecting your time and energy. Before agreeing to take on a new task or commitment, consider whether it aligns with your priorities and goals. If it doesn't, politely decline or negotiate a more manageable timeline. Remember that saying no isn't selfish—it's about prioritizing your own well-being and effectiveness.";
      console.log("Study tip " + studyTip + " has been set.");
    }
  }