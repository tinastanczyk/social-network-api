const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create user array with seed data
  const users = [
    {username: 'Angelica', email: 'blossomingHerb@email.com'},
    {username: 'Gabriella', email: 'oceanSpray@hotmail.com'},
    {username: 'Mewtwo', email: 'fijiWater@dystopiasoap.com'},
  ];
// insert seed data into user model
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});