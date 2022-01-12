const app = require("./index");
const connect = require("./configs/db");
app.listen(2022, async () => {
  try {
    await connect();
    console.log("Listening on port 2022");
  } catch (e) {
    console.log(e.message);
  }
});
