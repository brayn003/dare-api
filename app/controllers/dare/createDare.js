const Dare = require('../../models/Dare');

module.exports = async (req,res) => {
const {interestId} = req.body
const dare = await dare.addOne(interestId, interest.id);
return res.status(201).json(dare);
  
}
module.exports=controller;