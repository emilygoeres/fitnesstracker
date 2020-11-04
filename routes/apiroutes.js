var router = require("express").Router()
var db = require("../models/workout")

router.post("/api/newWorkout", function (req, res) {
    console.log(req.body)
    db.create(req.body).then(function (dbrecord) {
        console.log(dbrecord)
        res.json(dbrecord)
    });
});
// app.post("/submit", (req, res) => {
//     console.log(req.body);

//     db.notes.insert(req.body, (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     });
//   });

  router.get("/api/getWorkout", (req, res) => {
    db.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
          console.log("GET",data)
        res.json(data);
      }
    });
  });

  router.put("/api/updateworkout/:id", (req, res) => {
      console.log(req.body,req.params.id)
    db.findByIdAndUpdate(req.params.id,{$push:{excercises:req.body}},{new:true}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
          console.log("PUT",data)
        res.json(data);
      }
    });
  });
//   app.get("/find/:id", (req, res) => {
//     db.notes.findOne(
//       {
//         _id: mongojs.ObjectId(req.params.id)
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });
//   app.post("/update/:id", (req, res) => {
//     db.notes.update(
//       {
//         _id: mongojs.ObjectId(req.params.id)
//       },
//       {
//         $set: {
//           title: req.body.title,
//           note: req.body.note,
//           modified: Date.now()
//         }
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });
//   // This will allow the user to delete a specific workout
// app.delete("/delete/:id", (req, res) => {
//     db.notes.remove(
//       {
//         _id: mongojs.ObjectID(req.params.id)
//       },
//       (error, data) => {
//         if (error) {
//           res.send(error);
//         } else {
//           res.send(data);
//         }
//       }
//     );
//   });

//   // This will allow the user to delete all workouts
//   app.delete("/clearall", (req, res) => {
//     db.notes.remove({}, (error, response) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(response);
//       }
//     });
//   });
module.exports = router