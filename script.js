/**
 * Function to calculate the value for 'Interest'
 * from the input values given by the user.
 */
function compute() {
  var principal = document.getElementById("principal").value;

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  /**
   * If loop to check the entered number is valid
   * No negative value or zero is accepted as a input
   */
  if (principal <= 0) {
    alert("Enter a positive number"); // To Display Alert
    principal.focus(); // Put focus on input value
    return;
  }

  // To display the final output.
  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <span class="highlight">$${principal},</span>
  <br>at an interest rate of <span class="highlight">${rate}%;</span>
  <br>You will receive an amount of <span class="highlight">$${interest},</span>
  <br>in the year <span class="highlight">${year}.</span><br>`;
}

/**
 * To change the value of rate
 *  using slider range
 */
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = `${rateval}%`;
}
