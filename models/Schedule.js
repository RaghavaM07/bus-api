const db = require('../config/db');

class Schedule {
    constructor(date, time, busId, routeId) {
        this.date = date;
        this.time = time;
        this.busId = busId;
        this.routeId = routeId;
    }

    save() {
        const date = new Date();
        const createdAt = date.toLocaleDateString();
        const query = 'INSERT INTO User VALUES(?, ?, ?, ?, ?)';

        const [newSchedule, _] = db.execute(query, [this.date, this.time, this.busId, this.routeId, createdAt]);
        return newSchedule;
    }

    static getId(date, from, to, busNumber) {
        // const query = 'SELECT SUM(seatsBooked) FROM User WHERE schedId=(?)';
        const query = 
            "SELECT id AS schedId FROM SCHEDULE WHERE date=(?) AND routeId=( SELECT id AS routeId FROM ROUTE WHERE from = (?) AND to = (?)) AND busId = (?)"

        const [schedId, _] = db.query(query, [date, from, to, busNumber]);
        return schedId;
    }
}

module.exports = Schedule;