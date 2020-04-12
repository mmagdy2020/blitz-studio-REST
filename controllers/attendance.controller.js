const Attendance = require('../models/attendance.model');

exports.insert = async (req, res, next) => {
    try {
        let result = await Attendance.create(req.body);
        res.status(201).send({ isSuccess: true, result: result });
    } catch (err) {
        res.status(500).send({ isSuccess: false, errMsg: err });
    }
}
exports.list = async (req, res, next) => {
    const query = req.query;
    console.log('query : ', query);
    
    if (Object.keys(query).length > 0) {
        // filter Attendances
        try {
            let result = await findOne(query);
            console.log('filtered reslult: ', result);

            res.status(200).send({ isSuccess: true, result: result });
        } catch (err) {
            res.status(500).send({ isSuccess: false, errMsg: err });
        }

    } else {
        // get all attendances
        try {
            let result = await Attendance.find();
            console.log('all attendance list: ', result);
            res.status(200).send({ isSuccess: true, result: result });
        } catch (err) {
            res.status(500).send({ isSuccess: false, errMsg: err });
        }
    }
}
exports.getById = async (req, res, next) => {
    try {
        let result = await Attendance.getById(req.params.id);

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

// helper method
const findOne = async (filter) => {
    let result = await Attendance.findOne(filter);
    return result;
}
