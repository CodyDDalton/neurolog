const express = require('express');

const router = express.Router();

const User = require('../models/User');

const bcrypt = require('bcrypt-nodejs');

const jwt = require('node-jsonwebtoken');

const getUser = async (req, res, next) => {
    let user
    try {
        user = await User.findById(req.params.id)
        if(user === null){
            return res.status(404).json({ message: "User not found" })
        }
    } catch (error){
        return res.status(500).json({ message: error.message })
    }
    res.user = user
    next();
}

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

router.post('/register', async (req, res) => {

    const user = new User({
            firstName: req.body.firstName,
            username: req.body.username,
            email: req.body.email,
            country: req.body.country,
            gender: req.body.gender,
            password: req.body.password,
            settings: ""
        
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    await User.find({ username: username })
        .then((user) => {
            if(user.length > 0){
                console.log(user);
                let userPass = user[0].password;
                bcrypt.compare(password, userPass, function (error, isValid) {
                    if(isValid) {   
                              
                const token = generateToken(user);
                res.send({
                        firstName: user[0].firstName,
                        username: user[0].username,
                        email: user[0].email,
                        country: user[0].country,
                        gender: user[0].gender,
                        password: user[0].password,
                        token: token
                    });
                    } else {
                        res.status(401).json({ message: "Invalid Credentials" });
                    }
                })
            }
        })
        .catch((error) => {
            res.status(500).json(error);
        });

        function generateToken(user) {
            const payload = {
              userid: user.id,
              username: user.username,
            };
            const options = {
              expiresIn: "1h",
            };
            const token = jwt.sign(payload, "ddrtetherehsfgest35636353453453te4hhgfxfrjrtyryrt", options);
          
            return token;
          }
});

router.patch('/:id', getUser, async (req,res) => {
    if(req.body.firstName != null){
        res.user.firstName = req.body.firstName
    }
    if(req.body.username != null){
        res.user.username = req.body.username
    }
    if(req.body.email != null){
        res.user.email = req.body.email
    }
    if(req.body.password != null) {
        res.user.password = req.body.password
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error){
        res.status(400).json({ message: error.message })
    }
})

router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: "User deleted"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;