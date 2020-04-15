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
      dClass.save();
      res.status(200).send(dClass);   // MO - Fixing Patch problem from not returning a result...
<<<<<<< HEAD

=======
>>>>>>> d399e2f530c314ab6365fea60bf0985010b18d90
    })
    .catch(err => {
      res.status(500).send({ errMsg: err });
    });
}

exports.createSerieById = (req,res,next) =>{
  DanceClass.findById(req.params.classId)
  .then(dClass=>{
    dClass.seriesClass.push(req.body)
    dClass.save()
    res.status(200).send(dClass); 
  })
  .catch(err => {
    res.status(500).send({ errMsg: err });
  });
}

exports.updateSerieById = (req,res,next) =>{
  DanceClass.findById(req.params.classId)
  .then(dClass=>{
    const updatedOne = dClass.seriesClass.find(serie=> serie._id == req.body._id)
// console.log(updatedOne)
    for (let i in req.body) {
      updatedOne[i] = req.body[i];
    }
    dClass.save()
    console.log(dClass)
    res.status(200).send(dClass); 
   
  })
  .catch(err => {
    res.status(500).send({ errMsg: err });
  });
}
