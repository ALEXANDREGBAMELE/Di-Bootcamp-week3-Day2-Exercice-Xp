// //Sphère ou boule	​L'aire d'une sphère AT=4πr2	Le ​volume d'une boule V=4/3πr(exp3)
// let form = document.forms[0];
// let radius = form.elements.radius
// let volume = form.elements.volume
// let submit = document.querySelector("#submit")

// let r = 0;
// const π = 3.14
// let V = 0;
// let input = document.querySelectorAll("input")

// submit.addEventListener("click" ,function(e) {
//     e.preventDefault();
//     let r = parseInt(radius.value);
//     console.log( r)
//     V=4/(3*π*r*r*r)
//     input[1].innerHTML = V
// })

//function calculVolume(){return V=4/(3*π*r*r*r)}

let form    = document.forms[0];
let radius  = form.elements.radius;
let volume  = form.elements.volume;
let button  = document.querySelector("#submit");
//listen the event click on the button
button.addEventListener("click",function(event){
    //stop the form redirection
    event.preventDefault();
    //regex to check if the thing put in the input is a number
    const nRegex = new RegExp(/^\d+\.?\d*$/);
    let   result ;
    //check if the radius is not empty and it is a number
    if(nRegex.test(radius.value) && !!radius.value) {
        //calculate the volume
        result = (Math.pow(radius.value,3)*(4 * Math.PI )) / 3 ;
        // affect the value of the volume calculate to the input volume
        volume.value = result;
    }else{
        alert("kindly put numbers for the test");
    }
});
