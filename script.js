// Defines variables
const pi = 3.14159
let diameter = 0
let diameter2 = 0

// Gets user input for diameter for both input text boxes
document.getElementById('button').addEventListener('click', area)
document.getElementById('button2').addEventListener('click', circumference)

// Stores user input in the variable diameter
function area () {
  diameter = document.getElementById('input').value

  // Calculates the area given the diameter variable and sends it to result span output to be printed
  document.getElementById('result').innerHTML = (Math.round(pi * diameter / 2 * diameter / 2 * 100) / 100).toFixed(2)
}

// Stores use input in the variable diameter2
function circumference () {
  diameter2 = document.getElementById('input2').value

  // Calculates the circumference given the diameter2 variable and sends it to result2 span output to be printed
  document.getElementById('result2').innerHTML = (Math.round(2 * pi * diameter2 / 2 * 100) / 100).toFixed(2)
}
