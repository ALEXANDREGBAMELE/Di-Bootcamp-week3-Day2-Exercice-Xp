

// Add this sentence to your HTML file then follow the steps :


    let allBoldItems = document.querySelectorAll("strong")
    
    allBoldItems.forEach(item => {item.style.color = "blue";})
    //allBoldItems.style.backgroundColor = "lightgreen"
    console.log(allBoldItems)

getBold_items()
return_normal()

function getBold_items() {
    
    highlight()
}

function highlight() {
    return allBoldItems.style.color = "blue";
}

function return_normal() {
    return allBoldItems.style.color = "green";
}
