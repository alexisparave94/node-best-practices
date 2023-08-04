const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
  const { mode } = req.query
  try {
    const workouts = workoutService.getAllWorkouts({ mode })
    res.json(workouts);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message })
  }
};

const getOneWorkout = (req, res) => {
  const { workoutId } = req.params

  if (!workoutId) {
    return res.status(400).json({ message: 'Id forgot' });
  }

  try {
    const workout = workoutService.getOneWorkout(workoutId)
    res.json(workout);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message })
  }
};

const createNewWorkout = (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;

  if (!name || !mode || !equipment || !exercises || !trainerTips) {
    return res.status(400).json({ message: "One of the following fields is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'" });
  }

  const newWorkout = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips
  };

  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout)
    return res.status(201).json(createdWorkout);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message })
  }
};

const updateOneWorkout = (req, res) => {
  const { workoutId } = req.params

  if (!workoutId) {
    return res.status(400).json({ message: 'Id forgot' });
  }

  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, req.body)
    res.json(updatedWorkout);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message })
  }
};

const deleteOneWorkout = (req, res) => {
  const { workoutId } = req.params

  if (!workoutId) {
    return res.status(400).json({ message: 'Id forgot' });
  }

  try {
    workoutService.deleteOneWorkout(workoutId)
    res.sendStatus(204);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message })
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};