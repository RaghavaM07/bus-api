const db = require('./../config/db');

class Booking {
    constructor(userId, schedId, seatsBooked) {
        this.userId = userId;
        this.schedId = schedId;
        this.seatsBooked = seatsBooked;
    }

    save() {
        const date = new Date();
        const createdAt = date.toLocaleDateString();
        const query = 'INSERT INTO User VALUES(?, ?, ?)';

        const [newBooking, _] = db.execute(query, [this.userId, this.schedId, this.seatsBooked, createdAt]);
        return newBooking;
    }

    static getSeatsBooked(schedId) {
        const query = 'SELECT SUM(seatsBooked) FROM User WHERE schedId=(?)';

        const [seatsBooked, _] = db.query(query, [schedId]);
        return seatsBooked;
    }
}

module.exports = Booking;