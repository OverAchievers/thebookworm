const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/thebookworm"
);

const userSeed = [
  {
    first_name: "Derek",
    last_name: "F",
    email: "derek.f@somewhere.com",
    profile_image: "https://i.imgur.com/jNNT4LE.png",
    phone: 1234567890,
    share_phone: true,
    address: {
      addr_line_1: "somewhere",
      addr_line_2: "everywhere",
      zipcode: 55426,
      city: "St Louis Park",
      state: "MN" 
    },
    share_address: true,
    active_status: true
  },
  {
    first_name: "Derrick",
    last_name: "G",
    email: "derrick.g@somewhere.com",
    profile_image: "https://i.imgur.com/jNNT4LE.png",
    phone: 1234567890,
    share_phone: true,
    address: {
      addr_line_1: "somewhere",
      addr_line_2: "everywhere",
      zipcode: 55426,
      city: "St Paul",
      state: "MN"
    },
    share_address: true,
    active_status: true
  },
  {
    first_name: "Ida",
    last_name: "J",
    email: "ida.j@somewhere.com",
    profile_image: "https://i.imgur.com/jNNT4LE.png",
    phone: 1234567890,
    share_phone: true,
    address: {
      addr_line_1: "somewhere",
      addr_line_2: "everywhere",
      zipcode: 55426,
      city: "Golden Valley",
      state: "MN"
    },
    share_address: true,
    active_status: true
  },
  {
    first_name: "Nate",
    last_name: "J",
    email: "nate.j@somewhere.com",
    profile_image: "https://i.imgur.com/jNNT4LE.png",
    phone: 1234567890,
    share_phone: true,
    address: {
      addr_line_1: "somewhere",
      addr_line_2: "everywhere",
      zipcode: 55426,
      city: "St Paul",
      state: "MN"
    },
    share_address: true,
    active_status: true
  },
  {
    first_name: "Ravish",
    last_name: "Rao",
    email: "ravish.rao@somewhere.com",
    profile_image: "https://i.imgur.com/jNNT4LE.png",
    phone: 1234567890,
    share_phone: true,
    address: {
      addr_line_1: "somewhere",
      addr_line_2: "everywhere",
      zipcode: 55426,
      city: "St Louis Park",
      state: "MN"
    },
    share_address: true,
    active_status: true
  },
];

console.log(userSeed);

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    db.User
      .find()
      .then(users => {

        const bookSeed = [
          {
            isbn: "9781302482602",
            title: "Darth Vader",
            subtitle: "Vader",
            author: "Kieron Gillen",
            desc: "The original Dark Lord of the Sith stars in his first ongoing series! Ever since Darth Vader's first on-screen appearance, he has become one of pop-culture's most popular villains. Now, follow Vader straight from the ending of A New Hope, (and the pages of the new Star Wars comic book), into his own solo adventures- showing the Empire's war with the Rebel Alliance from the other side! But when a Dark Lord needs help, who can he turn to? As Vader pursues a very personal vengeance against the Rebels and investigates the Emperor's secret machinations, he clashes with weapons scavenger Aphra and deadly Battle Droids, and returns to Geonosis to build an army. But some very powerful people don't want him to learn the truths he seeks! Guest-starring Jabba the Hutt, Boba Fett and more! Collecting Darth Vader (2015)",
            book_image: "https://books.google.com/books/content/images/frontcover/YpF5CgAAQBAJ?fife=w200-h300",
            pages: 136,
            condition: "Good",
            notes: "Available for pick up. Will not post or deliver",
            user: users[0]._id
          },
          {
            isbn: "9781250192462",
            title: "A Higher Loyalty: Truth, Lies, and Leadership",
            subtitle: "",
            author: "James Comey",
            desc: "In his book, former FBI director James Comey shares his never-before-told experiences from some of the highest-stakes situations of his career in the past two decades of American government, exploring what good, ethical leadership looks like, and how it drives sound decisions. His journey provides an unprecedented entry into the corridors of power, and a remarkable lesson in what makes an effective leader.  Mr. Comey served as director of the FBI from 2013 to 2017, appointed to the post by President Barack Obama. He previously served as U.S. attorney for the Southern District of New York, and the U.S. deputy attorney general in the administration of President George W. Bush. From prosecuting the Mafia and Martha Stewart to helping change the Bush administration's policies on torture and electronic surveillance, overseeing the Hillary Clinton e-mail investigation as well as ties between the Trump campaign and Russia, Comey has been involved in some of the most consequential cases and policies of recent history.",
            book_image: "https://books.google.com/books/content/images/frontcover/4CovDwAAQBAJ?fife=w200-h300",
            pages: 416,
            condition: "Good",
            notes: "Available for pick up. Will not post or deliver",
            user: users[1]._id
          },
          {
            isbn: "9780307887450",
            title: "Ready Player One",
            subtitle: "",
            author: "Ernest Cline",
            desc: "In the year 2045, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he's jacked into the virtual utopia known as the OASIS. Wade's devoted his life to studying the puzzles hidden within this world's digital confines—puzzles that are based on their creator's obsession with the pop culture of decades past and that promise massive power and fortune to whoever can unlock them.",
            book_image: "https://books.google.com/books/content/images/frontcover/FY_HWAcm10MC?fife=w200-h300",
            pages: 384,
            condition: "Good",
            notes: "Available for pick up. Will not post or deliver",
            user: users[2]._id
          },
          {
            isbn: "9780062457738",
            title: "The Subtle Art of Not Giving a F*ck",
            subtitle: "A Counterintuitive Approach to Living a Good Life",
            author: "Mark Manson",
            desc: "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people.",
            book_image: "https://books.google.com/books/content/images/frontcover/yng_CwAAQBAJ?fife=w200-h300",
            pages: 224,
            condition: "Good",
            notes: "Available for pick up. Will not post or deliver",
            user: users[3]._id
          },
          {
            isbn: "9780553897845",
            title: "A Game of Thrones",
            subtitle: "A Song of Ice and Fire",
            author: "George R. R. Martin",
            desc: "From a master of contemporary fantasy comes the first novel of a landmark series unlike any you’ve ever read before. With A Game of Thrones, George R. R. Martin has launched a genuine masterpiece, bringing together the best the genre has to offer. Mystery, intrigue, romance, and adventure fill the pages of this magnificent saga, the first volume in an epic series sure to delight fantasy fans everywhere.",
            book_image: "https://books.google.com/books/content/images/frontcover/5NomkK4EV68C?fife=w200-h300",
            pages: 720,
            condition: "Good",
            notes: "Available for pick up. Will not post or deliver",
            user: users[4]._id
          }
        ];

        db.Book
          .remove({})
          .then(() => db.Book.collection.insertMany(bookSeed))
          .then(data => {
            console.log(data.insertedIds.length + " records inserted!");
            process.exit(0);
          })
          .catch(err => {
            console.error(err);
            process.exit(1);
          });

      })
      .catch(err => res.status(422).json(err));
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



