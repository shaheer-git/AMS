const express = require('express');
const router = express.Router();
const User = require('../models/user');
    
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/:department', async (req, res) => {
    let dept = req.params.department;
    try {
        const users = await User.find({department: dept});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('login-time/:empConCode', async (req, res) => {
    let empConCode = req.params.empConCode;
    let currentTime = new Date();
    try {
        const users = await User.updateOne({empConCode: empConCode}, {$set:{lastLoginTime: currentTime}});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('logOut-time/:empConCode', async (req, res) => {
    let empConCode = req.params.empConCode;
    let currentTime = new Date();
    try {
        const users = await User.updateOne({empConCode: empConCode}, {$set:{lastLogOutTime: currentTime}});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ "Error": error.message })
    }
});

router.delete('/', async (req, res) => {
    try {
        const deletionResult = await User.deleteMany({});
        res.json({
            message: `${deletionResult.deletedCount} users deleted successfully`,
          });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;