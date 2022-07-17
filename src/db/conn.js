const mongoose = require("mongoose");

// connect to localhost database

mongoose.connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{

    console.log("Connected!!!");

}).catch((e)=>{

    console.log(e);

});



