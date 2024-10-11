document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  
  document.getElementById("message").textContent = `Thank you for signing up, ${fullName}! We've sent a confirmation to ${email}.`;
});
