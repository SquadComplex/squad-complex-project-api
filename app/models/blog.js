'use strict';

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  //form fields for blog display
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      let userId = (options.user && options.user._id) || false;
      ret.editable = userId && userId.equals(doc._owner);
      return ret;
    },
  },
});

// blogSchema.virtual('length').get(function length() {
//   return this.text.length;
// });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
