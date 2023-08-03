const Workout = require('../database/Workout')
const { v4: uuid } = require('uuid')

const getAllWorkouts = () => {
  try {
    const workouts = Workout.getAllWorkouts()
    return workouts;
  } catch (error) {
    throw error
  }
};

const getOneWorkout = (id) => {
  try {
    const workout = Workout.getOneWorkout(id)
    return workout;
  } catch (error) {
    throw error
  }
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error
  }
};

const updateOneWorkout = (id, changes) => {
  try {
    const updatedWorkout = Workout.updateOneWorkout(id, changes)
    return updatedWorkout;
  } catch (error) {
    throw error
  }
};

const deleteOneWorkout = (id) => {
  try {
    Workout.deleteOneWorkout(id);
  } catch (error) {
    throw error
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};