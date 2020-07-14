const btnNumbers = document.getElementsByClassName("btn-num");
const btnAllBtns = document.getElementsByClassName("btn");

console.log(document.getElementsByClassName("btn-num").length); // result=

for (let i = 0; i<btnNumbers.length; i++) {
    btnNumbers[i].addEventListener("click", () => {
        console.log(this.dataset.calc);
    });
}

document.getElementById("light-dark").addEventListener("click", () => {
    document.body.classList.toggle("body-dark");
    
    for (let j = 0; j < btnAllBtns.length; j++) {
        btnAllBtns[j].classList.toggle("btn-dark")
    }

});


//let btnAction = document.getElementsByClassName("btn-action");
//let btnEqual = document.getElementsByClassName("btn-equal");

//btnAction.addEventListener("click", displayDate);
//btnEqual.addEventListener("click", displayDate);

//parseInt(this.dataset.calc);