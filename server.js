require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

// Shut down server if Uncaught Exception occurs

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception, Shutting down server");
  process.exit(1);
});
let URI;
if (process.env.NODE_ENV === "DEV") {
  URI = process.env.LOCAL_DB;
} else {
  URI = process.env.PROD_DB;
}
// mongo connection
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Db Connected", URI);
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

// start server
const server = app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

// Shut down server if unhandled rejection occurs
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection, Shutting Down");
  server.close(() => {
    process.exit(1);
  });
});
