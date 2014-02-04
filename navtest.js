var nerdyDevs =
[
{
    name: "Kala",
    pets: ["Kitty", "Brown Dog"],
},
{
    name: "Amber",
    pets: ["Cat", "Red Dog"],
},
{
    name: "Norm",
    pets: ["Cats", "Catz", "CATS"],
},
{
    name: "Carolyn",
    pets: ["Cats", "Pony", "Brony"],
},
{
    name: "Emilia",
    pets: ["More Cats", "Even More"],
},
{
    name: "Alla",
    pets: ["Parrot"],
},



];

$(document).ready(function () {
    var i = 0;
    var j = 0;
    for (i = 0; i < nerdyDevs.length; i++) {
        $superNerds = nerdyDevs[i];
        $nerdyDev = nerdyDevs[i].name;
        for (j = 0; j < $superNerds.pets.length; j++) {
            $nerdyPet = $superNerds.pets;
            $petItem = "<li class='petNerds'>" + $nerdyPet + "</li>";
        }
        $navItem = "<li class='nerds'>" + $nerdyDev + "<ul class='nerdPets'>" + $petItem + "</ul></li>";
        $(".nerdNav").append($navItem);
    }
});
//why won't this work???  I have made a huge mistake.