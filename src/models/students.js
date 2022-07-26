const validator = require("validator");
const mongoose = require("mongoose");


// schema of a student 

const studentSchema = new mongoose.Schema({

    name : {
        type : String,
        required: true,
        minlength: 3,
    },

    email:{
       type : String,
       required : true,
       unique : [true, "Email-Id already present."],
       validate(value){

           if (!validator.isEmail(value)){
                
               throw new Error("Invalid Email!");
             
           }
       }
    },

    phone :{

        type : Number ,
        required : true,
        unique: true,
        min : 10
    },

    address : {

        type : String,
        required : true,

    }


})


// now we create a new collection

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;
