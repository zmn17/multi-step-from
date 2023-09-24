
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const nextOne = document.getElementById('next-1');
const prevOne = document.getElementById('prev-1');
const nextTwo = document.getElementById('next-2');
const nextThree = document.getElementById('next-3');
const prevTwo = document.getElementById('prev-2');

const step1 = document.querySelector('.one');
const step2 = document.querySelector('.two');
const step3 = document.querySelector('.three');
const step4 = document.querySelector('.four');

const toggle = document.getElementById('check');

const checkbox_input = document.querySelectorAll('.checkbox');

step1.style.backgroundColor = "hsl(229, 24%, 87%)";
step1.style.color = "#000";

nextOne.addEventListener('click', () => {
    form1.style.left = "-500px";
    form2.style.left = "350px";

    step1.style.backgroundColor = "";
    step1.style.color = "#fff";

    step2.style.backgroundColor = "hsl(229, 24%, 87%)";
    step2.style.color = "#000";
});

prevOne.addEventListener('click', () => {
    form2.style.left = "900px";
    form1.style.left = "350px";

    step1.style.backgroundColor = "hsl(229, 24%, 87%)";
    step1.style.color = "#000";

    step2.style.backgroundColor = "";
    step2.style.color = "#fff";
});

toggle.addEventListener('change', () => {
    const yearly = document.getElementById('yearly');
    const monthly = document.getElementById('monthly');
    const billingAmount = document.querySelectorAll('.billing');
    const free = document.querySelectorAll('.free');

    if(toggle.checked){
        yearly.style.color = "hsl(231, 11%, 63%)";
        monthly.style.color = "#000";
        billingAmount[0].textContent = "$90/yr";
        billingAmount[1].textContent = "$120/yr";
        billingAmount[2].textContent = "$150/yr";

        for(let i = 0; i < free.length; i++){
            free[i].textContent = "2 months free";
        }

    } else {
        monthly.style.color = "hsl(231, 11%, 63%)";
        yearly.style.color = "#000";
        billingAmount[0].textContent = "$9/mo";
        billingAmount[1].textContent = "$12/mo";
        billingAmount[2].textContent = "$15/mo";

        for(let i = 0; i < free.length; i++){
            free[i].textContent = "";
        }
    }
});

nextTwo.addEventListener('click', () => {
    form2.style.left = "-650px";
    form3.style.left = "350px";
    step3.style.backgroundColor = "hsl(229, 24%, 87%)";
    step3.style.color = "#000"
    step2.style.backgroundColor = "";
});

prevTwo.addEventListener('click', () => {
    form3.style.left = "-900px";
    form2.style.left = "350px";
    step3.style.backgroundColor = "";
    step3.style.color = "#fff"
    step2.style.backgroundColor = "hsl(229, 24%, 87%)";
    step2.style.color = "#000"
});

checkbox_input.forEach((checkbox, i) => {
    checkbox.addEventListener('change', () => {
        const checkboxes = document.querySelectorAll('.checkboxes');
        if (checkbox.checked) {
            checkboxes[i].style.backgroundColor = "hsl(231, 100%, 99%)";
            checkboxes[i].style.border = " 1px solid hsl(243, 100%, 62%)";
        } else {
            checkboxes[i].style.backgroundColor = "";
            checkboxes[i].style.border = "2px solid hsl(217, 100%, 97%)";
        }
    });
});