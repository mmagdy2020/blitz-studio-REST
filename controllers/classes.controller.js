const DanceClass = require('../models/classes.model')

exports.insert = (req, res, next) => {

    
    DanceClass.create(req.body)
        .then(result => {
            res.status(201).send({ id: result._id });
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        });
};

exports.list = (req, res, next) => {
    DanceClass.find()
        .then(classes => {
            res.status(200).send(classes);
        })
        .catch(err => {
            res.status(500).send({ errMsg: err });
        });
}