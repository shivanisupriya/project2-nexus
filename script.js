// const scriptURL = 'https://script.google.com/macros/s/AKfycbzo6XFi_b101q0l-1rRSbBdtsRyFCLOif9qguCMs8DX8EWLMK3aHTWZlsFPaNeXSexM/exec';
// const form = document.forms['submit-to-google-sheet'];
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => {
//       console.log('Success!', response);
//       // Reset the form after successful submission (if needed)
//       form.reset();
//       // Show confirmation message (if needed)
//       const confirm = document.getElementById('confirmationMessage')
//       confirm.style.display = 'block';
//       confirm.style.textAlign = 'center'
//       setTimeout(function() {
//         document.getElementById('confirmationMessage').style.display = 'none';
//       }, 3000);
//     })
//     .catch(error => console.error('Error!', error.message));
// });