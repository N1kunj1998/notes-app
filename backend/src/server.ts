import env from "./utils/validateEnvs";
import mongoose from "mongoose";
import app from "./app";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_URI).then(() => {
    console.log("Mongoose Connected");
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    }).on("error", (err) => {
        console.error(`Server failed to start: ${err}`);
    });
}).catch(console.error);