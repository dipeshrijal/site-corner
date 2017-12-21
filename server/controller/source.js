'use strict';

const Source = require('../model/source');

exports.create = function (req, res) {
  Source.create(req.body, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};


exports.get = function (req, res) {
  Source.getAll({}, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });

};

exports.update = function (req, res) {
  Source.updateById({_id: req.params.id}, req.body, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};

exports.updateComments = function (req, res) {
  Source.findOneAndUpdate({_id: req.params.id}, {$push: {comment: req.body}}, {
    safe  : true,
    upsert: true
  }, function (err, result) {
    if (! err) {
      return res.json(result);
    } else {
      return res.send(err);
    }
  });
};

exports.delete = function (req, res) {
  Source.remove({_id: req.params.id}, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};

exports.findOne = function (req, res) {
  Source.findOne({_id: req.params.id},  function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};
