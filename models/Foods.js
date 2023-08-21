const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodsSchema = new Schema(
	{
		title: {
			type: String,
		},
		entry: {
			type: String,
		},
		quantity: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);

const Food = mongoose.model("foods", foodsSchema);

module.exports = Food;