const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    fullName: {type: String, reuired: true},
    id: {type: String, reuired: true},
    date: {type: String, required: true},
});

const Story = mongoose.model("story", storySchema);

module.exports = { Story };