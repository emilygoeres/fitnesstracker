// const { $where } = require("../models/workout");

// This will input the info that the user inputs for the new workout and the info will be saved
// Once the user has inputted all the fields for the new workout, the new workout info will be saved
$("#make-new").on("click", function (event) {
    event.preventDefault()
    var newWorkout = {
        excercisetype: $("#excercisetype").val(),
        duration: $("#duration").val(),
        caloriesBurned: $("#caloriesBurned").val(),
        name: $("#name").val(),
    }
    console.log(newWorkout);
    $.post("/api/newWorkout", newWorkout)
        .then(function (response) {
            console.log(response)
            var id = response._id
            $.ajax("/api/updateworkout/" + id,
                {
                    method: "PUT",
                    data: newWorkout
                })
                .then(function (response) {
                    console.log(response)
                    location.reload()
                })
            // location.reload()
        })
})

// This wil allow the user to update an existing workout, add to it or adjust the duration or an aspect of the workout
$.get("/api/getWorkout")
    .then(function (response) {
        console.log(response)
        if (response.length != 0) {
            var previousworkout = response[response.length - 1]
            $("#updateexcercise").attr("workoutid", previousworkout._id)
            for (let i = 0; i < previousworkout.excercises.length; i++) {
                $("#previousworkout").append(`
            <tr><td>${previousworkout.excercises[i].name}</td>
            <td>${previousworkout.excercises[i].excercisetype}</td>
            <td>${previousworkout.excercises[i].duration}</td>
            <td>${previousworkout.excercises[i].caloriesBurned}</td>
            `)
            }
        } else {
            $("#updateexcercise").hide()
        }
    })

$("#updateexcercise").on("click", function (event) {
    event.preventDefault()
    var newWorkout = {
        excercisetype: $("#excercisetype").val(),
        duration: $("#duration").val(),
        caloriesBurned: $("#caloriesBurned").val(),
        name: $("#name").val(),
    }
    let id = $("#updateexcercise").attr("workoutid")
    console.log(newWorkout, id);
    $.ajax("/api/updateworkout/" + id,
        {
            method: "PUT",
            data: newWorkout
        })
        .then(function (response) {
            console.log(response)
            location.reload()
        })
})