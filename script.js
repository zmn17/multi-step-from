const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');

const nextOne = document.getElementById('next-1');
const prevOne = document.getElementById('prev-1');
const nextTwo = document.getElementById('next-2');
const nextThree = document.getElementById('next-3');
const prevTwo = document.getElementById('prev-2');
const confirm = document.getElementById('confirm');
const prevThree = document.getElementById('prev-3');

const step1 = document.querySelector('.one');
const step2 = document.querySelector('.two');
const step3 = document.querySelector('.three');
const step4 = document.querySelector('.four');

const toggle = document.getElementById('check');

const checkbox_input = document.querySelectorAll('.checkbox');
const adsOnAmount = document.querySelectorAll('.ads-on-amount');

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

nextTwo.addEventListener('click', () => {
  form2.style.left = "-650px";
  form3.style.left = "350px";
  step3.style.backgroundColor = "hsl(229, 24%, 87%)";
  step3.style.color = "#000"
  step2.style.backgroundColor = "";
  step2.style.color = "#fff";
});

prevTwo.addEventListener('click', () => {
  form3.style.left = "-900px";
  form2.style.left = "350px";
  step3.style.backgroundColor = "";
  step3.style.color = "#fff"
  step2.style.backgroundColor = "hsl(229, 24%, 87%)";
  step2.style.color = "#000"
});


// if the toggle button is checked then it is 'yearly' if not 'monthly' 
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

        adsOnAmount[0].textContent = "$10/yr";
        adsOnAmount[1].textContent = "$20/yr";
        adsOnAmount[2].textContent = "$20/yr";

    } else {
        monthly.style.color = "hsl(231, 11%, 63%)";
        yearly.style.color = "#000";
        billingAmount[0].textContent = "$9/mo"
        billingAmount[1].textContent = "$12/mo"
        billingAmount[2].textContent = "$15/mo"

        for(let i = 0; i < free.length; i++){
            free[i].textContent = "";
        }

        adsOnAmount[0].textContent = "$1/mo"
        adsOnAmount[1].textContent = "$2/mo"
        adsOnAmount[2].textContent = "$2/mo"
    }
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

nextThree.addEventListener('click', () => {
    form3.style.left = '-500px';
    form4.style.left = '350px';
    step4.style.backgroundColor = "hsl(229, 24%, 87%)";
    step4.style.color = "#000"
    step3.style.backgroundColor = "";
    step3.style.color = "#fff";
})

prevThree.addEventListener("click", () => {
    form4.style.left = '900px';
    form3.style.left = '350px';
    
    step4.style.backgroundColor = "";
    step4.style.color = "#fff"
    step3.style.backgroundColor = "hsl(229, 24%, 87%)";
    step3.style.color = "#000";
});


// Define your pricing amounts for each option
const pricing = {
    arcade: {
      monthly: 9,
      yearly: 90,
    },
    advanced: {
      monthly: 12,
      yearly: 120,
    },
    pro: {
      monthly: 15,
      yearly: 150,
    },
  };

  
  let finalTotal = 0;
  // Define your HTML elements
  const options = [
    { element: document.getElementById('select-arcade'), name: 'Arcade' },
    { element: document.getElementById('select-advanced'), name: 'Advanced' },
    { element: document.getElementById('select-pro'), name: 'Pro' },
  ];

  const subtotal = document.getElementById('subtotal');
  const optionsHeading = document.getElementById('options-heading');
  const period = document.getElementById('yearly-monthly');
  
 // Add click event listeners to the options and toggle switch
options.forEach(option => {
  option.element.addEventListener('click', () => {
    updatePricing(); // Call the updatePricing function on click
    updateOptionSelection(option.element); // Update the selection status
  });
});

toggle.addEventListener('change', updatePricing);

// Function to calculate the subtotal based on the selected options and toggle
function calculateSubtotal() {
  let subtotal = 0;

  options.forEach(option => {
    if (option.element.checked) {
      subtotal += toggle.checked ? pricing[option.name.toLowerCase()].yearly : pricing[option.name.toLowerCase()].monthly;
    }
  });
  return subtotal;
}

// Function to update pricing based on user selections
function updatePricing() {
  const selectedOptions = options.filter(option => option.element.checked);

  optionsHeading.innerHTML = selectedOptions.map(option => option.name).join(', ');
  const isYearly = toggle.checked;
  period.textContent = isYearly ? 'Yearly' : 'Monthly';

  const total = calculateSubtotal();
  subtotal.textContent = `$${total}${isYearly ? '/yr' : '/mo'}`;
}

