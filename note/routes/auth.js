const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');



// REGISTER
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.username,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });
    try {

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);

    }

})


// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            res.status(500).json("Wrong credentials! USER");
        }

        const hasdedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const password = hasdedPassword.toString(CryptoJS.enc.Utf8);

        if (password === req.body.password) {
            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            }, process.env.JWT_SEC, { expiresIn: "3d" })

            res.status(200).json({ ...user._doc, accessToken });
        } else {
            res.status(500).json("Wrong credentials! PASSWORD");
        }

    } catch (err) {
        res.status(500).json("Wrong credentials! PASSWORD");


    }
})


module.exports = router