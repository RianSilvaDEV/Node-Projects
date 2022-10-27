const db = require('../db/connect')

const Insert = (model) => {
    return new Promise((accepted, rejected) => {
        db.query("INSERT INTO cars(model, licensePlate) VALUES (?, ?)", [model.model, model.licensePlate], (error, results) => {
            if (error) { rejected(error); return; }
            accepted(results);
        });
    });
}

const GetAll = () => {
    return new Promise((accepted, rejected) => {
        db.query('SELECT * FROM cars', (error, results) => {
            if (error) { rejected("rejected:", error); return; }
            accepted(results);
        });
    });
}

const GetById = (cod) => {
    return new Promise((accepted, rejected) => {
        db.query('SELECT * FROM cars WHERE cod = ?', [cod], (error, results) => {
            if (error) { rejected(error); return; }
            if (results.length > 0)
                accepted(results[0]);
            else
                accepted(false);
        });
    });
}

const Delete = (cod) => {
    return new Promise((accepted, rejected) => {
        db.query('DELETE FROM cars WHERE cod = ? ', [cod], (error, results) => {
            if (error) { rejected(error); return; }
            accepted(results);
        });
    });
}

const Update = (model) => {
    return new Promise((accepted, rejected) => {
        db.query('UPDATE cars SET model = ?, licensePlate = ? WHERE cod = ?', [model.model, model.licensePlate, model.cod], (error, results) => {
            if (error) { rejected(error); return; }
            accepted(results);
        });
    });
}

module.exports = {
    Insert,
    GetAll,
    GetById,
    Delete,
    Update,
};