/*writing a name to the website*/

let putName = prompt("Enter your name: ");
const h1Element = document.getElementById("myName");
h1Element.innerHTML =putName + "!";
h1Element.style.color = "magenta";