const express = require('express');

const router = express.Router();

const Entry = require('../models/Entry');

const getEntry = async (req, res, next) => {
    let entry
    try {
        entry = await Entry.findById(req.params.id)
        if(entry === null){
            return res.status(404).json({ message: "Entry not found" })
        }
    } catch (error){
        return res.status(500).json({ message: error.message })
    }
    res.entry = entry
    next();
}

router.get('/', async (req, res) => {
    try {
        const entries = await Entry.find()
        res.json(entries)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', getEntry, (req, res) => {
    res.json(res.entry)
})

router.post('/', async (req, res) => {

    const entry = new Entry({
        username: req.body.username,
        title: req.body.title,
        content: req.body.content,
        created_at: req.body.created_at
    });
    try {
        const newEntry = await entry.save();
        res.status(201).json(newEntry)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

router.patch('/:id', getEntry, async (req,res) => {
    if(req.body.username != null){
        res.entry.username = req.body.username
    }
    if(req.body.title != null){
        res.entry.title = req.body.title
    }
    if(req.body.content != null) {
        res.entry.content = req.body.content
    }
    try {
        const updatedEntry = await res.entry.save()
        res.json(updatedEntry)
    } catch (error){
        res.status(400).json({ message: error.message })
    }
})

router.delete("/:id", getEntry, async (req, res) => {
    const id = req.params.id;
    try {
        const deletedEntry = await res.entry.remove({ _id: id });
        res.json({ message: "Entry deleted"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;