let mongoose = require("mongoose");
let db = require("../models/transaction");


mongoose.connect("mongodb://localhost/budget", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

let transactionSeed = [{
    name: "Weekly salary",
    value: 1000,
    date: new Date().setDate(new Date().getDate() - 5),
}, {
    name: "Car insurance",
    value: -200,
    date: new Date().setDate(new Date().getDate() - 3),
}, {
    name: "Gas",
    value: -50,
    date: new Date().setDate(new Date().getDate() - 2),
}, {
    name: "Grocery",
    value: -100,
    date: new Date().setDate(new Date().getDate()),
}];

db.deleteMany({})
    .then(() => db.collection.insertMany(transactionSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });