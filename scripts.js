// Select the form and result elements from the DOM
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Add an event listener to handle the form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();  // Prevent page reload

// Get form data for dividend and divider
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  

//Scenario:  Validation when values are missing ( // Check if both values are provided)
if (!dividend || !divider) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  return; // Stop if inputs are missing
    };

// Convert inputs values to numbers 
const dividendNumber = Number(dividend);
const dividerNumber = Number(divider);

//Scenario: An invalid division should log an error in the console ( // Handle division by zero)
if (dividerNumber === 0) {
  result.innerText = "Division not performed. Invalid number provided. Try again.";
  console.error("Error: Division by zero is not allowed.");
  return;  // Stop if divider is zero
  }

//Scenario: Providing anything that is not a number should crash the program  (// Check if inputs are valid numbers)
if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
  document.body.innerHTML =  "<h4>Something critical went wrong. Please reload the page</h4>";
  console.error("Something critical went wrong");
  return;  // Stop if inputs are non-numeric
}

// Perform the division and display the result (rounded down to the nearest integer)
result.innerText = Math.floor(dividendNumber / dividerNumber);

});