import { config as dotenvConfig } from "dotenv";
import { APP_PATH } from "./app.js";
import { join } from "path";
const dotEnvPath = join(APP_PATH, "..", ".env");
dotenvConfig({ path: dotEnvPath });
import { connectDb } from "./db/index.js";
import { app } from "./app.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`\n Server is listening at Port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Mongodb connection failed : ${err}`);
  });
