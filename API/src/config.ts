import dotenv from "dotenv";
dotenv.config()

export default{
    MONGO_DATABASE :process.env.MONGO_DATABASE || 'market-pos',
    MONGO_USER :process.env.MONGO_USER ||"ad,in",
    MONGO_PASSWORD: process.env.MONGO_ADMIN ||"admin",
    MONGO_HOST : process.env.MONGO_HOST || "localhost",
    PORT:process.env.PORT || 5000
}