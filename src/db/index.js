import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const CONNECT_DB = async ()=>{
    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${ConnectionInstance.connection.host}`);
    } catch (error) {
        console.error( "MONGODB CONNECTION ERROR", error);
        process.exit(1)
    }
}

export default CONNECT_DB;