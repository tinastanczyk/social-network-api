const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

const userSchema = new Schema({
  thoughts: [
    {type: Schema.Types.ObjectId, ref: 'thought'}
  ],
  friends: [{type: Schema.Types.ObjectId, ref: 'user'},],
  username: { type: String, required: true, min: 1, max: 280},
  email: {type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"],},
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);
const handleError = (err) => console.error(err);

module.exports = User;