//import section
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//DB connection
mongoose.connect("mongodb://localhost:27017/faculty-management");
mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
	console.log("mongodb failed with", err);
});
//import routes
const studentRoutes = require("./routes/student.routes");
const facultyRoutes = require("./routes/faculty.routes");
const authRoutes = require("./routes/auth.routes");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use("/students", studentRoutes);
app.use("/faculties", facultyRoutes);
app.use("/auth", authRoutes);
//server listening
const port = 8000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
