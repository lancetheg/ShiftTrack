const express = require("express");

const router = express.Router();

const {
  clockIn,
  clockOut,
  getAttendance
}
=
require(
  "../controllers/attendanceController"
);

router.post("/clock-in", clockIn);

router.post("/clock-out", clockOut);

router.get("/", getAttendance);

module.exports = router;