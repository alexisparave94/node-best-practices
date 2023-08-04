const express = require("express");
const router = express.Router();
const workoutController = require('../../controllers/workoutController')
const recordController = require('../../controllers/recordController')
const apicache = require('apicache')

const cache = apicache.middleware;

router.get("/", cache('2 minutes'), workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.get('/:workoutId/records', recordController.getRecordsForWorkout)

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;