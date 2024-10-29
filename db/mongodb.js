const mongoose = require('mongoose');
module.exports = mongoose.connect("mongodb+srv://sasid717:lUd6mQ5ywQbUR9KV@cluster0.royx6.mongodb.net/backend")
    .then((result) => {
        console.log("");
    })
    .catch((err) => {
        console.log("something went wrong", err);

    })

    