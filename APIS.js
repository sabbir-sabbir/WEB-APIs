// JS Forms API..........................................
function validation(){
    const inputobj = document.getElementById("id1");
    
     if(inputobj.validity.rangeOverflow ){
        inputobj.setCustomValidity("Bro! your making it overflow now..Please Stop.");

     } else if(inputobj.validity.rangeUnderflow){
        inputobj.setCustomValidity("This input is too under the real Value of this try again latter... ");

     } else if(inputobj.validity.valueMissing){
        inputobj.setCustomValidity("Your input is missing now!");
     }

    if(!inputobj.checkValidity()){
        document.getElementById("demo").innerHTML = inputobj.validationMessage;
    }

}

// JS History API.........................
function back(){
    window.history.back();
}

function backTo(n){
    window.history.go(n);
}

function forward(){
    window.history.forward();
}

function getHistory(){
    alert(window.history.length);
}

// Storage Object...
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    // 
    alert(`${key} : ${value}`);
}

function getLocalStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        alert(`${key}: ${value}`);
    } else {
        alert(`${key} not found in Local Storage`);
    }
}

function removeLocalStorage(key) {
    localStorage.removeItem(key);
    alert(`${key} removed from Local Storage`);
}

function clearLocalStorage() {
    localStorage.clear();
    alert('All Local Storage cleared');
}


// Web Worker Object...................................................
//    function of start worker
let w;
function startWorker(){
    if(typeof Worker !== 'undefined'){
        w = new Worker("worker.js")
     
        // Listening for Worker Meassage.
        w.onmessage = function(event){
            document.getElementById("demo").innerHTML = event.data;
        };


    } else {
        alert("Your browser doesnt support web worker!!!")
    }
}
//    function of stop worker
function stopworker(){
    if(typeof Worker !== 'undefined'){
        w.terminte();
        w = undefined;
    } else {
        alert("Your browser doesnt support web worker!!!")
    }
}


//   Fetch Api...
const display = document.getElementById("display");

async function getData(){
    const res = await fetch("http://127.0.0.1:5500/data.txt");
    const data = await res.text();

    display.innerText = data;
}

const displayy = document.getElementById("displayy");

function getlocation(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPostion, showError);
      } else {
        displayy.inert = "Geolocation is not Available in your Syestem."
      }
}

function showPostion(position){
    displayy.innerHTML = "latitude: "  +  position.coords.latitude + "<br/>Longitude: " +  position.coords.longitude;
}

function showError(){
    switch(error.code) {
        case error.PERMISSION_DENIED:
            displayy.innerHTML = "User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
            displayy.innerHTML = "Location information is unavailable."
          break;
        case error.TIMEOUT:
            displayy.innerHTML = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
            displayy.innerHTML = "An unknown error occurred."
          break;
      }
}

// Geolocation Object - Other interesting Methods
// The Geolocation object also has other interesting methods:

// watchPosition() - Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).
// clearWatch() - Stops the watchPosition() method.