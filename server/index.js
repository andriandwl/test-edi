import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/index.js";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(cors());
app.use("/user", userRouter);

// Mongodb cloud atlas

// const CONNECTION_URL =
//   "mongodb+srv://andriandwi123:andriandwi123@cluster0.rqjszec.mongodb.net/";
const PORT = process.env.PORT || 5005;

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   )
//   .catch((err) => console.log(err.message));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
