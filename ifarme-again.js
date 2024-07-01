// Set up the iframe
const container = document.getElementById("payment-container");
if (container) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://mohamedadel397.github.io/iframe_integration/ifarme-again.html"; // The URL of the iframe content
    iframe.width = container.getAttribute('data-iframe-width') || "100%";
    iframe.height = container.getAttribute('data-iframe-height') || "400px";
    iframe.style.border = "none";
    container.appendChild(iframe);
}
function paymentIframeInit() {
    // Set up the form interactions
    const cardNumberInput = document.getElementById('cardNumber');
    const cardNumberBox = document.querySelector('.card-number-box');
    const cardLogo = document.getElementById('card-logo');

    // Populate month and year dropdowns
    const expMonthSelect = document.getElementById('expMonth');
    const expYearSelect = document.getElementById('expYear');
    for (let i = 1; i <= 12; i++) {
        let month = i < 10 ? '0' + i : i;
        expMonthSelect.innerHTML += `<option value="${month}">${month}</option>`;
    }

    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
        let year = currentYear + i;
        expYearSelect.innerHTML += `<option value="${year}">${year}</option>`;
    }

    // Update card number on input
    cardNumberInput.addEventListener('input', function () {
        let cardNumber = cardNumberInput.value.replace(/\D/g, '').substring(0, 16);
        cardNumberBox.textContent = cardNumber || '################';

        // Detect card type
        if (cardNumber.startsWith('4')) {
            cardLogo.src = 'https://mohamedadel397.github.io/iframe_integration/visa.png';
            cardLogo.style.visibility = 'visible';
        } else if (cardNumber.startsWith('5')) {
            cardLogo.src = 'https://mohamedadel397.github.io/iframe_integration/mastercard.png';
            cardLogo.style.visibility = 'visible';
        } else {
            cardLogo.style.visibility = 'hidden';
        }
    });

    // Update card holder name on input
    const cardHolderInput = document.getElementById('cardHolder');
    const cardHolderNameBox = document.querySelector('.card-holder-name');
    cardHolderInput.addEventListener('input', function () {
        cardHolderNameBox.textContent = cardHolderInput.value || 'full name';
    });

    // Update expiration month on change
    const expMonthBox = document.querySelector('.exp-month');
    expMonthSelect.addEventListener('change', function () {
        expMonthBox.textContent = expMonthSelect.value;
    });

    // Update expiration year on change
    const expYearBox = document.querySelector('.exp-year');
    expYearSelect.addEventListener('change', function () {
        expYearBox.textContent = expYearSelect.value.substring(2, 4);
    });

    // Update CVV on input
    const cvvInput = document.getElementById('cvv');
    const cvvBox = document.querySelector('.cvv-box');
    cvvInput.addEventListener('input', function () {
        cvvBox.textContent = cvvInput.value.replace(/\D/g, '').substring(0, 4);
    });

    // Form submit handler
    document.getElementById('card-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted');
        // Add further form submission handling here
    });
}
