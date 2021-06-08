function vehicle(make, model, year, color) {
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("keywordsAndConstructors").innerHTML = "Erik drives a " + Erik.vehicleColor + "-colored " + Erik.vehicleModel + " manufactured in " + Erik.vehicleYear;
}