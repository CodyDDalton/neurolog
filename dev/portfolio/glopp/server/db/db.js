const Member = require('../models/member');

const saveMember = async (newMember) => {
    return await newMember.save();
};

const findMember = async (object) => {
    return await Member.find(object).exec();
};

const findMemberById = async () => {
    return await Member.findById().exec();
};

module.exports = { saveMember, findMember, findMemberById, updateMember }