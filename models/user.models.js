const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		password: { type: String, minlength: 8, maxlength: 1024 },
		email: { type: String, required: true, unique: true, index: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
