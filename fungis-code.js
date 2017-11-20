//setting background image
document.body.style.backgroundImage = "url('concretewall1.jpg')";

// title
var title = document.createElement("h1");
var titlenode = document.createTextNode("Fungi's Code");
title.appendChild(titlenode);
var heading = document.getElementById("headingcontainer");
heading.appendChild(title);

//styling title
document.getElementById("headingcontainer").style.color = "red";
document.getElementById("headingcontainer").style.font = "bold 2rem arial,serif";
document.getElementById("headingcontainer").style.padding = "6% 30%";

// project description
var projecttext = document.createElement("p");
var projectnode = document.createTextNode("The majority of this project is made up of javascript, the code to survival according to American Civil Defence. Layout needs to improve.");
projecttext.appendChild(projectnode);
var description = document.getElementById("projectdescription");
description.appendChild(projecttext);

//styling project project description
document.getElementById("projectdescription").style.color ="red";
document.getElementById("projectdescription").style.font = "1rem Verdana, Geneva, sans-serif"
