const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (id) => {
  const workout = DB.workouts.find((workout) => workout.id === id)

  if (!workout) return;

  return workout;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  
  if (isAlreadyAdded) return;

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const updateOneWorkout = (id, changes) => {
  const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === id);
  
  if (indexForUpdate === -1) return;

  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB)
  return updatedWorkout;
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout
};