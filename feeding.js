/* Variables */
isleftButtonplaying = false;
isrightButtonplaying = false;
leftTimer = null;
rightTimer = null;
leftTimerMilliseconds = 0;
rightTimerMilliseconds = 0;

/* Run Once */
updateStartTime ();

    /* Left Button timer - toggle between play 
            and pause between left/right side */  
function leftButton () {
    var leftPlayPause = document.getElementById ('leftPlayPause');
    if (isrightButtonplaying) {
        rightButton ();
        leftButton ();
    }
    else if (isleftButtonplaying) { 
        leftPlayPause.src = './assets/play-button.png';
        isleftButtonplaying = false;

        /* Pause the timer */
        clearInterval(leftTimer);
    } else {
        leftPlayPause.src = './assets/pause-button.png';
        isleftButtonplaying = true;

        /* Timer */
        var start = new Date();
        start.setMilliseconds(start.getMilliseconds()-leftTimerMilliseconds);

        leftTimer = setInterval(function() {
            var delta = (Date.now() - start); // milliseconds elapsed since start
            leftTimerMilliseconds = delta;
            updateScreen(formatTimerText(delta), 'left');
        }, 1000); // update about every second
    }

}
           /* Right button timer - toggle between 
           play and pause between left/right side */ 
function rightButton () {
    var rightPlayPause = document.getElementById ('rightPlayPause');
    if (isleftButtonplaying) {
        leftButton ();
        rightButton ();
    }
    else if (isrightButtonplaying) { 
        rightPlayPause.src = './assets/play-button.png';
        isrightButtonplaying = false;

         /* Pause the timer */
        clearInterval(rightTimer);
    } else {
        rightPlayPause.src = './assets/pause-button.png';
        isrightButtonplaying = true;

         /* Timer */
         var start = new Date();
         start.setMilliseconds(start.getMilliseconds()-rightTimerMilliseconds);
 
         rightTimer = setInterval(function() {
             var delta = (Date.now() - start); // milliseconds elapsed since start
             rightTimerMilliseconds = delta;
             updateScreen(formatTimerText(delta), 'right');
         }, 1000); // update about every second
    }
}

    /* Formats timer text to update screen */
function formatTimerText (millisecondsToFormat) { 
    return new Date(millisecondsToFormat).toISOString().substring(14, 19);

} 

    /* Update displayed timer text */
function updateScreen (updatedTime, leftOrRightTimer){
    var leftTimerText = document.getElementById ('leftTimer');
    var rightTimerText = document.getElementById ('rightTimer');

    if (leftOrRightTimer == 'right') {
        rightTimerText.innerHTML = updatedTime;
    }
    else if (leftOrRightTimer == 'left')  {
        leftTimerText.innerHTML = updatedTime;
    }
}

    /* Total Eaten */
function calculateTotalEaten (){
    var startWeightText = document.getElementById ('startWeight').value;
    var endWeightText = document.getElementById ('endWeight').value;
    var totalEatenText = document.getElementById ('totalEatenText');
    var totalWeightGained = parseFloat(endWeightText) - parseFloat(startWeightText);
    var totalOuncesConsumed = (totalWeightGained * 35.274).toFixed(2) + " oz";
    
    // end if both are not filled out 
    if (endWeightText == '' || startWeightText == '') { 
        return;
    } 

    totalEatenText.innerHTML = totalOuncesConsumed;
}

    /* Start Time */
function updateStartTime (){
    var startTimeText = document.getElementById ('startTime');
    var now = new Date ();
    startTimeText.value = now.toLocaleString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}