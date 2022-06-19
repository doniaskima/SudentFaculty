const {
	getFaculties,
	createFaculty,
	getFaculty,
	deleteFaculty,
	updateFaculty,
	getStudentsByFaculty
} = require("../controllers/faculty.controllers");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/", getFaculties);
router.get("/:facultyId", getFaculty);
router.get("/:facultyId/students", getStudentsByFaculty);
router.delete("/:facultyId", deleteFaculty);
router.put("/:facultyId", updateFaculty);
router.post("/",verifyToken, createFaculty);

module.exports = router;
