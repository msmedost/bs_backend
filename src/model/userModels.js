import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
                                       
    },
    gender: {
        type: String,
       
    },
    whatsappno: {
        type: String,
        
    },
    alternateno: {
        type: String,
    },
    email: {
        type: String,
        
    },
    dob: {
        type: String,
                                        
    },
    doma: {
        type: String,
        
    },
    blood: {
        type: String,
        
    },
    interesrarea: {
        type: String,
        
    },
    businessname: {
        type: String,
        
    },
    businesscategory: {
        type: String,
                                          
    },
    nob: {
        type: String,
        
    },
    bs: {
        type: String,
        
    },
    ba: {
        type: String,
        
    },
    pincode: {
        type: String,
        
    },
    city: {
        type: String,
                                         
    },
    wlink: {
        type: String,
       
    },
    textarea: {
        type: String,
        
    },
    userPhoto: {
        type: String,
        
    },
    yourlogo: {
        type: String,
        
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
      },
});

export const Form = mongoose.model('Form', userSchema);