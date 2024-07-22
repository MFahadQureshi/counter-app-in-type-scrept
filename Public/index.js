"use strict";
const add_btn = document.getElementById('add');
const sub_btn = document.getElementById('sub');
const num = document.getElementById('count');
let counterNumber = 0;
sub_btn.disabled = true;
function handlelAddSub(clickOn) {
    if (clickOn == "plus")
        counterNumber++;
    if (clickOn == "minus")
        counterNumber--;
    if (counterNumber === 0) {
        sub_btn.disabled = true;
    }
    else {
        sub_btn.disabled = false;
    }
    num.innerText = counterNumber.toString();
}
add_btn.addEventListener('click', () => handlelAddSub('plus'));
sub_btn.addEventListener('click', () => handlelAddSub('minus'));
