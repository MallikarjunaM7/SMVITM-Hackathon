const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const itemRoutes = require("./router/item-router");
const adminRoutes = require("./router/admin-router");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use("/api/items", itemRoutes);
app.use("/api/admins", adminRoutes);

// Connect to MongoDB
connectDB();
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
