// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    console.log("Loading window");//testing

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
   
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        
    }).then(function () {
        
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document,randomPlanet.name,randomPlanet.diameter,randomPlanet.star,randomPlanet.distance,randomPlanet.moons,randomPlanet.image);

    })

    let submit = document.querySelector("form");   
    submitCounter = 1;//my global click counter. Not using let or var causes it to be global.

    submit.addEventListener("submit",function(event){
        //the preventDefault() method belows prevent the page from refreshing once hit submit button
        event.preventDefault();
            
        let list = document.getElementById("faultyItems");
        let pilot = document.getElementById("pilotName");
        let coPilot = document.querySelector("input[name = copilotName]");
        let fuelLevel = document.querySelector("input[name = fuelLevel]");
        let cargoMass = document.querySelector("input[name = cargoMass]")
    
        formSubmission(document,list,pilot.value,coPilot.value,fuelLevel.value,cargoMass.value);  
        submitCounter++;  
        
    });

    
 });