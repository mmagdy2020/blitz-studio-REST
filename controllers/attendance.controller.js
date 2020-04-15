const Attendance = require('../models/attendance.model');

exports.insert = async (req, res, next) => {
    console.log('inside insert............', req.body);
    try {
        let result = await Attendance.create(req.body);

        console.log('inside insert............', result)
        res.status(201).send({ isSuccess: true, result: result });
    } catch (err) {
        res.status(500).send({ isSuccess: false, errMsg: err });
    }
}

exports.list = async (req, res, next) => {
    try {
        let result = await Attendance.find();
        res.status(200).send({ isSuccess: true, result: result });
    } catch (err) {
        res.status(500).send({ isSuccess: false, errMsg: err });
    }
}
exports.getById = async (req, res, next) => {
    try {
        let result = await Attendance.findById(req.params.id);
        res.status(200).send({ isSuccess: true, result: result });
    } catch (err) {
        res.status(500).send({ isSuccess: false, errMsg: err });
    }
}
exports.update = async (req, res, next) => {
    let filter = { _id: req.params.id };
    let newDoc = req.body;
    try {
        let updatedDoc = await Attendance.findOneAndUpdate(filter, newDoc, { new: true });
        
        res.status(201).send({ isSuccess: true, result: updatedDoc });
    } catch (err) {
        res.status(500).send({ isSuccess: false, errMsg: err });
    }
}
exports.remove = async (req, res, next) => {
    let filter = { _id: req.params.id };
    try {
        let result = await Attendance.findOneAndRemove(filter);
        res.status(200).send({ isSuccess: true, result: result });
    } catch (err) {
        res.status(500).send({ isSuccess: false, errMsg: err });
    }
}