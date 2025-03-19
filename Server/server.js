const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const signRoutes = require("./routes/signRoutes");
const speechRoutes = require("./routes/speechRoutes");


dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/sign", signRoutes);
app.use("/api/speech", speechRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

