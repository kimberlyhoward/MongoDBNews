var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new PostSchema object
var PostSchema = new Schema({

	title: {
		type: String,
		trim: true,
		required: "Title is Required"
	},
	link: {
		type: String,
		trim: true,
		required: "Link is Required"
	},
	saved: {
		type: Boolean,
		default: false
	},
	comments: []

});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;