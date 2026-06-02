require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/Database/db");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});