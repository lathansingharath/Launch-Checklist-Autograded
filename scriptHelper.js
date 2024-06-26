// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget"); //this gets the tag to where the info in the paraments can be displayed on the web page
    //The block of code below uses temperal literal to display the random planet info. 
    div.innerHTML = `
        
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src=${imageUrl}>`
 }
 
 function validateInput(testInput) {
    console.log("entering validInput");//testing
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else
        return "Is a Number";   
    }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    
    //sending the individual tag references to validate input
    let politValid = validateInput(pilot);
    let copolitValid = validateInput(copilot);
    let fuelValid = validateInput(fuelLevel);
    let cargoValid = validateInput(cargoLevel);

    //the block code is a very long nested if statements that first make sure all the data is valid before displaying on the page
    if (politValid === "Empty" || copolitValid === "Empty" || fuelValid === "Empty" || cargoValid === "Empty") {
        alert("Invalid Input");

    } else if (politValid === "Is a Number" || copolitValid === "Is a Number" || fuelValid === "Not a Number" || cargoValid === "Not a Number"){
        alert("Invalid Input");   
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (fuelLevel < 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            if (cargoLevel < 10000) {
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
             } else {
                 cargoStatus.innerHTML = "Cargo mass too heavy for launch";                           
             }          
         } else if (fuelLevel >= 10000) { 
             list.style.visibility = "visible";
             fuelStatus.innerHTML = "Fuel level high enough for launch";
             if (cargoLevel < 10000) {
                 cargoStatus.innerHTML = "Cargo mass low enough for launch";
                 launchStatus.innerHTML = "Shuttle is Ready for Launch";
                 launchStatus.style.color = "green"; 
              } else {
                 cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                 launchStatus.style.color = "red";
                 launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                 }
             } 
    }
  
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      
         return response.json(); //this is a response object being returned in a readable format with the help of the json() method
         });
        
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
   
    let planetLength = planets.length;
    let randomNum = Math.floor(Math.random()*planetLength);//this returns random from 0 - 5 instead of 0-6 becuase of the floor() method
    let randomPlanet = planets[randomNum];
 
    return randomPlanet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;