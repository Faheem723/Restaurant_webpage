const form = document.getElementById('reservation-form');
const responseDiv = document.getElementById('response');


form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Getting the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const partySize = document.getElementById('party-size').value;
  const comments = document.getElementById('comments').value;

  
  const xhr = new XMLHttpRequest();

 
  xhr.open('POST', 'reservation.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

 
  xhr.onload = function() {
    if (xhr.status === 200) {
    
      form.reset();

      
      responseDiv.innerHTML = 'Reservation request submitted successfully.';
      responseDiv.style.color = 'green';
    } else {
      
      responseDiv.innerHTML = 'Error submitting reservation request. Please try again.';
      responseDiv.style.color = 'red';
    }
  };

  
  xhr.onerror = function() {
    
    responseDiv.innerHTML = 'Error submitting reservation request. Please try again.';
    responseDiv.style.color = 'red';
  };


  const data = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&party-size=${encodeURIComponent(partySize)}&comments=${encodeURIComponent(comments)}`;
