const studentModels = require("../models/student.models");

const createStudent = async (req, res) => {
	const newStudent = new studentModels({
		name: req.body.name,
		email: req.body.email,
		age: req.body.age,
		faculty: req.body.faculty,
		createdBy: req.verifiedUser._id,
	});
	try {
		const savedStudent = await newStudent.save();
		return res.status(200).json(savedStudent);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getStudents = async (req, res) => {
	try {
		const students = await studentModels.find();
		return res.status(200).json(students);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getStudent = async (req, res) => {
	const id = req.params.studentId;

	try {
		const student = await studentModels.findById(id);
		return res.status(200).json(student);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const deleteStudent = async (req, res) => {
	const id = req.params.studentId;
	try {
		const student = await studentModels.findByIdAndDelete(id);
		return res.status(200).json(student);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updateStudent = async (req, res) => {
	const id = req.params.studentId;
	try {
		const student = await studentModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(student);
	} catch (err) {
		return res.status(500).json(err);
	}
};

module.exports.createStudent = createStudent;
module.exports.getStudents = getStudents;
module.exports.getStudent = getStudent;
module.exports.deleteStudent = deleteStudent;
module.exports.updateStudent = updateStudent;
