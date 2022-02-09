const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const emails = [
  'tigerSpace@email.com',
  'elegantKombucha@gmail.com',
  'blossomingHerb@email.com',
  'oceanSpray@hotmail.com',
  'harvestSnaps@pickles.com',
  'charizard@wizardworld.com',
  'fijiWater@dystopiasoap.com',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getName = () =>
  `${names}`;

const getEmail = () => 
  `${emails}`;


// // Function to generate random assignments that we can add to student object.
// const getRandomThought = (int) => {
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       assignmentName: getRandomArrItem(thoughts),
//       score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
//     });
//   }
//   return results;
// };

// Export the functions for use in seed.js
module.exports = { getName, getEmail };