
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