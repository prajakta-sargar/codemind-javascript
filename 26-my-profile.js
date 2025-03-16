


console.log(`====== Changing style of an element =========`);
const technology = document.querySelector("#technology");
technology.style.color = "red";
technology.style.fontFamily = "Arial";




console.log(`====== Changing style of an element =========`);
const myProfileDetail = document.querySelector("#myProfileDetail");
myProfileDetail.style.color = "blue";
myProfileDetail.style.fontFamily = "Arial";
myProfileDetail.object.style.fontSize="100px";

console.log(`====== Changing the attribute of an element =========`);
const myprofile = document.querySelector("#myprofile");
myprofile.setAttribute("href", "https://www.instagram.com/codemind_technology_official/");


console.log("====== Create the node =========");
const textNode = document.createTextNode("All copyrights reserved by Codemind!");
const paraElement = document.createElement("p");
paraElement.appendChild(textNode);

const footer = document.querySelector("footer");
footer.appendChild(paraElement);



