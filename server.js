import express from "express";
import Jwt, { decode } from "jsonwebtoken";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const checkToken = (req, res, next) => {
  const checkToken = req.headers["authorization"];
  if (token) {
    Jwt.verify(token, "1234", (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token invalido" });
      }
    });
    next();
  } else {
    return res.status(404).json({ message: "Onde esta o Token?" });
  }
};

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("Servidor rodando!");
});
