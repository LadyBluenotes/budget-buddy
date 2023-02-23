const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(401).json({ message: "Email is already in use." });
        }
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        const user = new User({
            name,
            email,
            password: hash
        });
        await user.save();
        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "24h" });
        res.status(200).json({ token });
    } catch (err) {
        res.status(401).send( err.message );
    }
};
