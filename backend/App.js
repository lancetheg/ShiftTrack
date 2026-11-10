const express = require("express");
const cors = require("cors");

const attendanceRoutes =
require("./routes/attendanceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/attendance",
  attendanceRoutes
);

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});