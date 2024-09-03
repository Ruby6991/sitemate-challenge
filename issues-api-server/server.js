import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import issuesRoutes from "./routes/issues.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/issues", issuesRoutes);
app.get("/", (req, res) => res.send("Welcome to the Issues API!"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
