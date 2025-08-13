function submitForm() {
  var name = document.getElementById('Name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  if (!name || !email || !phone) {
    alert('Please fill in all the details.');
    return;
  }
  if (!email.endsWith('@gmail.com')) {
    alert('Please enter a valid Gmail address ending with @gmail.com');
    return;
  }         
  var phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }
  document.getElementById('confirmation').innerText =
    'Thank you, ' + name + '! You have registered successfully.';
  console.log('Registration details:', { Name: name, Email: email, Phone: phone });
}