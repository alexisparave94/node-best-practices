const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = (filterParams) => {
  try {
    if (filterParams.mode) {
      return DB.workouts.filter((workout) => workout.mode.toLowerCase().includes(filterParams.mode))
    }

    return DB.workouts;
  } catch (error) {
    throw { status: 500, message: error.message }
  }
};

const getOneWorkout = (id) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === id)
  
    if (!workout){
      throw {
        status: 404,
        message: 'Workout not found'
      };
    } 
  
    return workout;
  } catch (error) {
    throw { status: 500, message: error.message }
  }
};

const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    
    if (isAlreadyAdded) {
      throw { 
        status: 400,
        message: `Workout with the name ${newWorkout.name} already exists`
      }
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error.message }
  }
};

const updateOneWorkout = (id, changes) => {
  try {
    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === id);
    
    if (indexForUpdate === -1) {
      throw {
        status: 404,
        message: 'Workout not found'
      };
    }

    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB)
    return updatedWorkout;
  } catch (error) {
    throw { status: 500, message: error.message }
  }
}

const deleteOneWorkout = (id) => {
  try {
    const newWorkouts = DB.workouts.filter((workout) => workout.id !== id)
  
    if (newWorkouts.length === DB.workouts.length) {
      throw { status: 404, message: 'Workout does not exist' }
    }
  
    DB.workouts = newWorkouts
    saveToDatabase(DB)
    return;
  } catch (error) {
    throw { status: 500, message: error.message }
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};