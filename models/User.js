const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

const userSchema = new Schema({
  username: { type: String, required: true, min: 1, max: 280},
  email: {type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"],},
  thoughts: [
    {type: Schema.Types.ObjectId, ref: 'thought'
    }],
  friends: [{type: Schema.Types.ObjectId, ref: 'user'},],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

userSchema.virtual('thoughtCount').get(function () {
  return this.thoughts.length;
});

const User = model('user', userSchema);
const handleError = (err) => console.error(err);

// User.create({
//   username: "test1",
//   email: "test1@email.com"
// },
// (err) => (err ? handleError(err) : console.log('Created new document in User'))
// );

// User.create({
//   username: "test2",
//   email: "test2@email.com"
// },
// (err) => (err ? handleError(err) : console.log('Created new document in User'))
// );

module.exports = User;