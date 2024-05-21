document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', (event) => {
      const displayInput = document.querySelector('.display-input');
      
      // Add class to increase font size and add margin
      displayInput.classList.add('form-input-entered');
      
      // Your existing logic for updating the display goes here
      
      setTimeout(() => {
        // Remove class after a delay to revert the style
        displayInput.classList.remove('form-input-entered');
      }, 300);
    });
  });
  