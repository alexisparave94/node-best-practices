const recordService = require('../services/recordService')

const getRecordsForWorkout = (req, res) => {
  const { workoutId } = req.params
  try {
    const records = recordService.getRecordsForWorkout(workoutId)
    res.json(records)
  } catch (error) {
    console.log(error)
    res.status(error.status || 500).json({ message: error.message })
  }
}

module.exports = {
  getRecordsForWorkout
}