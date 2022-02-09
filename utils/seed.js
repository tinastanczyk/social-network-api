const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { getName, getEmail } = require('./data');
const ObjectId = require('mongoose');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const users = [
    {username: 'Angelica', email: 'blossomingHerb@email.com'},
    {username: 'Gabriella', email: 'oceanSpray@hotmail.com'},
    {username: 'Mewtwo', email: 'fijiWater@dystopiasoap.com'},
  ];

  await User.collection.insertMany(users);

  const reactionData1 = [
    {
      reactionBody: "Amazing",
      username: users[0].username
    },
    {
      reactionBody: "I love water",
      username: users[1].username
    }
  ]

  const reactionData2 = [
    {
      reactionBody: "Cranberry juice is elite.",
      username: users[1].username
    },
    {
      reactionBody: "I love water",
      username: users[2].username
    }
  ]

  const thoughts = [
    {
      thoughtText: "I am thinking about plants.",
      username: users[0].username
    },
    {
      thoughtText: "I am thirsty.",
      username: users[1].username,
      reactions: reactionData2
    },
    {
      thoughtText: "I am really hydrated.",
      username: users[2].username
    },
    {
      thoughtText: "Water is life.",
      username: users[2].username,
      reactions: reactionData1
    }
  ]

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});