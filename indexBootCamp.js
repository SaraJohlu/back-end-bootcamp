// HTML taggar
const body = document.body
const h1 = document.createElement("h1");
const ul = document.createElement("ul");

const liBox1 = document.createElement("li");
const liButton1 = document.createElement("button")

// ID
h1.id = "bootcamp";
ul.id = "navigation-box";

liBox1.id = "list-box1";
liButton1.id = "button1";

// Text till HTML taggar
h1.innerHTML = "Back-end Bootcamp";
liButton1.innerHTML = "Kalkylator";

//Lägg till i HTML
body.appendChild(h1);
body.appendChild(ul);

ul.appendChild(liBox1);
liBox1.appendChild(liButton1);




