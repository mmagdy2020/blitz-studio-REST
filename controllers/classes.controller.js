const DanceClass = require("../models/classes.model");

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
};

exports.getById = (req, res, next) => {
  DanceClass.findById(req.params.classId)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({ errMsg: err });
    });
};

exports.deleteById = (req, res, next) => {
  DanceClass.findByIdAndDelete(req.params.classId)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({ errMsg: err });
    });
};

exports.updateById = (req, res, next) => {
  DanceClass.findById(req.params.classId)
    .then(dClass => {
      for (let i in req.body) {
        dClass[i] = req.body[i];
      }
      return dClass.save();
    })
    .then(result => {
      res.status(500).send({ errMsg: err });
    });
};
