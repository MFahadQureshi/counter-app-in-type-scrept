const add_btn = document.getElementById('add') as HTMLButtonElement
const sub_btn = document.getElementById('sub') as HTMLButtonElement
const num = document.getElementById('count') as HTMLHeadingElement

let counterNumber: number = 0;
sub_btn.disabled = true

function handlelAddSub(clickOn: "plus" | "minus") {
    if (clickOn == "plus") counterNumber++;
    if (clickOn == "minus") counterNumber--;

    if (counterNumber === 0) {
        sub_btn.disabled = true
    }
    else {
        sub_btn.disabled = false
    }
    num.innerText = counterNumber.toString();
}
add_btn.addEventListener('click', () => handlelAddSub('plus'))
sub_btn.addEventListener('click', () => handlelAddSub('minus'))