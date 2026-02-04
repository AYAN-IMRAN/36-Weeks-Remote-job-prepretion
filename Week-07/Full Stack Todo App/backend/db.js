import mongoose from "mongoose";

export async function connecToDb() {
const connect = await mongoose.connect("mongodb://localhost:27017/myfistTodoApp")


try {
    if(connect) {
        console.log("Succefully Connectedt to DB");
        
    }
} catch (error) {
    console.log("Error while Connecting to DB");
    
}
}