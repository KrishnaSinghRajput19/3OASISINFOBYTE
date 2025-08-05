function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  const resultDiv = document.getElementById("result");

  if (input === "" || isNaN(input)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let temp = parseFloat(input);
  let celsius;

  // Convert input to Celsius
  if (inputUnit === "celsius") {
    celsius = temp;
  } else if (inputUnit === "fahrenheit") {
    celsius = (temp - 32) * (5 / 9);
  } else if (inputUnit === "kelvin") {
    celsius = temp - 273.15;
  }

  // Convert from Celsius to output unit
  let converted;
  if (outputUnit === "celsius") {
    converted = celsius;
  } else if (outputUnit === "fahrenheit") {
    converted = (celsius * 9/5) + 32;
  } else if (outputUnit === "kelvin") {
    converted = celsius + 273.15;
  }

  resultDiv.textContent = `Converted: ${converted.toFixed(2)} ${getSymbol(outputUnit)}`;
}

function getSymbol(unit) {
  switch(unit) {
    case "celsius": return "°C";
    case "fahrenheit": return "°F";
    case "kelvin": return "K";
    default: return "";
  }
}
