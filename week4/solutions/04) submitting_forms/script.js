// You can work here or download the template
const form = document.getElementById('contact-form');
const outputParagraph = document.getElementById('output');

// Function to handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form field values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate fields are not empty
  //name === "" ==> true
  // !"" ==>!false == true
  // ![] ==>false
  if (!name || !email || !message) {
    outputParagraph.textContent = 'Please fill in all fields.';
    outputParagraph.classList.remove('bg-green-500');
    outputParagraph.classList.add('bg-red-500');
    return;
  }

  // Create the output text
  const template = `<ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Message: ${message}</li>
                      </ul>`;

  // Output the data to the console
  console.log(template);

  // Display the data in the paragraph
  outputParagraph.innerHTML = template;
  outputParagraph.classList.remove('bg-red-500');
  outputParagraph.classList.add('bg-green-500');

  // Clear the form fields
  form.reset();
});
