const db = require('../config/db');

class Booking {
    constructor(userID, schedID, seatsBooked) {
        this.userID = userID;
        this.schedID = schedID;
        this.seatsBooked = seatsBooked;
    }

    async save() {
        const query = `
            INSERT INTO BOOKING (userID, schedID, seatsBooked) VALUES (?, ?, ?)
        `;

        const [newBooking, _] = await db.execute(query, [this.userID, this.schedID, this.seatsBooked]);
        return newBooking;
    }

    static async getSeatsBooked(schedID) {
        const query = 'SELECT SUM(seatsBooked) AS ans FROM BOOKING WHERE schedID=(?)';

        const [seatsBooked, _] = await db.execute(query, [schedID]);
        return seatsBooked[0].ans === null ? 0 : parseInt(seatsBooked[0].ans);
    }
}

module.exports = Booking;