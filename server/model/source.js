'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const SourceSchema = new Schema({
  url: {type: String},
  title: {type: String},
  description: {type: String},
  likes: {type: Number},
  dislikes: {type: Number},
  comment: [{
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    comment: {type: String},
    date: {type: Date, default: Date.now},
  }]
});

SourceSchema.statics = {

  get: function (query, callback) {
    this.findOne(query, callback);
  },

  getAll: function (query, callback) {
    this.find(query, callback);
  },

  updateById: function (query, updateData, callback) {
    this.update(query, {$set: updateData}, callback);
  },

  delete: function (removeData, callback) {
    this.remove(removeData, callback);
  },

  create: function (data, callback) {
    const product = new this(data);
    product.save(callback);
  }
};


const User = mongoose.model('Source', SourceSchema);

module.exports = User;
