const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: {type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId()},
  reactionBody: {type: String, required: true, max: 280},
  username: [{type: mongoose.Schema.Types.String, ref: 'user', required: true}],
  createdAt: {type: Date, default: Date.now}
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {type: String, required: true, min: 1, max: 280},
  createdAt: {type: Date, default: Date.now },
  username: {type: String, required: true},
  reactions: [reactionSchema]
});

const Thought = mongoose.model('thought', thoughtSchema);
const handleError = (err) => console.error(err);

// const reactionData = [
//   {
//     reactionBody: "I love the way you think!",
//     username: "test2",
//   },
// {
//   reactionBody: "Yes, this is amazing!",
//   username: "test3",
// }
// ]
// const reactionData2 = [
//   {
//     reactionBody: "I cannot stand the way you think!",
//     username: "test1",
//   },
// {
//   reactionBody: "Yes, this is awful!",
//   username: "test3",
// }
// ]
// Thought.create({
//   thoughtText: "This is my first thought",
//   username: "test1",
//   reactions: reactionData,
// },
// (err) => (err ? handleError(err) : console.log('Created new document in Thought')));

// Thought.create({
//   thoughtText: "I don't have thoughts",
//   username: "test2",
//   reactions: reactionData2,
// },
// (err) => (err ? handleError(err) : console.log('Created new document in Thought')));


module.exports = Thought;