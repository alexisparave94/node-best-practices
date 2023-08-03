const Record = require('../database/Record')

const getRecordsForWorkout = (id) => {
  try {
    const records = Record.getRecordsForWorkout(id)
    return records;
  } catch (error) {
    throw error
  }
}

module.exports = {
  getRecordsForWorkout
}