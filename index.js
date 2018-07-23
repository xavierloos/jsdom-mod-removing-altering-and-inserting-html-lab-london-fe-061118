/* Enter the code to remove the main node element under this comment */
document.querySelector('main').remove();
/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.innerHTML=document.getElementsByTagName("h1")[0].setAttribute("id", "victory");"Xavier is the champion";


