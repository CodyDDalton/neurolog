const express = require('express');
const router = express.Router();
const Member = require('../models/member');
const mongoose = require('mongoose');

router.post('/', (req, res) => {
    console.log('Saving member');
    
    Member.find({
        name: req.body.name,
        email:req.body.email
    })
    .exec()
    .then((result) => {
        console.log(result);
        if(result.length > 0){
            return res.status(200).json({
                message:'Member already registered'
            })
        }
        else{
            const newMember = new Member({
                _id: mongoose.Types.ObjectId(),
                name:req.body.name,
                email:req.body.email,
            });

            newMember.save()
                .then(result => {
                    console.log(result);
                    res.status(200).json({
                        message: "Member officially registered!",
                        member: {
                            id:result._id,
                            name:result.name,
                            email:result.email,
                        }
                    })
                })
        }
    })
    .catch(err =>{
        console.error(err.message);
        res.status(500).json({
            error:{
                message:'Unable to add member'
            }
        })
    });
});

router.get('/', (req, res) => {
    
    Member.find()
        // .select("name _id email")
        .exec()
        .then(members => {
            console.log(members)
            res.json({
                message:'GLOPP Members',
                members: members
            })
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Member.findById(id)
    .select("_id name email location occupation bio")
    .exec()
        .then(member => {
            console.log(member)
            res.status(200).json({
                message: 'Found Member by ID',
                member: {
                    member,
                }

            })
        })
        .catch(err => {
            res.status(500).json({
                error:{
                    message: err.message,
                }
            })
        });
});

module.exports = router;