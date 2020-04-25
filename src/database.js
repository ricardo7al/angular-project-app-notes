const mongoose = require("mongoose");

const { APP_NOTES_MONGODB_HOST, APP_NOTES_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${APP_NOTES_MONGODB_HOST}/${APP_NOTES_MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })

  .then((db) => console.log("database is connected"))
  .catch((err) => console.log(err));
