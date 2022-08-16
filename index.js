// sets the input value to the value stored in the key "Name"
document.querySelector(".challenge").value = localStorage.getItem("Name");

// changes the value of the key "Name" to the current input if the button is pressed
function newValue() {
  var challenge = document.querySelector(".challenge").value;
  localStorage.setItem("Name", challenge);
}

// adds the class ".pressed" to the buttons if they where saved with the class
var days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

for (var i = 0; i < days.length; i++) {
  var day = localStorage.getItem(days[i]);
  if (day === ".pressed1") {
    var pressedButton = document.querySelector("." + days[i]);
    pressedButton.classList.add("pressed1");
  } else if (day === ".pressed2") {
    var pressedButton = document.querySelector("." + days[i]);
    pressedButton.classList.add("pressed2");
  }
}

// ckecks if a button is pressed and toggles the class .pressed
for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    var pressedButton = document.querySelector("." + this.classList[0]);

    if (pressedButton.classList.contains("pressed1")) {
      pressedButton.classList.toggle("pressed2");
      pressedButton.classList.toggle("pressed1");
    } else if (pressedButton.classList.contains("pressed2")) {
      pressedButton.classList.toggle("pressed2");
    } else {
      pressedButton.classList.toggle("pressed1");
    }

    // adds/removes the .pressed class from the buttons
    if (localStorage.getItem(pressedButton.classList[0]) === ".pressed1") {
      localStorage.removeItem(pressedButton.classList[0]);
      localStorage.setItem(pressedButton.classList[0], ".pressed2");
    } else if (localStorage.getItem(pressedButton.classList[0]) === ".pressed2") {
      localStorage.removeItem(pressedButton.classList[0]);
    } else {
      localStorage.setItem(pressedButton.classList[0], ".pressed1");
    }
  });
}
