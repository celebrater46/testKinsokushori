"use strict";

const box = document.getElementById("box");
const children = box.children;
const fontSize = 20;
const maxChars = Math.floor(children[1].clientWidth / fontSize);

const separateLine = (line) => {
    const char = line.substr(maxChars - 1, 1);
    const next = line.substr(maxChars, 1);
    if(char.search(/[「『（《〈【〚［〔｛]/) > -1){
        return [
            line.substr(0, maxChars - 1),
            line.substr(maxChars - 1)
        ];
    } else if(char === "―") {
        if(line.substr(maxChars, 1) === "―"){
            return [
                line.substr(0, maxChars - 1),
                line.substr(maxChars - 1)
            ];
        }
    } else if(char === "…") {
        if(line.substr(maxChars, 1) === "…"){
            return [
                line.substr(0, maxChars - 1),
                line.substr(maxChars - 1)
            ];
        } else if(line.substr(maxChars - 1, 1) === "…"){
            return [
                line.substr(0, maxChars - 2),
                line.substr(maxChars - 2)
            ];
        }
    } else if(next.search(/[、。」』）》〉】〛］〕｝]/) > -1){
        return [
            line.substr(0, maxChars - 1),
            line.substr(maxChars - 1)
        ];
    }
    return [
        line.substr(0, maxChars),
        line.substr(maxChars)
    ];
}

const test = () => {
    for(let i = 1; i < children.length; i++){
        let line = children[i].innerHTML;
        const array = separateLine(line);
        children[i].innerHTML = array[0];
        console.log(i + ": array[1] == " + array[1]);
    }
}

// if(char === "「" || char === "『"
//     || char === "（" || char === "《"
//     || char === "〈" || char === "【"
//     || char === "〚" || char === "［"
//     || char === "〔" || char === "｛") {}

// 、。」』）》〉】〛］〕｝

// const testSearch = "。";
// console.log(testSearch.search(/[「『（《〈【〚［〔｛]/));
// console.log(testSearch.search(/[、。」』）》〉】〛］〕｝]/));