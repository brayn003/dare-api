const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
  Interest: {
<<<<<<< HEAD
    type: 'string',
    required: true,
    unique: true,
  },
=======
  type: 'string',
  required: true,
  unique: true
  },
  ImageURL: {
    type: 'string',
    required: true,
    unique: true
  }
>>>>>>> 0e2a52df87c3d0c7146fbb75736dd43c22c716d3
}, {
  collection: 'Interest',
  userAudits: true,
  timestamps: true,
});

<<<<<<< HEAD
// InterestsSchema.statics.createOne = async function () {
//   const newInterest =
// }
=======
module.exports = mongoose.model('Interest', InterestSchema);
>>>>>>> 0e2a52df87c3d0c7146fbb75736dd43c22c716d3
