let btnNumbers = document.getElementsByClassName("btn-num");

console.log(document.getElementsByClassName("btn").length); // result=

for (let i = 0; i<btnNumbers.length; i++) {
    btnNumbers[i].addEventListener("click", () => {
        console.log(this.dataset.calc);
    });
}

document.getElementById("light-dark").addEventListener("click", () => {
    console.log("toogle");
    document.body.classList.toggle("body-dark");
});


//let btnAction = document.getElementsByClassName("btn-action");
//let btnEqual = document.getElementsByClassName("btn-equal");

//btnAction.addEventListener("click", displayDate);
//btnEqual.addEventListener("click", displayDate);

//parseInt(this.dataset.calc);