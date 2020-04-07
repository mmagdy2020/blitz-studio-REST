const User = require('../models/user.model')

exports.insert = (req, res, next) => {
  console.log("insert: req.body", req.body)
  User.create(req.body)
    .then(result => {
      console.log("insert: result",result);
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send({ errMsg: err });
    });
};

exports.list = (req, res, next) => {
  User.find()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      res.status(500).send({ errMsg: err });
    });
}
exports.findById = (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      console.log("authenticate user found:", user);
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send({ errMsg: err });
    });

}
exports.authenticate = (req, res, next)=>{
  User.findOne({password: req.body.password, email: req.body.email})
    .then(user => {
      console.log("authenticate user found:",user);
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send({ errMsg: err });
    });

}
exports.check = (req, res, next)=> {
  User.findOne({ email: req.body.email })
    .then(user => {
      // console.log("does user exist:", user ? true : false);
      res.status(200).send({userExists: user?true:false});
    })
    .catch(err => {
      res.status(500).send({ errMsg: err });
    });
}