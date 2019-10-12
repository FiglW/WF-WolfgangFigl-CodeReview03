var movies=


[
  { 
    "id" : "1",
    "title": "Muttertag",
    "Description": "Familie Neugebauer bereitet sich auf den bevorstehenden Muttertag vor. Dabei geht jedes Mitglied auf seine ganz eigene Art und Weise vor.",
    "Director": "Harald Sicheritz",
    "Likes": "10",
    "imagesrc":"./img/muttertag.jpg"


},
{
  "id" : "2",
    "title": "Contact High",
    "Description": "Carlos benötigt dringend eine Tasche, die sich in Polen befindet.Er beauftragt den Autohändler Harry mit der Abholung des wertvollen Gepäckstücks.",
    "Director": "Michael Glawogger",
    "Likes": "6",
    "imagesrc":"./img/contact.jpg"
},

{
  "id" : "3",
    "title": "Indien",
    "Description": "Der Beamte Heinzi Bösel, ein kleinbürgerlicher Widerling, bekommt als neuen Kollegen ausgerechnet den geschwätzigen, yuppiehaften Streber Kurt Fellner zur Seite gestellt.",
    "Director": "Paul Harather",
    "Likes": "7",
    "imagesrc": "./img/indien.jpg"
},

{
  "id" : "4",
    "title": "Die nackte Kanone",
    "Description": "Leutnant Frank Drebin ist aus seinem Urlaub in Beirut zurück in Los Angeles und erfährt, dass sein Kollege Nordberg im Krankenhaus liegt,Sein letzter Fall war ein Drogendeal.",
    "Director": "David Zucker",
    "Likes": "7",
    "imagesrc": "./img/kanone.jpg"
},

{
  "id" : "5",
    "title": "El Camino",
    "Description": "Ein „Breaking Bad“-Film ist ein US-amerikanischer Film, der von Vince Gilligan geschrieben und inszeniert wurde. Er setzt die Handlung aus der Serie Breaking Bad fort.",
    "Director": "Vince Gilligan",
    "Likes": "8",
    "imagesrc": "./img/camino.jpg"
},

{
  "id" : "6",
    "title": "Joker",
    "Description": "Gotham City in den 80er Jahren: Der Joker war einst ein Comedian. Doch der erhoffte Erfolg blieb aus. Über dunkle Abgründe führte inh sein Weg immer weiter hin zum irren Clown.",
    "Director": "Todd Phillips",
    "Likes": "10",
    "imagesrc": "./img/joker.jpg"
}


]





//header//

var header = document.createElement("header");
header.className = "header";
var title = document.createElement("h1");
title.innerText = "Movie Database";

header.appendChild(title);
document.body.appendChild(header);

//Nav//

var nav = document.createElement("nav");

nav.className ="navbar";

var ul = document.createElement("ul");
ul.className = "item";

var li = document.createElement("li");
li.className = "item-list";
li.innerHTML = "<a href='index.html' alt='home'>Home</a>";



header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li);

//main//

var main = document.createElement("main");

document.body.appendChild(main);
var div1  = document.createElement("div");
main.appendChild(div1);



div1.className="flexbox";

for (var i = 0; i < movies.length; i++) {
	var para = document.createElement("div");
	para.className = "allefilme";

    div1.appendChild(para);
    var x = document.createElement("IMG");
    x.setAttribute("src", movies[i].imagesrc);
    x.setAttribute("width", "250");
    x.setAttribute("height", "400");
    x.setAttribute("alt", "jo eh");
    para.appendChild(x);



    var node = document.createElement("div");
    node.innerHTML = `<h1>${movies[i].title}</h1> <br> <p>Director: <br><br>${movies[i].Director}</p> <p>Description: <br><br> ${movies[i].Description}</p> <button> Like 👍 </button> <span>${movies[i].Likes}</span `
    para.appendChild(node);
                                                                                                                                                          //Button mit span dann zählt er hoch//<button> Like 👍 </button> <span>${movies[i].Likes}</span//
}

 //Like Button

function likebutton(){
buttons = document.querySelectorAll("button");

  for (var button of buttons){
    button.addEventListener("click",function(e){
      var count = parseInt(e.target.nextElementSibling.innerText);
      count++;
      e.target.nextElementSibling.innerText = count;
      for (var movie of movies){
        if(movie.id == button.parentNode.parentNode.attributes[0].value){
          movie.Likes = count;
          console.log(movie.Likes)
        }
      }
    })
  }
}





//footer//

var footer = document.createElement("footer");
footer.className = "foot";
footer.innerHTML = '<footer><img src="" alt=""><p>&copy; Wolfgang Figl - Code Review 03 - Code Factory 2019</p></footer>';
document.body.appendChild(footer);






likebutton()















