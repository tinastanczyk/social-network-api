const { Schema, model, Types } = require('mongoose');
// creating a reaction schema for the reactions associated with certain thoughts
const reactionSchema = new Schema({
  reactionId: {type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
  reactionBody: {type: String, required: true, max: 280},
  username: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});
// creating a thoughts schema, which includes the reaction schema in it's reactions array
const thoughtSchema = new Schema({
  thoughtText: {type: String, required: true, min: 1, max: 280},
  createdAt: {type: Date, default: Date.now},
  username: {type: String, required: true},
  reactions: [reactionSchema]
},
{
  toJSON: {
    virtuals: true
  },
  id: false,
});
// creating a virtual for thoughtSchema called reactionCount which counts how many reactions a single thought has
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
// creating a thought model from the thought schema
const Thought = model('thought', thoughtSchema);
const handleError = (err) => console.error(err);

module.exports = Thought;