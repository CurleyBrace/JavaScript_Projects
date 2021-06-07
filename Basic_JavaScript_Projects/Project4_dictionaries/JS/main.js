//Creating a Dictionary relating to Genshin Impact Characters
function genshinCharacters() { 
    var Amber = {
        Gender: "Female",
        Weapon: "Bow",
        Element: "Pyro",
        Rank: "Four Star",
        BaseAttack: "223",
    }
    //Deleting A variable before outputting
    delete Amber.Rank;
    
    //Attempting to output a variable, returns undefined
    document.getElementById("paraClick").innerHTML = Amber.Rank; 
}