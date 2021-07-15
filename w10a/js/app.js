//querySelector

var h1Tag = document.querySelector("h1");
console.log(h1Tag);
h1Tag.innerHTML= "Better Title";


//querySelectAll

var links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
    links[i].innerText="Link # "+[i+1];    
}


//getElementById

document.getElementById('superLink').style.color='black';

//getElementByClassName

var allClass = document.getElementsByClassName('pclass');
for (let i = 0; i < allClass.length; i++) {
    allClass[i].innerText= ('No more Lorem!')    
}

//getElementsByTagName

var manyDiv = document.getElementsByTagName('div');
for (let i = 0; i < manyDiv.length; i++) {
    manyDiv[i].style.backgroundColor="green";    
}

//createElement

var newElement = document.createElement('a');
var parent = document.getElementById('navBar');
parent.append(newElement);
newElement.innerHTML="<a href=''>Another Link</a>";


//ClassList add(), remove(), toggle();

var classes= document.getElementsByClassName('pclass');
for (let i = 0; i < classes.length; i++) {
    classes[i].classList.remove('worstclass');
    classes[i].classList.add('secretclass');
}


function toggleSection(){
    var secretbtn = document.getElementsByClassName('pclass');
    secretbtn.classList.toggleSection();
}