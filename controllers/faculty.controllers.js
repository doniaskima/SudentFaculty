const facultyModels = require("../models/faculty.models");

const createFaculty = async (req, res) => {
	const newFaculty = new facultyModels({
		name: req.body.name,
		email: req.body.email,
		foundationDate: req.body.foundationDate,
		location: req.body.location,
		createdBy: req.verifiedUser._id,
	});
	try {
		const savedFaculty = await newFaculty.save();
		return res.status(200).json(savedFaculty);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getFaculties = async (req, res) => {
	try {
		const faculties = await facultyModels.find();
		return res.status(200).json(faculties);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getFaculty = async (req, res) => {
	const id = req.params.facultyId;
	try {
		const faculty = await facultyModels.findById(id);
		return res.status(200).json(faculty);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const deleteFaculty = async (req, res) => {
	const id = req.params.facultyId;
	try {
		const faculty = await facultyModels.findByIdAndDelete(id);
		return res.status(200).json(faculty);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updateFaculty = async (req, res) => {
	const id = req.params.facultyId;
	try {
		const faculty = await facultyModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(faculty);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getStudentsByFaculty = async (req, res) => {
	try {
		const students = await studentModels.find({
			faculty: req.params.facultyId,
		});
		return res.status(200).json(students);
	} catch (err) {
		return res.status(500).json(err);
	}
};
module.exports.createFaculty = createFaculty;
module.exports.getFaculties = getFaculties;
module.exports.getFaculty = getFaculty;
module.exports.deleteFaculty = deleteFaculty;
module.exports.updateFaculty = updateFaculty;
module.exports.getStudentsByFaculty = getStudentsByFaculty;