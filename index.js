
const express = require('express');
const app = express();
// connect with ongo server
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection succesfull"))
  .catch((err) => console.log(err));

  // we can pass json file
app.use(express.json());
app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
