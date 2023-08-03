const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
  const workouts = workoutService.getAllWorkouts()
  res.json(workouts);
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout()
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
  const newWorkout = workoutService.createNewWorkout()
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  const workout = workoutService.updateOneWorkout()
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout()
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};