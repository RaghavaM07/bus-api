const db = require('../config/db');

class Route {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    async save() {
        const query = 'INSERT INTO ROUTE (fromm, too) VALUES (?, ?)';

        const [newRoute, _] = await db.execute(query, [from, to]);
        return newRoute;
    }

    static async findByFromTo(from, to) {
        const query = 'SELECT * FROM ROUTE WHERE ROUTE.fromm = ? AND ROUTE.too = ?';
        
        const [route, _] = await db.execute(query, [from, to]);
        
        return route[0];
    }
}

module.exports = Route;