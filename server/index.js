const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const CatalogModel = require("./models/Catalog");
const DistributorModel = require("./models/Distributor");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());

//Add Catalog
app.post("/addCatalog", async (req, res) => {
  const { bean, description, price } = req.body;

  const newCatalog = new CatalogModel({
    bean,
    description,
    price,
  });
  await newCatalog.save();

  res.json({
    code: 200,
    messageTitle: "Product berhasil ditambahkan!",
  });
});

//Get Catalog
app.get("/getCatalog", async (req, res) => {
  try {
    const result = await CatalogModel.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

//ADD Distributor
app.post("/addDistributor", async (req, res) => {
  const { name, city, state, country, email, phone } = req.body;
  try {
    const newDistributor = new DistributorModel({
      name,
      city,
      state,
      country,
      email,
      phone,
    });
    await newDistributor.save();
    res.json({
      code: 200,
      messageTitle: "Distributor berhasil ditambah!",
    });
  } catch (err) {
    res.json(err);
  }
});

//GET Distributor
app.get("/getDistributor", async (req, res) => {
  try {
    const result = await DistributorModel.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

//GET specific Distributor
app.post("/findDistributor", async (req, res) => {
  try {
    const result = await DistributorModel.findOne({ _id: req.body.id });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

//Edit Distributor
app.put("/editDistributor", async (req, res) => {
  try {
    const result = await DistributorModel.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
  } catch (err) {
    res.json(err);
  }
});

//Register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({
      code: 403,
      messageTitle: "Username telah digunakan!",
      messageContent: "Silahkan coba masukkan username lain",
      closeCaption: "Coba Lagi",
      link: "/auth?mode=signup",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({
    code: 200,
    messageTitle: "Akun berhasil dibuat!",
    messageContent: "Sekarang kamu bisa masuk pakai akun barumu",
    closeCaption: "Login",
    link: "/auth?mode=signin",
  });
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({
      messageTitle: "User tidak terdaftar!",
      code: 403,
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({
      messageTitle: "Password Salah!",
      code: 403,
    });
  }

  const token = jwt.sign({ id: user._id }, "SECRET");
  res.json({ token, username: user.username, code: 200 });
});

mongoose.connect(
  "mongodb+srv://geraldnicholaschgnc:ZTg5WXg6yWs5eGce@cluster0.agxny0g.mongodb.net/coffeevalley?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("SERVER RUN!");
});
