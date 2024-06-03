let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let copyColor = document.querySelector(".copyCode")
let rbga1 = "#004773";
let rbga2 = "#54d542"


let hexaValue = () =>{
    let charCombination = "0123456789abcdef";
    let randomWords = "#";
    for (let num = 0; num < 6; num++) {
        let randomIndex = Math.floor(Math.random() * charCombination.length);
        randomWords += charCombination[randomIndex];
    }
    return randomWords
}

let handleBtn1 = () => {
    // btn1.innerText = rbga1
    rbga1 = hexaValue() 
    btn1.innerText = rbga1
    console.log(rbga1)
    document.body.style.backgroundImage =  `linear-gradient(to right, ${rbga1}, ${rbga2})`
    copyColor.innerHTML = `background-image: linear-gradient(to right, ${rbga1}, ${rbga2})`

}

let handleBtn2 = () => {
    // btn2.innerText = rbga2
    rbga2 = hexaValue() 
    btn2.innerText = rbga2
    console.log(rbga2)
    document.body.style.backgroundImage =  `linear-gradient(to right, ${rbga1}, ${rbga2})`
    copyColor.innerHTML = `background-image: linear-gradient(to right, ${rbga1}, ${rbga2})`
}

copyColor.addEventListener("click", ()=>{
    navigator.clipboard.writeText(copyColor.innerText)
})



btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
