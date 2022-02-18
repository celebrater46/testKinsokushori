"use strict";

const box = document.getElementById("box");
const children = box.children;
const fontSize = 20;
const maxChars = Math.floor(children[1].clientWidth / fontSize);

const separateLine = () => {
    console.log(children);
    // let i = 1;
    // children.map((child) => {
    //     console.log(child.innerHTML.substr(maxChars, 1));
    // });
    for(let i = 1; i < children.length; i++){
        console.log(children[i].innerHTML.substr(maxChars - 1, 1));
    }
}