class Route {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    save() {
        const date = new Date();
        const createdAt = date.toLocaleDateString();
        const query = 'INSERT INTO Route VALUES(?, ?, ?)';

        const [newRoute, _] = db.execute(query, [from, to, createdAt]);
        return newRoute;
    }

    static findByFromTo(from, to) {
        const query = 'SELECT id FROM Route WHERE from=(?) to=(?)';

        const [route, _] = db.query(query, [from, to]);
        return route;
    }
}

module.exports = Route;