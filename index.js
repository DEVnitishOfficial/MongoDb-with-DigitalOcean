const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose");
const path = require("path");
const port = 3015;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));



const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    if (connection) {
      console.log(`Connected to MongodDB at : ${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectToDB();

const bookingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    arrivalDate: Date,
    departureDate: Date,
    country: String,
    paymentMode: [String],
  });
  
  const Booking = mongoose.model("Booking", bookingSchema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/booking', async (req,res) => {
  
    const {
        firstName,
        lastName,
        email,
        arrivalDate,
        departureDate,
        country,
        paymentMode,
      } = req.body;

    const newBooking = new Booking({
        firstName,
        lastName,
        email,
        arrivalDate,
        departureDate,
        country,
        paymentMode,
      });
      const savedNewBooking = await newBooking.save()
      res.send("data saved successfullly")

})

app.listen(port, (req, res) => {
  console.log(`server is listening on port http://localhost:${port}`);
});

