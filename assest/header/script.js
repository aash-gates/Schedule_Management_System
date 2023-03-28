// Code for opening and closing the Start Menu
// Code for updating the date, time, and day
function updateDateTime() {
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', hour12: true});
    var day = now.toLocaleDateString([], {weekday: 'long'});
    
    document.querySelector('.date').textContent = date;
    document.querySelector('.time').textContent = time;
    document.querySelector('.day').textContent = day;
  }
  
  // Update the date, time, and day initially
  updateDateTime();
  
  // Update the date, time, and day every second
  setInterval(updateDateTime, 1000);
  
var startMenu = document.querySelector('.start-menu');
var startMenuOpen = false;

startMenu.addEventListener('click', function() {
  if (startMenuOpen) {
    // Close Start Menu
    startMenuOpen = false;
  } else {
    // Open Start Menu
    startMenuOpen = true;
  }
});

// Code for opening and closing the Task Icons
var taskIcons = document.querySelector('.task-icons');
var taskIconsOpen = false;

taskIcons.addEventListener('click', function() {
  if (taskIconsOpen) {
    // Close Task Icons
    taskIconsOpen = false;
  } else {
    // Open Task Icons
    taskIconsOpen = true;
  }
});

// Code for opening and closing the System Tray
var systemTray = document.querySelector('.system-tray');
var systemTrayOpen = false;

systemTray.addEventListener('click', function() {
  if (systemTrayOpen) {
    // Close System Tray
    systemTrayOpen = false;
  } else {
    // Open System Tray
    systemTrayOpen = true;
  }
});
