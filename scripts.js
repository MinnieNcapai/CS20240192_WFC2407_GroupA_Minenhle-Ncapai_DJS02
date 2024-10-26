const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});

//Scenario:  Validation when values are missing
if (!dividend || !divider) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  return;
    };

// Convert inputs to numbers
const dividendNumber = Number(dividend);
const dividerNumber = Number(divider);

//Scenario: An invalid division should log an error in the console 
if (dividerNumber === 0) {
  result.innerText = "Division not performed. Invalid number provided. Try again.";
  console.error("Error: Division by zero is not allowed.");
  return;
  }

//Scenario: Providing anything that is not a number should crash the program 
if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
  document.body.innerHTML =  "<h4>Something critical went wrong. Please reload the page</h4>";
  console.error("Something critical went wrong");
  return;
}