// Function to update option selection status
function updateOptionSelection(selectedOption) {
  options.forEach(option => {
    if (option.element !== selectedOption) {
      option.element.checked = false; // Uncheck other options
    }
  });
}

// Define pricing for the 'extra services'
const extra_prices = {
  online_service: {
    yearly: 10,
    monthly: 1,
  },
  larger_storage: {
    yearly: 20,
    monthly: 2,
  },
  customizable_profile: {
    yearly: 20,
    monthly: 2,
  }
};

// Accessing the 'extra services' input 'checkbox'
const extra_options = [
  { element: document.getElementById('o-services'), name: 'Online_Service' },
  { element: document.getElementById('l-storage'), name: 'Larger_Storage' },
  { element: document.getElementById('c-profile'), name: 'Customizable_Profile' },
];

// Adding event listeners for the 'extra services'
extra_options.forEach(option => {
  option.element.addEventListener('change', updateExtraPricing);
});

toggle.addEventListener('change', updateExtraPricing);

// Function to calculate the total for a specific extra service
function calculateExtraTotal(extraServiceName, isYearly) {
  const priceData = extra_prices[extraServiceName.toLowerCase()];
  return isYearly ? priceData.yearly : priceData.monthly;
}

function updateExtraPricing() {
  const isYearly = toggle.checked;

  // Total '(per month)' or '(per year)'
  const yr_mo = document.getElementById('total-title');

  // Clear the existing extra service sections
  const adsOnContainer = document.querySelector('.ads-on-container');
  adsOnContainer.innerHTML = '';

  // Calculate and display extra service sections
  extra_options.forEach(option => {
    if (option.element.checked) {
      const adsOnSection = document.createElement('div');
      adsOnSection.className = 'ads-on-section';
      const adsOnTitle = document.createElement('p');
      const adsOnPrice = document.createElement('span');

      const extraTotal = calculateExtraTotal(option.name, isYearly);
      adsOnTitle.textContent = option.name.replace(/_/g, ' ');
      adsOnPrice.textContent = `+$${extraTotal}${isYearly ? '/yr' : '/mo'}`;
      finalTotal += extraTotal;

      adsOnSection.appendChild(adsOnTitle);
      adsOnSection.appendChild(adsOnPrice);
      adsOnContainer.appendChild(adsOnSection);
    }
  });

  isYearly ? yr_mo.textContent = ' ' + '(per year)' : yr_mo.textContent = ' ' + '(per month)';
}

updateExtraPricing();

// Function to calculate the final total
function calculateFinalTotal() {
  finalTotal = 0; // Reset finalTotal to 0

  // Calculate subscription subtotal
  options.forEach(option => {
    if (option.element.checked) {
      finalTotal += toggle.checked ? pricing[option.name.toLowerCase()].yearly : pricing[option.name.toLowerCase()].monthly;
    }
  });

  // Calculate extra services total
  extra_options.forEach(option => {
    if (option.element.checked) {
      finalTotal += calculateExtraTotal(option.name, toggle.checked);
    }
  });
}

// Function to update the total amount display
function updateTotalAmount() {
  const isYearly = toggle.checked;
  const totalAmount = document.getElementById('total-amount');

  calculateFinalTotal(); // Calculate the final total

  totalAmount.textContent = `$${finalTotal}${isYearly ? '/yr' : '/mo'}`;
}

// Call updateTotalAmount initially to set the initial state based on default selections
updateTotalAmount();

// Adding event listeners for the 'extra services' and subscription options
options.forEach(option => {
  option.element.addEventListener('change', updateTotalAmount);
});

extra_options.forEach(option => {
  option.element.addEventListener('change', updateTotalAmount);
});

toggle.addEventListener('change', updateTotalAmount);


const changeBtn = document.getElementById('change-btn');
changeBtn.addEventListener('click', () => {
  form4.style.left = '900px';
  form2.style.left = '350px';
  step4.style.backgroundColor = "";
  step4.style.color = "#fff";
  step2.style.backgroundColor = 'hsl(229, 24%, 87%)';
  step2.style.color = "#000";
});

const confirmBtn = document.getElementById('confirm');
const last_step = document.querySelector('.last-step');
confirmBtn.addEventListener('click', () => {
  form4.style.left = '900px';
  last_step.style.left =  '40%';

});


// add a p for indicating an error message when the input is left blank
// same with the options -> red border
// 