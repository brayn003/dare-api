const mongoose = require('mongoose');

const { Schema } = mongoose;


const Interest = require('./Interest');

const DareSchema = new Schema({

  interestId: {
    type: 'ObjectId',
    ref: Interest,
  },
  points: Number,
  description: String,
  latitude: Number,
  longitude: Number,
  image: String,

  startdate: {
    type: Date,
  },

  enddate: {
    type: Date,
  },
},
{
  collection: 'dare',
  timestamps: true,
  userAudits: true,
});


module.exports = mongoose.model('Dare', DareSchema);
