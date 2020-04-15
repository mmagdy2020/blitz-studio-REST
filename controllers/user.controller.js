const User = require('../models/user.model')


/**
* CREATE: insert user into database
*/
exports.insert = (req, res, next) => {
  console.log("insert: req.body pre change", req.body);
  req.body._id = undefined;
  console.log("insert: req.body post change", req.body);

  User.create(req.body)
    .then(result => {
      console.log("insert: result", result);
      res.status(201).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ errMsg: err });
    });
};
/**
* READ: get all users in database
*/
exports.list = (req, res, next) => {
  User.find().sort({ firstname: 1 })
    .then(users => {
      const returnUsers = users.map(user => { user.password = undefined; return user });
      console.log("list:", returnUsers)
      res.status(200).send(returnUsers);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ errMsg: err });
    });
}
/**
* READ: get a user by ID in database
*/
exports.findById = (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      console.log("findById user found:", user);
      res.status(200).send(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ errMsg: err });
    });
}

/**
* READ: with filter
* authenticate user with email and password
* returns: If user is authenticated, return user, else error.
*/
exports.authenticate = (req, res, next) => {
  User.findOne({ password: req.body.password, email: req.body.email })
    .then(user => {
      if (user) {
        user.password = undefined;
      }
      // console.log("authenticate user found:", user);
      res.status(200).send(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ errMsg: err });
    });

}
/**
* CHECK:
* determine if username/email already exists in database
*/
exports.check = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      // console.log("does user exist:", user ? true : false);
      res.status(200).send({ userExists: user ? true : false });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ errMsg: err });
    });
}

/**
* UPDATE: update user in database
*/
exports.update = (req, res, next) => {
  console.log("update: req.body", req.body);
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(user => {

      User.findById(req.params.id).then(updatedUser => {
        updatedUser.password = undefined;
        res.status(201).send(updatedUser);
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ errMsg: err });
    });
};
/**
* DELETE: delete user in database
*/
exports.deleteById = (req, res, next) => {
  console.log("delete: req.body", req.body);
  User.findByIdAndDelete(req.params.id)
    .then(_ => {
      console.log("delete");
      res.status(201).send();
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ errMsg: err });
    });
};