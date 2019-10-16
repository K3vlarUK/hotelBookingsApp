use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guestName: 'Kevin',
    guestEmail: 'hi@hello.com',
    checkedIn: true
  },
  {
    guestName: 'Niall',
    guestEmail: 'badPuns@hello.com',
    checkedIn: false
  },
  {
    guestName: 'Chris',
    guestEmail: 'hiya@hello.com',
    checkedIn: true
  }
])
