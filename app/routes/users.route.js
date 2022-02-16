

const express = require('express');
const { getUsers, getTotalUsers, getUserById, createUser, deleteUser, patchUser } = require('../controllers/users.controller');
const router= express.Router();

const validateUsers = require("../validators/validateUsers");

const upload = require("../utils/fileUpload");

router.get("/", getUsers);

router.get("/total", getTotalUsers);

router.get("/:id", getUserById);

router.post("/", ...validateUsers(), upload.single("avatar"),createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);

module.exports = router;
