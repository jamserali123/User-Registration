function savePersonalDetails() {
  //Taking input values of contact page starts..

  let firstName1 = document.getElementById("First_Name").value;
  let lastName1 = document.getElementById("Last_Name").value;
  let dob1 = document.getElementById("date").value;
  let email1 = document.getElementById("Email").value;
  let father_FirstName1=document.getElementById("father_First_Name").value;
  let father_LastName1=document.getElementById("father_Last_Name").value;
  let mother_FirstName1=document.getElementById("mother_First_Name").value;
  let mother_LastName1=document.getElementById("mother_Last_Name").value;
  let genderMale=document.getElementById("male").checked;
  let genderFeMale=document.getElementById("female").checked;

  let gender1;
  if(genderMale){
    gender1= "Male";
  }else if(genderFeMale){
    gender1 = "FeMale";
  }else{
    gender1 = "UnKnown";
  }
 
  let nationality1=document.getElementById("nationality").value;
  let street_address1=document.getElementById("street_address").value;
  let city1=document.getElementById("city_Name").value;
  let country1=document.getElementById("country").value;
  let telephone1=document.getElementById("telephone").value;
  let mobile1=document.getElementById("mobile").value;

// input values of contact page ends here..



  // Similarly for all other fields to be done

  var personObject = {
    personId: uuidv4(),
    firstName: firstName1,
    lastName: lastName1,
    DOB: dob1,
    Email: email1,
    father_FirstName:father_FirstName1,
    father_LastName:father_LastName1,
    mother_FirstName:mother_FirstName1,
    mother_LastName:mother_LastName1,
    gender:gender1,
    nationality:nationality1,
    street_address:street_address1,
    city:city1,
    country:country1,
    telephone:telephone1,
    mobile:mobile1


  };
  UserAction(personObject);
}

function UserAction(personObject) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.location.href = "../html/Page2_educationQualification.html";
    }
  };
  xhttp.open("POST", "http://localhost:3300/addPerson", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  console.log("Object from html " + JSON.stringify(personObject));
  sessionStorage.clear();
  sessionStorage.setItem("person", JSON.stringify(personObject));
  xhttp.send(JSON.stringify(personObject));
}
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
