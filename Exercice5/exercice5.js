let h1 = document.querySelector("h1");
let colors = ["red","blue","gray","purple","pink","dodgerblue","forestgreen","aqua"];
h1.addEventListener("mouseover",changeColor);
h1.addEventListener("click",changeFontSize);
h1.addEventListener("mouseleave",resetAllModification);
h1.addEventListener("dblclick",changePosition);
function randomize(size = colors.length){
    return Number.parseInt(Math.random() * size);
}
function changeFontSize(){
    return h1.style.fontSize = `${randomize(60)}px`;
}
function changeColor(){
    return h1.style.color = colors[randomize()];
}
function changePosition(position){
    if(position)
        return h1.style.backgroundPositionX = "left";
    return h1.style.backgroundPositionY = "right";
}
function resetAllModification(){
    return h1.style.color = "black";
}

// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.
