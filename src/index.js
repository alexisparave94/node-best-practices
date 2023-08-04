const express = require("express");
const v1Router = require("./v1/routes") 
const v1WorkoutRouter = require("./v1/routes/workout.routes")
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.json())

app.use('/api/v1', v1Router)
app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});