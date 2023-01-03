import express from "express";
import morgan from "morgan";
import config from "./config";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
<<<<<<< HEAD
import product from "./routes/models/ProductsModel";
// import connectDB from "./database";
const register = require("./routes/register");
const login = require("./routes/login");
// const stripe = require("./routes/payment");
=======
// import fs from 'fs'
// import path, { dirname } from 'path'
import product from "./models/products";
import connectDB from "./database";
const register = require("./routes/register");
const login = require("./routes/login");
// const paypal = require("./routes/paypmentPP");
// const mercadoPago = require("./routes/paymentMp");
// const stripe = require("./routes/paymentStripe");
>>>>>>> 302d40c4b91cae37b02edd0dbc7eed091e25da9c

dotenv.config();
const app = express();

// connectDB();

mongoose.set("strictQuery", true);
require("dotenv/config");

app.set("port", config.PORT || 3001); // quiero que se establezca este puerto
app.use(morgan("dev")); // me muestra la petición que hice en la terminal
app.use(cors()); // cors me permite a cualquier servidor hacer peticiones
app.use(express.json()); // para poder entender los obj json cuando hacemos peticiones Post con un dato
app.use(express.urlencoded({ extended: true })); // para que pueda entender los campos que llegan desde el formulario
app.use(bodyParser.json());
app.set("view engine", "ejs"); // se ve en el vistas carpeta para las plantillas que hacen.



app.use("/api/register", register);
app.use("/api/login", login);
<<<<<<< HEAD
=======
// app.use("/api/paypal", paypal);
// app.use("/api/mercadopago", mercadoPago);
>>>>>>> 302d40c4b91cae37b02edd0dbc7eed091e25da9c
// app.use("/api/stripe", stripe);

app.get("/products", (req, res) => {
  try {
    product.find({}).then((product: any) => {
      res.json(product);
    });
  } catch (error) {
    res.send(error);
  }
});

app.get("/products/:productName", (req, res) => {
  try {
    const { productName } = req.params;

    product.find({ name: productName }).then((product: any) => {
      res.json(
        product.length > 0 ? product : "No hay ningun producto con ese nombre"
      );
    });
  } catch (error) {
    res.send(error);
  }
});

export default app;
