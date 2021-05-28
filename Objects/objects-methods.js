let restaurant = {
  name: 'Ricks Cafe',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

restaurant.seatParty(4);
console.log(restaurant.checkAvailability(7));
restaurant.removeParty(74);
console.log(restaurant.checkAvailability(7));
