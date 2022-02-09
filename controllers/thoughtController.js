const { User, Thought } = require('../models');

module.exports = {
  getThoughts(req, res){
    Thought
      .find()
      .populate('reactions')
      .then(async (thoughts) => {
        return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought)=> {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created, but found no user with that ID' })
          : res.json('Created the thought 🎉')
      )
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .populate('reactions')
      .select('-__v')
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateThought(req, res) {
    // console.log('You are updating a Thought');
    // console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: { thoughtText: req.body.thoughtText, reactions: req.body.reactions } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : res.json({
            thought,
          })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  newReaction(req, res) {
    // console.log('You are adding a reaction');
    // console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res
              .status(404)
              .json({ message: 'No reaction found with that ID :(' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    // console.log(`You are deleting a Thought's reaction`);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: {reactionId: req.params.reactionId} } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res
              .status(404)
              .json({ message: 'No reaction found with that ID :(' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
};