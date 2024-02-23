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
  console.log("diary.html successfully loaded! (HTML PAGE LOCATION: /myPWA/public/pages/diary.html)");
   
  function hideShowCreateButton1() {
    var z = document.getElementById("content1");
    var x = document.getElementById("content2");
    if (z.style.display === "none") {
      z.style.display = "block";
      x.style.display = "none";
    } else {
      z.style.display = "none";
    }
  }

  function hideShowCreateButton2() {
    var x = document.getElementById("content2");
    var z = document.getElementById("content1");
    if (x.style.display === "none") {
      x.style.display = "block";
      z.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  // this portion of code is from:
  // https://stackoverflow.com/questions/13685263/can-i-save-input-from-form-to-txt-in-html-using-javascript-jquery-and-then-us
  function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.style.display = 'none';
    document.body.appendChild(pom);
    pom.click();
    document.body.removeChild(pom);
  }
  function addTextTXT() {
    document.addtext.name.value = document.addtext.name.value + ".txt"
  }

  function download2(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.style.display = 'none';
    document.body.appendChild(pom);
    pom.click();
    document.body.removeChild(pom);
  }
  
// this portion of code is from:
// https://stackoverflow.com/questions/12214057/drag-n-drop-text-file  
  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.
    var reader = new FileReader();  
    reader.onload = function(event) {            
         document.getElementById('drop_zone').value = event.target.result;
    }        
    reader.readAsText(files[0],"UTF-8");
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);