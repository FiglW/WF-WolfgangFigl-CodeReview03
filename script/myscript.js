// Header //

/*	
  var x = document.createElement("h1");
  x.className = "oida"
  var t = document.createTextNode("Movie Database");
  x.appendChild(t);
  document.getElementById("head").appendChild(x)
  */





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
    node.innerHTML = `<h1>${movies[i].title}</h1> <br> <p>Director: <br><br>${movies[i].Director}</p> <p>Description: <br><br> ${movies[i].Description}</p> <p>Like 👍 ${movies[i].likes}</p>`
    para.appendChild(node);




    
    
}








//footer//

var footer = document.createElement("footer");
footer.className = "foot";
footer.innerHTML = '<footer><img src="" alt=""><p>&copy; Wolfgang Figl - Code Review 03 - Code Factory 2019</p></footer>';
document.body.appendChild(footer);






















