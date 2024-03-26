const form = document.querySelector("#newPizza");
const output = document.querySelector("#output");
const outputtext = document.querySelector("#outputtext")
const submitButton = document.querySelector("#buttonSubmit")

function outputMessage(txt) {
    outputtext.textContent = txt;
}

class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
    description() {
        if (this.toppings.length > 0) {
            let topString = "";
            for (let i = 0; i < this.toppings.length; i++) {
                topString += this.toppings[i];
                topString += ", "
            }
            topString = topString.substring(0, topString.length - 2);
            return `${this.size} ${this.crust} Pizza topped with ${topString}`;
        } else {
            return `${this.size} ${this.crust} Pizza`
        }
    }
}

function proccessForm() {
    console.log("hit!");
    let size = form.elements["size"].value;
    let crust = form.elements["crust"].value;
    let crustDisplay = form.elements[crust].labels[0].textContent;
    let toppings = [];
    // console.log(size);
    // console.log(form.elements["crust"].value);
    // console.log(form.elements["toppings[]"]);
    if ((size != "Small") && (size != "Medium") && (size != "Large")) {
        outputMessage("Invalid size!");
        return;
    }

    const totalToppings = 7;
    for (let i = 0; i < totalToppings; i++) {
        let inp = form.elements["toppings[]"][i]
        if (inp.checked) {
            toppings.push(form.elements["toppings[]"][i].labels[0].textContent);
        }
    }

    let myPizza = new Pizza(size, crustDisplay, toppings);

    const stud = document.querySelector("#student");
    stud.textContent = "1233586 Jennifer Towns"

    outputMessage(myPizza.description());
}

submitButton.addEventListener("click", proccessForm);