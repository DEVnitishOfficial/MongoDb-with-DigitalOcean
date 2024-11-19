function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const arrivalDate = document.getElementById('arrivalDate').value;
    const departureDate = document.getElementById('departureDate').value;
    const country = document.getElementById('country').value;
    const paymentModes = Array.from(document.querySelectorAll('input[name="paymentMode"]:checked')).map(
      (mode) => mode.value
    );
    const errorMessage = document.getElementById('error-message');
  
    // Check if fields are empty
    if (!firstName || !lastName || !email || !arrivalDate || !departureDate || !country || paymentModes.length === 0) {
      errorMessage.textContent = "Please fill in all fields.";
      return false;
    }
    
    return true;
  }
  
  
  function resetForm() {
    document.getElementById("bookingForm").reset();
    document.getElementById("error-message").textContent = ""; // Clear error message
    localStorage.removeItem("bookingFormData"); // Clear data from localStorage
  }
  