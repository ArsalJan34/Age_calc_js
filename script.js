 var birthYear = +prompt("Enter your birth year:");
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

    if (birthYear > currentYear || birthYear <= 0) {
      alert("Invalid birth year entered!");
    } else {
      alert("Your age is: " + age + " years");
    }