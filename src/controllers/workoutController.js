const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
  const workouts = workoutService.getAllWorkouts()
  res.json(workouts);
};

const getOneWorkout = (req, res) => {
  const { workoutId } = req.params

  if (!workoutId) return;

  const workout = workoutService.getOneWorkout(workoutId)
  res.json(workout);
};

const createNewWorkout = (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;

  if (!name || !mode || !equipment || !exercises || !trainerTips) return;

  const newWorkout = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout)
  res.json(createdWorkout);
};

const updateOneWorkout = (req, res) => {
  const { workoutId } = req.params

  if (!workoutId) return;

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, req.body)
  res.json(updatedWorkout);
};

const deleteOneWorkout = (req, res) => {
  const { workoutId } = req.params

  if (!workoutId) return;

  workoutService.deleteOneWorkout(workoutId)
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};