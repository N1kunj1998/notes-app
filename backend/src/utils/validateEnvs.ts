import "dotenv/config";
import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
    MONGO_CONNECTION_URI: str(),
    PORT: port()
})