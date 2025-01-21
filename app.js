const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const userModel = require("./models/user");
const postModel = require("./models/post");
const crypto =require("crypto");
const multer = require("multer");
const upload=require("./config/multerconfig");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.listen(3000);