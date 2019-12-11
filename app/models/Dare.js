const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const DareSchema = new Schema({

dare : String,
interest : String,
points : Number,
description: String,
latitude : Number,
longitude : Number,
image : String,
},
{
collection: 'dare',
timestamps: true,
userAudits: true,
});

module.exports = mongoose.model('Dare', DareSchema);

