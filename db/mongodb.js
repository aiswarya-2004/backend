const mongoose = require('mongoose');
module.exports = mongoose.connect("mongodb://localhost:27017")
    .then((result) => {
        console.log("");
    })
    .catch((err) => {
        console.log("something went wrong", err);

    })

