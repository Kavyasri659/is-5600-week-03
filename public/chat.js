new window.EventSource("/sse").onmessage = function(event) {
    // Append the incoming message to the messages container
    window.messages.innerHTML += `<p>${event.data}</p>`;
  };
  
  // Handle form submission
  window.form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Send the message to the server using fetch
    window.fetch(`/chat?message=${window.input.value}`);
  
    // Clear the input field
    window.input.value = '';
  });
  