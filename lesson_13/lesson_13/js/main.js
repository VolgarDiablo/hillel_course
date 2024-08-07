document.addEventListener("DOMContentLoaded", () => {
  const formData = document.getElementById("form");
  const name = document.getElementById("name");
  const message = document.getElementById("smthText");
  const phone = document.getElementById("phoneInput");
  const emailInput = document.getElementById("emailInput");

  formData.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    valid = validateName(name) && valid;
    valid = validateMessage(message) && valid;
    valid = validatePhone(phone) && valid;
    valid = validateEmail(emailInput) && valid;

    if (valid) {
      logFormData(name, message, phone, emailInput);
    }
  });

  function validateName(name) {
    const namePattern = /^[a-zA-Zа-яА-ЯіІїЇєЄ']+$/;
    if (name.value.trim() === "" || !namePattern.test(name.value.trim())) {
      document.getElementById("name-error").style.display = "block";
      return false;
    } else {
      document.getElementById("name-error").style.display = "none";
      return true;
    }
  }

  function validateMessage(message) {
    if (message.value.trim().length < 5) {
      document.getElementById("message-error").style.display = "block";
      return false;
    } else {
      document.getElementById("message-error").style.display = "none";
      return true;
    }
  }

  function validatePhone(phone) {
    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone.value.trim())) {
      document.getElementById("phone-error").style.display = "block";
      return false;
    } else {
      document.getElementById("phone-error").style.display = "none";
      return true;
    }
  }

  function validateEmail(emailInput) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      document.getElementById("email-error").style.display = "block";
      return false;
    } else {
      document.getElementById("email-error").style.display = "none";
      return true;
    }
  }

  function logFormData(name, message, phone, emailInput) {
    console.log("Name:", name.value.trim());
    console.log("Message:", message.value.trim());
    console.log("Phone number:", phone.value.trim());
    console.log("Email:", emailInput.value.trim());
  }
});
