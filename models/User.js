const db = require('./../config/db');

class User {
    constructor(username, name, password) {
        this.username = username;
        this.name = name;
        this.password = password;
    }

    save() {
        const date = new Date();
        const createdAt = date.toLocaleDateString();
        const query = 'INSERT INTO User VALUES(?, ?, ?)';
        
        const [newUser, _] = db.execute(query, [this.username, this.name, this.password, createdAt]);
        return newUser;
    }

    static findByUsername(username) {
        const query = 'SELECT * FROM User WHERE username=(?)';

        const [user, _] = db.query(query, [username]);
        return user;
    }
}

module.exports = User;