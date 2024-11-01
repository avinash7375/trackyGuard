document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    let valid = true;

    // Reset error messages
    document.getElementById('cardNumberError').textContent = '';
    document.getElementById('expiryDateError').textContent = '';
    document.getElementById('cvvError').textContent = '';

    // Validate card number (simple validation for 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementById('cardNumberError').textContent = 'Please enter a valid 16-digit card number.';
        valid = false;
    }

    // Validate expiry date (MM/YY format)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        document.getElementById('expiryDateError').textContent = 'Please enter a valid expiry date in MM/YY format.';
        valid = false;
    }

    // Validate CVV (3 digits)
    if (!/^\d{3}$/.test(cvv)) {
        document.getElementById('cvvError').textContent = 'Please enter a valid 3-digit CVV.';
        valid = false;
    }

    if (valid) {
        alert('Payment processed successfully!');
        // Here you could add code to process the payment through an API
    }
});
