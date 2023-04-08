class Bus {
    constructor(busNumber, seatCapacity, pricePerSeat) {
        this.busNumber = busNumber;
        this.seatCapacity = seatCapacity;
        this.pricePerSeat = pricePerSeat;
    }

    save() {
        const date = new Date();
        const createdAt = date.toLocaleDateString();
        const query = 'INSERT INTO Bus VALUES(?, ?, ?, ?)';

        const [newBus, _] = db.execute(query, [busNumber, seatCapacity, pricePerSeat, createdAt]);
        return newBus;
    }

    static findBybusNumber(busNumber) {
        const query = 'SELECT * FROM Bus WHERE busNumber=(?)';

        const [bus, _] = db.query(query, [busNumber]);
        return bus;
    }
}

module.exports = Bus;