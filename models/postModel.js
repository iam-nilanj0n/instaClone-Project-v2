const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    likes: { type: Number, default: 0 },
    description: { type: String, required: true },
    PostImage: { type: Object, required: true },
    date: { type: String , required: false},
    backgroundColor: { type: String, default: 'white' },
})

const postModel = mongoose.model("post", postsSchema);

module.exports = postModel;