const button = document.querySelector("#btn");

button.addEventListener("click", calculateAmount);

function calculateAmount(e){
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === " " || people === " " || people < 1){
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please enter your information!",
  });
    }
    let amountPerPerson = bill/people;
    let tipPerPerson = (bill*tip)/people;
    let totalSum = amountPerPerson + tipPerPerson;
    
    document.querySelector("#dividedBill").textContent = amountPerPerson.toFixed(2);

    document.querySelector("#dividedTip").textContent = tipPerPerson.toFixed(2);

    document.querySelector("#billAndTip").textContent = totalSum.toFixed(2);
}

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e){
    tip.style.display = "block";
    e.preventDefault();
}
