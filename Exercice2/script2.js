        //Retrieve the form and console.log it.
        let form = document.forms[0]

        //Retrieve the inputs by their id and console.log them.
        console.log(form)
        let fname = document.getElementById("fname")
        console.log(fname)
        let lname = document.getElementById("lname")
        console.log(lname)
        let submit = document.getElementById("submit")
        console.log(submit)
       //Retrieve the inputs by their name attribute and console.log them.

        let fnam = form.elements.fname
        console.log(fnam)
        let lnam = form.elements.lname
        console.log(lnam)
        let submi = form.elements.submit
        console.log(submi)

        let input = document.querySelectorAll("input")

        submi.addEventListener("click" , function (e) {
            e.preventDefault()
            submi.style.backgroundColor = "lightgreen"
            //console.log(lname.value)
            liInput()   
        })

       
        function liInput(){
            for(let i = 0; i < (input.length- 1); i++){
                let ul = document.querySelector("ul")
                let value = input[i].value
                let li = document.createElement("li")
                ul.appendChild(li)
                let alleSelect = document.querySelectorAll("li")
                alleSelect[i].innerHTML = value
            }
        }

        
        



// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>
