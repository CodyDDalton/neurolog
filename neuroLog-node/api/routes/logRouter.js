const express = require('express');

const router = express.Router();

const Log = require('../models/Log');

const getLog = async (req, res, next) => {
    let log
    try {
        log = await Log.findById(req.params.id)
        if(log === null){
            return res.status(404).json({ message: "Entry not found" })
        }
    } catch (error){
        return res.status(500).json({ message: error.message })
    }
    res.log = log
    next();
}

router.get('/', async (req, res) => {
    try {
        const log = await Log.find()
        res.json(log)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', getLog, (req, res) => {
    res.json(res.log)
})

router.post('/', async (req, res) => {

    const log = new Log({
        username: req.body.username,
        mood: req.body.mood,
        content: req.body.content,
        created_at: req.body.created_at
    });
    try {
        const newLog = await log.save();
        res.status(201).json(newLog)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

router.patch('/:id', getLog, async (req,res) => {
    if(req.body.username != null){
        res.entry.username = req.body.username
    }
    if(req.body.mood != null){
        res.entry.mood = req.body.mood
    }
    if(req.body.content != null) {
        res.entry.content = req.body.content
    }
    try {
        const updatedLog = await res.log.save()
        res.json(updatedLog)
    } catch (error){
        res.status(400).json({ message: error.message })
    }
})

router.delete("/:id", getLog, async (req, res) => {
    try {
        await res.log.remove();
        res.json({ message: "Log deleted"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;