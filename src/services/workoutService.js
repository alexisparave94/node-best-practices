const Workout = require('../database/Workout')
const { v4: uuid } = require('uuid')

const getAllWorkouts = () => {
  const workouts = Workout.getAllWorkouts()
  return workouts;
};

const getOneWorkout = (id) => {
  const workout = Workout.getOneWorkout(id)
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (id, changes) => {
  const updatedWorkout = Workout.updateOneWorkout(id, changes)
  return updatedWorkout;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};