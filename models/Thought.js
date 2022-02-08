const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: {type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId()},
  reactionBody: {type: String, required: true, max: 280},
  username: [{type: mongoose.Schema.Types.String, ref: 'User', required: true}],
  createdAt: {type: Date, default: Date.now}
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {type: String, required: true, min: 1, max: 280},
  createdAt: {type: Date, default: Date.now },
  username: [{type: mongoose.Schema.Types.String, ref: 'User', required: true}],
  reactions: [reactionSchema]
});

const Thought = mongoose.model('Thought', thoughtSchema);
const handleError = (err) => console.error(err);

module.exports = Thought;