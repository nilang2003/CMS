function institute_change(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";

  var optionArray;

  if (s1.value === "CSPIT") {
    optionArray = [
      "|",
      "ce|CE",
      "cse|CSE",
      "it|IT",
      "ai/ml|AI/ML",
      "mechanical|MECHANICAL",
      "civil|CIVIL",
    ];
  } else if (s1.value === "DEPSTAR") {
    optionArray = ["|", "ce|CE", "cse|CSE", "it|IT"];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
}

function enable_disable() {
  var selectedOption = document.querySelector(".select_user_input").value;

  var clubNameInput = document.getElementById("input_club_name");
  var clubLogoInput = document.getElementById("club_logo_input");
  var clubDescriptionInput = document.getElementById("input_club_desc");
  // var facultyIdInput = document.getElementById("faculty_id");

  if (selectedOption === "Core-member" || selectedOption === "User") {
    clubNameInput.style.display = "none";
    clubLogoInput.style.display = "none";
    clubDescriptionInput.style.display = "none";
  } else {
    clubNameInput.style.display = "block";
    clubLogoInput.style.display = "block";
    clubDescriptionInput.style.display = "block";
  }

  // if (selectedOption === "Core-member" || selectedOption === "Admin") {
  //   facultyIdInput.style.display = "block";
  // } 
  // else {
  //   facultyIdInput.style.display = "none";
  // }
}
