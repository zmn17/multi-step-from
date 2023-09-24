
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');

const nextOne = document.getElementById('next-1');
const prevOne = document.getElementById('prev-1');
const nextTwo = document.getElementById('next-2');

const step1 = document.querySelector('.one');
const step2 = document.querySelector('.two');
const step3 = document.querySelector('.three');
const step4 = document.querySelector('.four');

const toggle = document.getElementById('check');


nextOne.addEventListener('click', () => {
    form1.style.left = "-500px";
    form2.style.left = "350px";
    step2.style.backgroundColor = "hsl(229, 24%, 87%)";
    step2.style.color = "#000";
});

prevOne.addEventListener('click', () => {
    form2.style.left = "900px";
    form1.style.left = "350px";
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

        for(i = 0; i < free.length; i++){
            free[i].textContent = "2 months free";
        }

    } else {
        monthly.style.color = "hsl(231, 11%, 63%)";
        yearly.style.color = "#000";
        billingAmount[0].textContent = "$9/mo";
        billingAmount[1].textContent = "$12/mo";
        billingAmount[2].textContent = "$15/mo";

        for(i = 0; i < free.length; i++){
            free[i].textContent = "";
        }
    }
});
