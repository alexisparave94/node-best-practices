const DB = require('./db.json')

const getRecordsForWorkout = (id) => {
  try {
    const records = DB.records.filter((record) => record.workout === id)
    return records
  } catch (error) {
    throw { status: error.status || 500, message: error.message }
  }
}

module.exports = {
  getRecordsForWorkout
}