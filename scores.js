"use strict";

$(document).ready(() => {
// creating two arrays; one for scores and one for student records
  const records = [];
  const scores = [];

  $("#add_button").click(() => {
// getting the values of first name, last name and scores from form
    const first_name = $("#first_name").val().trim();
    const last_name = $("#last_name").val().trim();
    const score = parseFloat($("#score").val());
//validating the fields for null values and invalid score values
    if (first_name === "" || last_name === "") {
      alert("Please enter a first name and last name.");
      $("#first_name").focus();
    } else if (isNaN(score) || score < 0 || score > 100) {
      alert("Please enter a valid score between 0 and 100.");
      $("#score").focus();
    } else {
//pushing the scores in the array
      scores.push(score);

      const student_record = first_name + " " + last_name + ": " + score;
//pushing values of records in the form of string in array2
      records.push(student_record);

      $("#first_name").val("");
      $("#last_name").val("");
      $("#score").val("");
      $("#first_name").focus();

      displayScores();
    }
  });

  $("#clear_button").click(() => {
//clearing the arrays
    records.length = 0;
    scores.length = 0;

    $("#scores").val("");
    $("#first_name").focus();
  });

  $("#sort_button").click(() => {
//sorting the records based on lastname using sort function and comparing two values.
    records.sort((a, b) => {
      const last_name_a = a.split(" ")[1];
      const last_name_b = b.split(" ")[1];
      return last_name_a.localeCompare(last_name_b);
    });

    displayScores();
  });

  function displayScores() {
//calculating average scores
    const sum = scores.reduce((total, score) => total + score, 0);
    const average = sum / scores.length;

    $("#avr_score").text(": " + average.toFixed(2));

    $("#scores").val(records.join("\n"));
  }

  $("#first_name").focus();
});
