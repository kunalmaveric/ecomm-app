const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecomm-app", ).then(() => {
    console.log("connected");
}).catch(e => {
    console.log("Error in connecting to mongodb", e);
    console.log("Reason", e.reason);
});