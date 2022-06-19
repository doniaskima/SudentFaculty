const {
	getStudents,
	createStudent,
	getStudent,
	deleteStudent,
	updateStudent,
} = require("../controllers/student.controllers");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/", getStudents);
router.get("/:studentId", getStudent);
router.delete("/:studentId", deleteStudent);
router.put("/:studentId",verifyToken, updateStudent);
router.post("/",verifyToken, createStudent);

module.exports = router;
