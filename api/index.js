const express = require("express");
const app = express();

const port = process.env.PORT || 3000; // You can use environment variables for port configuration

const usersRoute = require("./routes/users");
app.use("/users", usersRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Include route files
