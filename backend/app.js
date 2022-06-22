const mysql = require("mysql");
var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

var app = express();

app.use(cors());

let persons = [];
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/addPerson", async (req, res) => {
  const person = JSON.parse(JSON.stringify(req.body));

  console.log("POST called");
  console.log(person);
  persons.push(person);
  try {
    await db.query(
      `INSERT INTO PERSON(person_id,first_name,last_name,dob,email,father_firstName,father_lastName,
      mother_firstName,mother_lastName,gender,nationality,street_address,city,country,telephone,mobile
       ) VALUES ("${person.personId}","${person.firstName}","${person.lastName}",
      "${person.DOB}","${person.Email}","${person.father_FirstName}","${person.father_LastName}",
      "${person.mother_FirstName}" ,"${person.mother_LastName}" ,"${person.gender}",
      "${person.nationality}","${person.street_address}" ,"${person.city}",
      "${person.country}","${person.telephone}","${person.mobile}" )`
    );
    res.send("Person is added to DB");
  } catch (err) {
    console.error(`Error while DB query `, err.message);
  }
});

app.patch("/updatePerson", async (req, res) => {
  const person = JSON.parse(JSON.stringify(req.body));
  let sqlQuery = `UPDATE PERSON
    SET institute_name = "${person.instituteName}", hsc_board = "${person.hscBoard}",
    hsc_score="${person.hsc_score}",ssc_insname="${person.ssc_InsName}",
    ssc_board="${person.sscBoard}" ,ssc_score="${person.ssc_score}" ,
    persue="${person.persue}",c_insName="${person.c_insName}",
    ovr_percent="${person.ovr_percent}",backlog="${person.backlog}"

WHERE person_id="${person.personId}"`;
    console.log("PATCH called");
    console.log(person);
    persons.push(person);
    try {
      await db.query(sqlQuery);
      res.send("Person details is updated to DB");
    } catch (err) {
      console.error(`Error while DB query `, err.message);
    }
  });

app.get("/persons", async (req, res, next) => {
    db.getAllPersonDetails(req, res, next);
  });

app.listen(3300);
