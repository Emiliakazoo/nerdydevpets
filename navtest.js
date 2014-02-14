$(document).ready(function() {
 
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

$.each(nerdyDevs, function (i, owner) {

    $('ul.nerdNav').append("<li id='" + owner.name + "'><a href=''>" + owner.name + "</a></li>");

    $('li#' + owner.name + '').append("<ul class='_" + owner.name + " pets'>");

    $.each(nerdyDevs[i].pets, function (i, petName) {

        $("ul._" + owner.name + ".pets").append("<li><a href=''>" + petName + "</a>");
    });

});
});
//why won't this work???  I have made a huge mistake.