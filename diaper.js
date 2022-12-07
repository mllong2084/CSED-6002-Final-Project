/* Variables */
var currPeeLevel = 0;


/* Run Once */
updateStartTime ();

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

/* Pee Borders to Click */
    function selectPeeLevel (peeLevel) {
        var onePee = document.getElementById ('onePee');
        var twoPee = document.getElementById ('twoPee');
        var threePee = document.getElementById ('threePee');

        // pee images 
        var onePeeImages = document.getElementsByClassName('onePeeImg');
        var twoPeeImages = document.getElementsByClassName('twoPeeImg');
        var threePeeImages = document.getElementsByClassName('threePeeImg');


        
        if (peeLevel == 1) {
            // Make the one pee pink
            for (let i = 0; i < onePeeImages.length; i++) {
                onePeeImages[i].style = 'filter: invert(22%) sepia(84%) saturate(4923%) hue-rotate(302deg) brightness(100%) contrast(98%);';
              }
            currPeeLevel = 1;

            // Reset the other pee levels
            for (let i = 0; i < twoPeeImages.length; i++) {
                twoPeeImages[i].style = '';
              }
            for (let i = 0; i < threePeeImages.length; i++) {
                threePeeImages[i].style = '';
              }
        
        }
        else if (peeLevel == 2) {
            // Make the two pee pink
            for (let i = 0; i < twoPeeImages.length; i++) {
                twoPeeImages[i].style = 'filter: invert(22%) sepia(84%) saturate(4923%) hue-rotate(302deg) brightness(100%) contrast(98%);';
              }
            currPeeLevel = 2;

            // Reset the other pee levels 
            for (let i = 0; i < onePeeImages.length; i++) {
                onePeeImages[i].style = '';
              }
            for (let i = 0; i < threePeeImages.length; i++) {
                threePeeImages[i].style = '';
              }

        }
        else if (peeLevel == 3) {
            // Make the three pee pink
            for (let i = 0; i < threePeeImages.length; i++) {
                threePeeImages[i].style = 'filter: invert(22%) sepia(84%) saturate(4923%) hue-rotate(302deg) brightness(100%) contrast(98%);';
              }
            currPeeLevel = 3;

            // Reset the other pee levels
            for (let i = 0; i < onePeeImages.length; i++) {
                onePeeImages[i].style = '';
              }
            for (let i = 0; i < twoPeeImages.length; i++) {
                twoPeeImages[i].style = '';
              }


        }
    }

/* Poo Borders to Click */
function selectPooLevel (pooLevel) {
    var onePoo = document.getElementById ('onePoo');
    var twoPoo = document.getElementById ('twoPoo');
    var threePoo = document.getElementById ('threePoo');

    // poo images 
    var onePooImages = document.getElementsByClassName('onePooImg');
    var twoPooImages = document.getElementsByClassName('twoPooImg');
    var threePooImages = document.getElementsByClassName('threePooImg');


    
    if (pooLevel == 1) {
        // Make the one poo pink
        for (let i = 0; i < onePooImages.length; i++) {
            onePooImages[i].style = 'filter: invert(22%) sepia(84%) saturate(4923%) hue-rotate(302deg) brightness(100%) contrast(98%);';
          }
        currPooLevel = 1;

        // Reset the other poo levels
        for (let i = 0; i < twoPooImages.length; i++) {
            twoPooImages[i].style = '';
          }
        for (let i = 0; i < threePooImages.length; i++) {
            threePooImages[i].style = '';
          }
    
    }
    else if (pooLevel == 2) {
        // Make the two poo pink
        for (let i = 0; i < twoPooImages.length; i++) {
            twoPooImages[i].style = 'filter: invert(22%) sepia(84%) saturate(4923%) hue-rotate(302deg) brightness(100%) contrast(98%);';
          }
        currPooLevel = 2;

        // Reset the other poo levels 
        for (let i = 0; i < onePooImages.length; i++) {
            onePooImages[i].style = '';
          }
        for (let i = 0; i < threePooImages.length; i++) {
            threePooImages[i].style = '';
          }

    }
    else if (pooLevel == 3) {
        // Make the three poo pink
        for (let i = 0; i < threePooImages.length; i++) {
            threePooImages[i].style = 'filter: invert(22%) sepia(84%) saturate(4923%) hue-rotate(302deg) brightness(100%) contrast(98%);';
          }
        currPeeLevel = 3;

        // Reset the other poo levels
        for (let i = 0; i < onePooImages.length; i++) {
            onePooImages[i].style = '';
          }
        for (let i = 0; i < twoPooImages.length; i++) {
            twoPooImages[i].style = '';
          }


    }
}