require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const { file } = require("googleapis/build/src/apis/file");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//Routes
app.use("/user", require("./routes/AdminRoutes"));



//DatabaseConnect
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongodb Connected");
  }
);



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
